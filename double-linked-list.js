/** Node: node for a doubly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
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
		if (this.tail !== null) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		const newNode = new Node(val);
		if (this.head !== null) {
			this.head.prev = newNode;
			newNode.next = this.head;
		}
		if (this.tail === null) this.tail = newNode;
		this.head = newNode;
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (this.length === 0) throw new Error("The List is Empty.");

		const oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
		}

		this.length--;
		return oldTail.val;
	}

	/** shift(): return & remove first item. */

	shift() {
		const oldHead = this.head;
		if (this.length === 1) {
			(this.tail = null), (this.head = null);
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
		}
		this.length--;
		return oldHead.val;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		let currentNode = this.head;

		if (idx === 0) return currentNode.val;
		if (idx === this.length - 1) return this.tail.val;

		for (let i = 1; i <= idx; i++) {
			currentNode = currentNode.next;
		}
		return currentNode.val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let currentNode = this.head;

		if (idx === this.length - 1) currentNode = this.tail;
		for (let i = 1; i <= idx; i++) {
			currentNode = currentNode.next;
		}
		currentNode.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx === 0) {
			this.unshift(val);
		} else if (idx === this.length) {
			this.push(val);
		} else {
			let currentNode = this.head;
			let newNode = new Node(val);

			for (let i = 1; i <= idx - 1; i++) {
				currentNode = currentNode.next;
			}
			const nextNode = currentNode.next;
			currentNode.next = newNode;
			newNode.next = nextNode;
			this.length++;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx === 0) return this.pop();
		if (idx === this.length) return this.shift();

		let currentNode = this.head;

		for (let i = 1; i <= idx - 1; i++) {
			currentNode = currentNode.next;
		}
		const removedNode = currentNode.next;
		const nextNode = currentNode.next.next;
		currentNode.next = nextNode;
		this.length--;
		return removedNode.val;
	}

	/** average(): return an average of all values in the list */

	average() {
		if (this.length === 0) return 0;

		let sum = this.head.val;
		let currentNode = this.head;

		for (let i = 1; i < this.length; i++) {
			currentNode = currentNode.next;
			sum += currentNode.val;
		}
		return sum / this.length;
	}
}

module.exports = LinkedList;
