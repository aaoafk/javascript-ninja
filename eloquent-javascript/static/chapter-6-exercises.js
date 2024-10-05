// Vector Type
class Vec {
		#x; #y;
		constructor(x, y) {
				this.#x = x;
				this.#y = y;
		}

		get x() { return this.#x; }
		get y() { return this.#y; }
		set x(val) { this.#x = val; }
		set y(val) { this.#y = val; }

		plus(otherVector) {
				if (!otherVector instanceof Vec) {
						throw new Error(`Expected a Vec type but got a ${Object.getPrototypeOf(otherVector)}`);
				}
				return new Vec((this.x + otherVector.x), (this.y + otherVector.y));
		}

		minus(otherVector) {
				if (!otherVector instanceof Vec) {
						throw new Error(`Expected a Vec type but got a ${Object.getPrototypeOf(otherVector)}`);
				}
				// Main
				return new Vec((this.x - otherVector.x), (this.y - otherVector.y));
		}

		length() {
				//Distance from the origin
				return (Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)));
		}
}

let v1 = new Vec(10, 5);
let v2 = new Vec(1,1);
// console.log(v1.plus(v2));
// console.log(v1.length());
// console.log(v1.minus(v2));

// Groups
class Group {
		data = new Array();
		constructor() {}

		has(val) {
				for(let item of this.data) {
						if (item === val) {
								return true;
						}
				}
				return false;
		}

		add(val) {
				if (!this.has(val)) {
						this.data.push(val)
				}
		}

		delete(val) {
				let swap = (idx, otherIdx, arr) => {
						let val = arr[idx];
						arr[idx] = arr[otherIdx];
						arr[otherIdx] = val;
						return undefined;
				}
				for (var i = 0; i < this.data.length; i++) {
						if (this.data[i] === val) {
								swap(i, -1, this.data);
								this.data.pop();
						}
				}
		}

		static from(collection) {
				let groupFromCollection = new Group();
				for(let item of collection) {
						groupFromCollection.add(item)
				}
				return groupFromCollection;
		}
		// Symbol.iterator returns an object that has a `iterator` interface
		// `iterator` has a next method with the next result
		// result has a `value` property with the next value if there is one
		// `done` property is true if we're done otherwise its false.
}


let g1 = new Group();
// console.log(g1);
g1.add(5);
g1.add(5);
let g2 = Group.from([1,2,2,3,5]);
g1.delete(5);
// console.log(g2);

// Iterable groups

class GroupIterator {
		constructor(group) {
				this.group = group;
		}
		next() {
				let data = this.group.data; // this is private tho
		}
}
