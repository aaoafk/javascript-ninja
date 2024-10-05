(function() {
		// Chapter 2 exercises

		// Looping a triangle;
		// for (var i = 1; i < 8; i++) {
		// 		console.log("#".repeat(i));
		// }

		//FizzBuzz
		// for (var i = 1; i <= 100; i++) {
		// 		if (i % 3 === 0 && i % 5 === 0) {
		// 				console.log("FizzBuzz");
		// 		} else if (i % 5 === 0 && i % 3 !== 0) {
		// 				console.log("Buzz");
		// 		} else if (i % 3 === 0 && i % 5 !== 0) {
		// 				console.log("Fizz");
		// 		} else {
		// 				console.log(`${i}`);
		// 		}
		// }

		// const ROWS = 8;
		// const COLUMNS = 8;
		// const board = new Array(ROWS);
		// // Initialize columns
		// for (var i = 0; i < board.length; i++) {
		// 		board[i] = new Array(COLUMNS);
		// }

		// for (var i = 0; i < board.length; i++) {
		// 		for (var j = 0; j < board[i].length; j++) {
		// 				// Set cell to something
		// 				if(i % 2 === 0) {
		// 						if(j % 2 !== 0) { // if column is odd
		// 								board[i][j] = "#";
		// 						} else {
		// 								board[i][j] = " ";
		// 						}
		// 				} else {
		// 						if(j % 2 === 0) { // if column is even
		// 								board[i][j] = "#";
		// 						} else {
		// 								board[i][j] = " ";
		// 						}
		// 				}
		// 		}
		// }
		// console.log(board);

		// Chapter 3 Exercises

		let min = function(a,b) {
				return a > b ? b : a;
		}

		let evenNumber = function(d) {
				// even numbers can be negative too, if its negative then make it positive
				if (d < 0) {
						d = -d;
				}

				if (d === 0) {
						return true;
				} else if (d === 1) {
						return false;
				} else {
						return(evenNumber(d-2));
				}
		}

		// console.log(evenNumber(-50));
		// console.log(evenNumber(-2));
		// console.log(evenNumber(-1));
		// console.log(evenNumber(0));
		// console.log(evenNumber(1));
		// console.log(evenNumber(50));
		// console.log(evenNumber(75));

		// Count chars
		let countChars = function(str, chr) {
				let numberOfChars = 0;
				if (typeof str === "string") {
						for (var i = 0; i < str.length; i++) {
								if (str[i] === chr) {
										numberOfChars++;
								}
						}
				} else {
						console.log(`${str} is not a string. Please provide a string to this function.`);
				}

				return numberOfChars;
		}
		// console.log(countChars("OOOOO", "O"));

		// Bean Countin
		let countBs = function(str) {
				return countChars(str, "B");
		}
		// console.log(countBs("OOOOO"));

		const range = (start, end, step = 1) => {
				let res = new Array();
				for (var i = start; i <= end; i+=step) {
						res.push(i);
				}
				return res
		}

		// console.log(range(5,10));
		const sum = (arr) => {
				if (!Array.isArray(arr)) {
						throw new Error("The type of the param provided was not an array");
				}

				let res = 0;
				for(let num of arr) {
						res += num;
				}
				return res;
		}

		// [1,2,3,4,5] pop => 5
		// [5,4,3,2,1] 

		// `reverseArray` is a pure function because it always produces the same value with no side effects.
		// a new array with the value of the arr that is passed in.
		const reverseArray = (arr) => {
				let res = new Array();
				if (!Array.isArray(arr)) {
						throw new Error("The type of the param provided was not an array");
				}
				
				for (var i = arr.length - 1; i >= 0; i--) {
						res.push(arr[i]);
				}
				return res;
		}

		// `reverseArrayInPlace` is not a pure function because it modifies the value of arr in memory.
		// i.e. anything that is referring to `arr` would be using the arr with its contents reversed.
		const swap = (idx, otherIdx, arr) => {
				let val = arr[idx];
				arr[idx] = arr[otherIdx];
				arr[otherIdx] = val;
				return undefined;
		}

		const reverseArrayInPlace = (arr) => {
				if (!Array.isArray(arr)) { throw new Error("The type of the param provided was not an array"); }
				for (var i = 0, j = arr.length - 1; i <= Math.floor(arr.length/2) && j >= Math.floor(arr.length/2); i++, j--) {
						// Swap the current element with the one at the other end
						swap(i,j,arr);
				}
				return undefined;
		}
		// console.log(reverseArrayInPlace([1]));
		// console.log(reverseArrayInPlace([1,2]));
		// console.log(reverseArrayInPlace([1,2,3]));
		// console.log(reverseArrayInPlace([1,2,3,4]));
		// console.log(reverseArrayInPlace([1,2,3,4,5]));

		// Recursively prob... KIM that `null` is explicity for lack of a value it is a primitive data type
		// `undefined` is for a variable that has been declared but has not yet been assigned a value, or that
		// a non-existent property was accessed.

		const arrayToList = (arr, seed = null) => {
				if (arr.length === 0) {
						return {};
				}

				if (arr.length === 1) {
						return {"value": arr.pop(), "rest": seed};
				} else {
						let curr = arr.pop();
						return arrayToList(arr, {"value": curr, "rest": seed});
				}
		}

		const listToArray = (l) => {
				let res = new Array();
				let i = l;
				while (i !== null) {
						res.push(i.value);
						i = i.rest;
				}
				return res;
		};

		const traverseList = (l) => {
				let i = l;
				while (i !== null) {
						console.log(i.value);
						i = i.rest;
				}
				return undefined;
		};

		const prepend = (val, l) => {
				// add an element to the front of the list
				return {"value": val, "rest": l};
		};

		const nth = (l, idx) => {
				while(--idx && l !== null) {
						l = l.rest;
				}
				return l === null ? undefined : l.value;
		};

		const recursiveNth = (l, idx) => {
				if (l === null) {
						return undefined;
				} else if (n > 0) {
						return recursiveNth(l.rest, --n);
				} else if (n === 0) {
						return l.value;
				}
		};
		// console.log(arrayToList([1]));
		// console.log(arrayToList([1,2]));
		// console.log(arrayToList([1,2,3]));
		// console.log(traverseList(arrayToList([1,2,3,4,5])));
		// console.log(listToArray(arrayToList([1,2,3,4,5])));
		// console.log(recursiveNth(arrayToList([1,2,3,4,5]), 5));

		class Cat {
				constructor(color) {
						this.color = color;
				}

				meow() {
						console.log(`I'm a ${this.color} cat`);
				}

				knockPlantOver() {
						console.log("I just knocked a plant over! Yipee");
				}
		}
		let cat1 = new Cat("black");
		// console.log(cat1.meow());
		// console.log(cat1.knockPlantOver());
		// console.log(Object.getPrototypeOf(cat1));

		let blankObj = Object.create(null);
		// console.log(Object.getPrototypeOf(blankObj));

		let protoObj = Object.create({});
		// console.log(Object.getPrototypeOf(protoObj));
		// #> `blankObj` can be assigned anything under the sun really. Since it doesn't
		// have any methods

		class SiameseCat extends Cat {
				#sashay;

				constructor() {
						super();
				}

			  get sashay() {
						return this.#sashay;
				}

				set sashay(str) {
						this.#sashay = str;
				}
		}

		let sCat = new SiameseCat();
		sCat.sashay = "DO NOT shake that booty";
		// sCat[sashay] = "DO DO NOT shake that booty";
		sCat["sashay"] = "DO DO DO NOT shake that booty";
		console.log(sCat.sashay);
})();
