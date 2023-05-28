import React from "react";
import { ResultNode } from "../ResultNode";
import {
  StyledResultsBox,
  StyledResultsClearHistory,
  StyledResultNode,
} from "./styled";

interface ResultsBoxProps {
  items: string[];
  clearHistory?: () => void;
  retreive: (e: React.MouseEvent<HTMLAnchorElement>, resultKeys: string[]) => void;
  isHistory?: boolean;
}

export const ResultsBox: React.FC<ResultsBoxProps> = ({ items, clearHistory, retreive, isHistory }): JSX.Element => {
  
  const renderPredictions = () => items.map((result: string) => (
      <StyledResultNode href="#" onClick={(e) => retreive(e, [result])} key={result}>{result}</StyledResultNode>
  ));

  return items.length ? (
    <StyledResultsBox>
      {/* Show "ClearHistory if list is historyList" */}
      {isHistory ? (<StyledResultsClearHistory onClick={clearHistory}>Clear History</StyledResultsClearHistory>) : null}
      {renderPredictions()}
    </StyledResultsBox>
  ) : null;
}