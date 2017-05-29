/**
 * This module exports a string that is the SVG path for a curved arrow.
 */

/**
 * SVG path for a curved arrow symbol.
 *
 * @type {string}
 */
const path = [
	"M1,4",
	"h8.5",
	"q4,0,4,4",
	"v8",
	"l5,-5",
	"q1.41,0,1.41,1.41",
	"l-6.41,5.59",
	"q-1,1,-2,0",
	"l-6.41,-5.59",
	"q0,-1.41,1.41,-1.41",
	"l5,5",
	"v-9",
	"q-0.25,-0.75,-1,-1",
	"h-9.5",
	"q-1,-1,0,-2z"
].join(" ");

export default path;
