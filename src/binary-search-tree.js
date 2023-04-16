const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(!this.rootNode) {
      this.rootNode =  new Node(data);
    }
    else {
      this.addHelper(this.rootNode, data);
    }
  }

  addHelper(node, data) {
    if(node.data === data) return;
    if(node.data < data) {
      if(node.right) {
        this.addHelper(node.right, data)
      }
      else {
        node.right = new Node(data);
      }
      return;
    }
    if(node.data > data) {
      if(node.left) {
        this.addHelper(node.left, data)
      }
      else {
        node.left = new Node(data);
      }
    }
  }

  has(data) {
    return this.hasHelper(this.rootNode, data);
  }

  hasHelper(node, data) {
    if(node.data === data) {
      return true;
    }
    if(node.data < data) {
      if(node.right) {
        return this.hasHelper(node.right, data)
      }
      else {
        return false;
      }
    }
    if(node.data > data) {
      if(node.left) {
        return this.hasHelper(node.left, data)
      }
      else {
        return false;
      }
    }
  }

  find(data) {
    return this.findHelper(this.rootNode, data);
  }

  findHelper(node, data) {
    if(node.data === data) {
      return node;
    }
    if(node.data < data) {
      if(node.right) {
        return this.findHelper(node.right, data)
      }
      else {
        return null;
      }
    }
    if(node.data > data) {
      if(node.left) {
        return this.findHelper(node.left, data)
      }
      else {
        return null;
      }
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data)
  }

  removeNode(node, value) {
    if(!node) {
      return null
    }

    if(value < node.data) {
      node.left = this.removeNode(node.left, value)
      return node
    } else if (node.data < value) {
      node.right = this.removeNode(node.right, value)
      return node
    } else {
      if(!node.left && !node.right) {
        return null
      }

      if(!node.left) {
        node = node.right
        return node
      }

      if(!node.right) {
        node = node.left
        return node
      }

      let rightMin = node.right
      while(rightMin.left) {
        rightMin = rightMin.left
      }

      node.data = rightMin.data
      node.right = this.removeNode(node.right, rightMin.data)
      return node
    }
  }

  min() {
    return this.minHelper(this.rootNode);
  }

  minHelper(node) {
    if(!node.data) {
      return null;
    }
    if(node.left) {
      return this.minHelper(node.left)
    }
    else {
      return node.data;
    }
  }

  max() {
    return this.maxHelper(this.rootNode);
  }

  maxHelper(node) {
    if(!node.data) {
      return null;
    }
    if(node.right) {
      return this.maxHelper(node.right)
    }
    else {
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};
