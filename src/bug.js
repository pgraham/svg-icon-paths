/**
 * Module exports a string SVG path for a "bug" icon.
 */
import pathBuilder from "./builder";

const HEAD = pathBuilder()
	.addSegment("q", [ 2.5, 0, 2.5, 2.5 ])
	.addSegment("q", [ 0, 0.5, -0.5, 0.5 ])
	.addSegment("l", [ -4, 0 ])
	.addSegment("q", [ -0.5, 0, -0.5, -0.5 ])
	.addSegment("q", [ 0, -2.5, 2.5, -2.5 ]);

const LEG = pathBuilder()
	.addSegment("q", [ 2, 0.5, 3, 1.5 ])
	.addSegment("q", [ 0, 0.707, -0.707, 0.707 ]);

const TOP_RIGHT_LEG = LEG.copy()
	.addSegment("q", [ -0.845, -0.845, -2.293, -1.207 ])
	.reverse().reflectX();

const TOP_LEFT_LEG = TOP_RIGHT_LEG.reverse().reflectY();

const MIDDLE_RIGHT_LEG = LEG.copy()
	.addSegment("q", [ -0.845, -0.845, -2.414, -1.239 ]);

const MIDDLE_LEFT_LEG = MIDDLE_RIGHT_LEG.reverse().reflectY();

const BOTTOM_RIGHT_LEG = LEG.copy()
	.addSegment("q", [ -0.845, -0.845, -2.933, -1.339 ]);

const BOTTOM_LEFT_LEG = BOTTOM_RIGHT_LEG.reverse().reflectY();

/**
 * SVG path for a "bug" icon.
 *
 * @type {string}
 */
const path = [ "M10,2.75" ]
.concat(HEAD.toList())
.concat([
	"z m0,3.5",
	"q4.7,0,4.5,1.5"
])
.concat(TOP_RIGHT_LEG.toList())
.concat([ "q0,1,-0.188,2.504" ])
.concat(MIDDLE_RIGHT_LEG.toList())
.concat([ "q-0.191,1.528,-1.121,2.644" ])
.concat(BOTTOM_RIGHT_LEG.toList())
.concat([
	"q-0.93,1.016,-2.43,1.016",
	"q-1.5,0,-2.43,-1.016"
])
.concat(BOTTOM_LEFT_LEG.toList())
.concat([ "q-0.93,-1.116,-1.121,-2.644" ])
.concat(MIDDLE_LEFT_LEG.toList())
.concat([ "q-0.188,-1.504,-0.188,-2.504" ])
.concat(TOP_LEFT_LEG.toList())
.concat([
	"q-0.2,-1.5,4.5,-1.5",
	"z"
])
.join(" ");

export default {
	viewBox: "0 0 20 20",
	toString: () => (path)
};
