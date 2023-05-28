export class Node {
  char: string;
  end: boolean;
  children: Map<string, Node>;

  constructor(char: string) {
    this.char = char;
    this.end = false;
    this.children = new Map();
  }
}

export class Tree {
  root: Node;

  constructor() {
    this.root = new Node('');
  }

  // insert word
  insertWord(word: string) {
    let node = this.root;
    for (let char of word) {
      // Check if node has current char
      // If no - set child 
      if (!node.children.has(char)) {
        node.children.set(char, new Node(char));
      }
      // step down to insert new char
      node = node.children.get(char)!;
    }
    node.end = true;
  }

  // recursive search of possible strings
  searchItems(node, results, prefix ){
      let combinedString = prefix + node.char;
      if (node.end) {
        results.push(combinedString);
      } else {
        for(let key of node.children.keys()) {
          this.searchItems(node.children.get(key), results, combinedString);
        }
      }
  }

  // autocomplete input string
  // find all words with given prefix
  autocomplete(inputWord: string) {
    let results: string[] = [];
    let node: Node = this.root;

    for (let char of inputWord) {
      if (!node.children.has(char)) return results;
      node = node.children.get(char)!;
    }

    this.searchItems(node, results, inputWord.substring(0, inputWord.length - 1));
    
    return results;
  }
}