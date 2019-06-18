/**
 * This module encapsulates an icon for representing a story task.
 *
 * @module view/icon/path/storyIconPath
 */
"use strict";

import pathBuilder from "./builder";

const BOOK_LEFT_HALF = pathBuilder()
	.addSegment("q", [ 5, 0, 6.5, 1 ])
	.addSegment("l", [ 0, 16 ])
	.addSegment("q", [ -4, -2, -6.5, -1.5 ])
	.close()
	.move([ -0.5, 0 ])
	.addSegment("q", [ -0.1, 0, -0.5, 0.5 ])
	.addSegment("l", [ 0, 16 ])
	.addSegment("q", [ 5, 0, 7.4, 1.5 ])
	.addSegment("l", [ 0.2, 0 ])
	.addSegment("l", [ 0, -0.5 ])
	.addSegment("q", [ -4, -1.75, -7.1, -1.5 ])
	.addSegment("l", [ 0, -16 ]);

const BOOK_RIGHT_HALF = BOOK_LEFT_HALF.reflectY();

const PATH = [ "M3.4,1" ]
.concat(BOOK_LEFT_HALF.toList())
.concat([ "M16.6,1" ])
.concat(BOOK_RIGHT_HALF.toList())
.join(" ");

export default {
	viewBox: "0 0 20 20",
	toString: () => (PATH)
};
