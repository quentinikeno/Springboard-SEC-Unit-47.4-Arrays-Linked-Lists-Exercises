/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		const newNode = new Node(val);
		if (this.head === null) this.head = newNode;
		if (this.tail !== null) this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (this.head !== null) newNode.next = this.head;
		if (this.tail === null) this.tail = newNode;
		this.head = newNode;
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (this.length === 0) throw new Error("The List is Empty.");

		const oldTail = this.tail;
		let currentNode = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			for (let i = 1; i < this.length - 2; i++) {
				currentNode = currentNode.next;
			}
			this.tail = currentNode;
			this.tail.next = null;
		}

		this.length--;
		return oldTail.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		const oldHead = this.head;

		if (this.length === 1) this.tail = null;
		this.head = oldHead.next;
		this.length--;
		return oldHead.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let currentNode = this.head;

		if (idx === 0) return currentNode.val;
		if (idx === this.length - 1) return this.tail.val;

		for (let i = 1; i < this.length - 2; i++) {
			currentNode = currentNode.next;
		}
		return currentNode.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let currentNode = this.head;

		if (idx === this.length - 1) currentNode = this.tail;
		for (let i = 1; i < this.length - 2; i++) {
			currentNode = currentNode.next;
		}
		currentNode.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {}

	/** average(): return an average of all values in the list */

	average() {}
}

module.exports = LinkedList;
