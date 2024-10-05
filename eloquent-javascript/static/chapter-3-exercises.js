import { $ } from './jtest.js';

function beanCounting(...args) {
		new Error("Not implemented");
}

function min(x,y) {
		if (x > y) {
				return y;
		}
		return x;
}

function isEvenRecursive(d) {
		if(d < 0) { return isEvenRecursive(-1 * d); }
		if(d === 0) { return true; }
		if(d === 1) { return false; }
		return isEvenRecursive(d - 2);
}

function countChar(str, ch) {
    let res = 0;
		for (var i = 0; i < str.length; i++) {
				if(str[i] === ch) { res++; }
		}
		return res;
}
function countBs(str) {
		return countChar(str, "B");
}

$.assert(countBs("B"), 1);
$.assert(countBs("b"), 0);
$.assert(countBs("bB"), 1);

$.assert(isEvenRecursive(0), true);
$.assert(isEvenRecursive(1), false);
$.assert(isEvenRecursive(2), true);
$.assert(isEvenRecursive(3), false);
$.assert(isEvenRecursive(-1), false);

// a > b
// a = b
// a < b

$.assert(min(3,1), 1);
$.assert(min(2,2), 2);
$.assert(min(1,3), 1);

$.assert(min(-3,1), -3);
$.assert(min(-2,-2), -2);
$.assert(min(1,-3), -3);

$.assert(min(1,1), 1);
