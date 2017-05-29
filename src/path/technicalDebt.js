/**
 * SVG path for an icon representing technical debt tasks.
 *
 * @module view/icon/path/debtIconPath
 */
"use strict";

import pathBuilder from "./builder";

const DOLLAR_SIGN = pathBuilder()
	.move([ 8.5, 6 ])
	.quad([ 0, -5, -3.75, -5 ])
	.line([ 0, -1 ])
	.line([ -1, 0 ])
	.line([ 0, 1 ])
	.quad([ -3.75, 0, -3.75, 5 ])
	.quad([ 0, 3.5, 3.75, 3.5 ])
	.line([ 0, 6.5 ])
	.quad([ -2.75, 0, -2.75, -4 ])
	.line([ -1, 0 ])
	.quad([ 0, 5, 3.75, 5 ])
	.line([ 0, 1 ])
	.line([ 1, 0 ])
	.line([ 0, -1 ])
	.quad([ 3.75, 0, 3.75, -5 ])
	.quad([ 0, -3.5, -3.75, -3.5 ])
	.line([ 0, -6.5 ])
	.quad([ 2.75, 0, 2.75, 4 ])
	.close()
	.move([ -4.75, -4 ])
	.line([ 0, 6.5 ])
	.quad([ -2.75, 0, -2.75, -2.5 ])
	.quad([ 0, -4, 2.75, -4 ])
	.close()
	.move([ 1, 14 ])
	.line([ 0, -6.5 ])
	.quad([ 2.75, 0, 2.75, 2.5 ])
	.quad([ 0, 4, -2.75, 4 ])
	.close();

const UNDERSCORE = pathBuilder()
	.move([ 1, 0 ])
	.line([ 6.5, 0 ])
	.quad([ 1, 0, 1, -0.5 ])
	.quad([ 0, -0.5, -1, -0.5 ])
	.line([ -6.5, 0 ])
	.quad([ -1, 0, -1, 0.5 ])
	.quad([ 0, 0.5, 1, 0.5 ])
	.close();

const PATH = [ "M 1,1" ]
.concat(DOLLAR_SIGN.toList())
.concat([ "M 10.5,19" ])
.concat(UNDERSCORE.toList())
.join(" ");


export default PATH;
