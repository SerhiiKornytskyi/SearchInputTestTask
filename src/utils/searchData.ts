
interface SearchItems {
  [key: string]: string;
}

export interface SearchResult {
  searchItems: SearchItems,
  queryTime: string;
}

const searchItems: SearchItems = {
  "abcd": "amet sit ipsum Lorem dolor",
  "apple": "amet sit ipsum Lorem dolor",
  "banana": "dolor ipsum amet Lorem sit",
  "cherry": "Lorem ipsum dolor amet sit",
  "dragonfruit": "ipsum amet sit Lorem dolor",
  "elderberry": "Lorem ipsum dolor amet sit",
  "fig": "Lorem amet ipsum sit dolor",
  "grapefruit": "sit dolor amet ipsum Lorem",
  "honeydew": "Lorem sit amet ipsum dolor",
  "indigo": "sit dolor amet ipsum Lorem",
  "jackfruit": "sit Lorem amet dolor ipsum",
  "kiwi": "Lorem ipsum amet dolor sit",
  "lemon": "ipsum sit amet Lorem dolor",
  "mango": "Lorem sit amet dolor ipsum",
  "nectarine": "Lorem amet ipsum sit dolor",
  "orange": "Lorem ipsum sit dolor amet",
  "papaya": "amet dolor sit ipsum Lorem",
  "quince": "Lorem dolor sit amet ipsum",
  "raspberry": "Lorem dolor sit ipsum amet",
  "strawberry": "Lorem ipsum sit amet dolor",
  "tangerine": "sit Lorem ipsum amet dolor",
  "ugli fruit": "sit amet dolor ipsum Lorem",
  "vanilla": "Lorem dolor sit amet ipsum",
  "watermelon": "dolor sit amet Lorem ipsum",
  "xigua": "sit ipsum amet Lorem dolor",
  "yellow passionfruit": "Lorem dolor sit amet ipsum",
  "zucchini": "Lorem dolor sit amet ipsum",
  "mint": "amet sit ipsum Lorem dolor",
  "thyme": "amet sit ipsum Lorem dolor",
  "oregano": "dolor ipsum amet Lorem sit",
  "sage": "Lorem ipsum dolor amet sit",
  "parsley": "ipsum amet sit Lorem dolor",
  "basil": "Lorem ipsum dolor amet sit",
  "lavender": "Lorem amet ipsum sit dolor",
  "rosemary": "sit dolor amet ipsum Lorem",
  "cilantro": "Lorem sit amet ipsum dolor",
  "dragonfruit": "sit dolor amet ipsum Lorem",
  "jackfruit": "sit Lorem amet dolor ipsum",
  "strawberry": "Lorem ipsum amet dolor sit",
  "lemon": "ipsum sit amet Lorem dolor",
  "mango": "Lorem sit amet dolor ipsum",
  "kiwi": "Lorem amet ipsum sit dolor",
  "orange": "Lorem ipsum sit dolor amet",
  "banana": "amet dolor sit ipsum Lorem",
  "watermelon": "Lorem dolor sit amet ipsum",
  "cherry": "Lorem dolor sit ipsum amet",
  "tangerine": "Lorem ipsum sit amet dolor",
  "grapefruit": "sit Lorem ipsum amet dolor",
  "nectarine": "sit amet dolor ipsum Lorem",
  "papaya": "Lorem dolor sit amet ipsum",
  "quince": "dolor sit amet Lorem ipsum",
  "raspberry": "Lorem dolor sit ipsum amet",
  "apple": "Lorem ipsum sit amet dolor",
  "fig": "sit Lorem amet dolor ipsum",
  "elderberry": "Lorem sit amet dolor ipsum",
  "vanilla": "Lorem amet sit ipsum dolor",
  "ugli fruit": "Lorem dolor sit amet ipsum",
  "xigua": "sit amet dolor Lorem ipsum",
  "yellow passionfruit": "Lorem ipsum sit amet dolor",
  "zucchini": "Lorem dolor amet sit ipsum",
  "random": "Lorem ipsum dolor sit amet",
  "words": "Lorem ipsum dolor sit amet",
  "for": "Lorem ipsum dolor sit amet",
  "keys": "Lorem ipsum dolor sit amet",
  "emma": "amet sit ipsum Lorem dolor",
  "noah": "amet sit ipsum Lorem dolor",
  "olivia": "dolor ipsum amet Lorem sit",
  "liam": "Lorem ipsum dolor amet sit",
  "ava": "ipsum amet sit Lorem dolor",
  "asabella": "Lorem ipsum dolor amet sit",
  "sophia": "Lorem amet ipsum sit dolor",
  "mia": "sit dolor amet ipsum Lorem",
  "jackson": "Lorem sit amet ipsum dolor",
  "aiden": "sit dolor amet ipsum Lorem",
  "elijah": "sit Lorem amet dolor ipsum",
  "charlotte": "Lorem ipsum amet dolor sit",
  "henry": "ipsum sit amet Lorem dolor",
  "amelia": "Lorem sit amet dolor ipsum",
  "benjamin": "Lorem amet ipsum sit dolor",
  "harper": "Lorem ipsum sit dolor amet",
  "william": "amet dolor sit ipsum Lorem",
  "evelyn": "Lorem dolor sit amet ipsum",
  "james": "Lorem dolor sit ipsum amet",
  "abigail": "Lorem ipsum sit amet dolor",
};

// mocking API call
export const sampleWords: Promise<string[]> = () => new Promise((resolve) => {
  setTimeout(() => { resolve(Object.keys(searchItems)) }, 1000);
})

// get full search items by keys, also mocking API call
export const getSeachItems: Promise<SearchResult> = (keysToFilter) => {
  const startTime = Date.now();
  const resultObj = Object.keys(searchItems).reduce((result, key) => {
    if (keysToFilter.includes(key)) {
      result[key] = searchItems[key];
    }
    return result;
  }, {});
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const endTime = Date.now();
      const queryTime = `Query time: ${endTime - startTime} ms`;
      resolve({searchItems: resultObj, queryTime })}, 655);
  });
}
