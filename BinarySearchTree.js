class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }

    let currNode = this.root;
    while(currNode !== null) {
      if (currNode.value === value) {
        return this.root;
      }
      if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = new Node(value);
          return this.root;
        }
        currNode = currNode.right;
      } else {
        if (currNode.left === null) {
          currNode.left = new Node(value);
          return this.root;
        }
        currNode = currNode.left;
      }
    }
  }

  find(value) {
    const helper = (node) => {
      if (node === null) {
        return null;
      }
      if (node.value === value) {
        return node;
      }

      if (node.value > value) {
        return helper(node.left);
      }
      if (node.value < value) {
        return helper(node.right);
      }
    }

    return helper(this.root)
  }

  bfs() {
    let result = [];
    let queue = [];
    if (this.root) {
      queue.push(this.root);
      while(queue.length !== 0) {
        const curr = queue.shift();
        result.push(curr.value);
        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);
      }
    }
    return result;
  }
}

var tree = new BinarySearchTree();

tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
console.log(tree);
console.log(tree.find(11));
console.log(tree.bfs())
 //        10 
 //     7     15
 //        9