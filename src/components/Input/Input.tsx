import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faClose } from "@fortawesome/free-solid-svg-icons";
import { sampleWords, getSeachItems } from "../../utils/searchData";
import { Tree } from "../../utils/Tree";
import { ResultsBox } from "../ResultsBox";
import { SearchResults } from "../SearchResults";
import {
  StyledInputWrap,
  StyledInput,
  StyledInputClear,
  StyledInputSearch,
  StyledInputPredicted,
} from "./styled";

export const Input = (): JSX.Element => {
  const searchInput = useRef(null);
  const [wordsTree, setWordsTree] = useState(new Tree());
  const [historyItems, setHistoryItems] = useState([]);
  const [predicted, setPredicted] = useState([]);
  const [searchResults, setSearchResults] = useState({});
  const [inputFocused, setInputFocused] = useState(false);
  const [delayedBlur, setDelayedBlur] = useState(null);
  
  const onFocus = () => {
    setInputFocused(true);
  }
  const onBlur = () => {
    // this is a workaround to prevent result components to disappear faster than click fired
    // Clear the previous delayed blur, if any
    clearTimeout(delayedBlur);
    setDelayedBlur(setTimeout(() => setInputFocused(false), 100));
  }

  useEffect(() => {
    // mocking API call 
    const fetchData = async () => {
      try {
        const words = await sampleWords();
        fillTree(words);
      } catch (error) {
        console.log("error: ", error);
      }
    }
    fetchData();
  }, []);

  // Let's fill a tree with array of words we got one by one:
  const fillTree = (words: string[]) => {
    const tree = new Tree();
    words.forEach((word) => tree.insertWord(word));
    setWordsTree(tree);
  }

  const handleChange = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (inputValue.length) {
      setPredicted(wordsTree.autocomplete(inputValue));
    } else {
      // clear predictions
      setPredicted([]);
    }
  }

  const clearHistory = () => {
    setHistoryItems([]);
  }

  const clearInput = () => {
    // Clear the input value and predicted
    searchInput.current.value = "";
    setPredicted([]);
  }

  const onSearchItemPass = async (keys) => {
    const seacrhResults = await getSeachItems(keys);
    setSearchResults(seacrhResults);
    clearInput();
  }

  const retreiveData = async (e: React.MouseEvent<HTMLAnchorElement>, resultKeys: string[]) => {
    e.preventDefault();
    // put selected item in history if it does not exist
    setHistoryItems([...new Set([...historyItems, ...resultKeys])]);
    // set output data for all predicted items
    onSearchItemPass(resultKeys);
  }

  const handleEnterPress = (event) => {
    if (event.key !== 'Enter') return;
    // set output data for all predicted items
    displayPredictedResults();
    onBlur();
  }

  const displayPredictedResults = async () => {
    onSearchItemPass(predicted);
  }

  const showHistory = () => inputFocused && !!historyItems.length && !predicted.length;

  return (
    <>
      <StyledInputWrap>
        <StyledInput
          ref={searchInput}
          onChange={handleChange}
          onKeyDown={handleEnterPress}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="search"
          type="text"
        />
        
        <StyledInputClear>
          <FontAwesomeIcon onClick={clearInput} icon={faClose} />
        </StyledInputClear>
        
        {/* show search only if predictions exists */}
        {predicted.length ?
          (<StyledInputSearch onClick={displayPredictedResults}>
            <FontAwesomeIcon icon={faSearch} />
          </StyledInputSearch>) :null }
        {/* render prediction results box or history box*/}
        
        {showHistory() ?
           (<ResultsBox items={historyItems} isHistory={true} clearHistory={clearHistory} retreive={retreiveData} />) : (<ResultsBox items={predicted} retreive={retreiveData} />)
        }
      
      </StyledInputWrap>
      {/* search results output  */}
      <SearchResults searchResults={searchResults} />
    </>
  );
}