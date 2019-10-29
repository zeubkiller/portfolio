export class Node {
    constructor(data, next){
        this._data = data;
        this._next = next;
    }

    get data() {return this._data;}
    //set data(data) {this.data = data;}

    get next() {return this._next;}
    set next(next) {this._next = next}

}

export class LinkedList {
    constructor(){
        this.head = null;
    }

    _getLastNode() {
        let currentNode = this.head;
        while(currentNode.next !== null)
            currentNode = currentNode.next;

        return currentNode;
    }

    _getNodeBeforeLastNode() {
        let currentNode = this.head;
        let previousNode = null;
        while(currentNode.next !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return previousNode;
    }

    push(element) {
        if(element === null || element === undefined)
            return false;

        if(this.head === null) {
            this.head = new Node(element, null);
        } else {
            this._getLastNode().next = new Node(element, null);
        }

        return true;
    }

    pop() {
        if(this.head === null)
            return false;
        
        let nodeBeforeNode = this._getNodeBeforeLastNode();
        if(nodeBeforeNode === null)
            this.head = null;
        else
            nodeBeforeNode.next = null;

        return true;
    }

    display() {
        let stringArray = [];
        let currentNode = this.head;
        while(currentNode !== null){
            stringArray.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return stringArray;
    }

    _search(element) {
        let currentNode = this.head;
        let previousNodeBeforeSearchedNode = null;
        let searchedNode = null;
        while(currentNode != null && searchedNode === null) {
            if(currentNode.data === element) {
                searchedNode = currentNode;
                break;
            }

            previousNodeBeforeSearchedNode = currentNode;
            currentNode = currentNode.next;
        }

        return [searchedNode, previousNodeBeforeSearchedNode];
    }

    search(element) {
        return this._search(element)[0] !== null;
    }

    delete(element) {
        if(this.head === null)
            return false;
        
        const foundNode = this._search(element);
        const searchedNode = foundNode[0];
        const previousNode = foundNode[1];

        if(searchedNode === null)
            return false;

        if(searchedNode === this.head) {//First element
            this.head = searchedNode.next;
        }
        else if(searchedNode.next === null) {//Last element
            this._getNodeBeforeLastNode().next = null;
        }
        else { //Element in the middle
            previousNode.next = searchedNode.next;
        }
            
        return true;
    }
}

