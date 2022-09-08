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

	/** _get(idx): return node at idx. */

	_get(idx) {
		let currentNode = this.head;

		if (idx === 0) return currentNode;
		if (idx === this.length - 1) return this.tail;

		for (let i = 1; i <= idx; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
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
			const beforeLastNode = this._get(this.length - 2);
			this.tail = beforeLastNode;
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
		return this._get(idx).val;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		const node = this._get(idx);
		node.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx === 0) {
			this.unshift(val);
		} else if (idx === this.length) {
			this.push(val);
		} else {
			const node = this._get(idx - 1);
			const newNode = new Node(val);
			const nextNode = node.next;

			node.next = newNode;
			newNode.next = nextNode;
			this.length++;
		}
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx === 0) return this.pop();
		if (idx === this.length) return this.shift();

		const node = this._get(idx - 1);
		const removedNode = node.next;
		const nextNode = node.next.next;

		node.next = nextNode;
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
