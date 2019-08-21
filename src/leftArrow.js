'use strict'
/**
 * This module exports a string that is the SVG path for a left-pointing arrow.
 */

/**
 * SVG path for a left-pointing arrow.
 *
 * @type {string}
 */
const path = `
	M4.3,9
	L19,9
	C19.25,9.5 19.25,10.5 19,11
	L4.3,11
	L9.2,15
	C9.2,15.5 8.42,16.54 7.92,16.54
	L1.23,11
	C0.9,10.25 0.9,9.75 1.23,9
	L7.92,3.46
	C8.42,3.46 9.2,4.5 9.2,5`;

export default {
	viewBox: "0 0 20 20",
	toString: () => (path)
};
