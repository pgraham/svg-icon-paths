/**
 * Module that can be used to build and manipulate SVG path segments.
 *
 * @module view/icon/path/builder
 */
/**
 * @typedef PathCommand
 * @type {Object}
 * @property {string} type
 * @property {number[]} points
 */
/**
 * A sequence of two numbers denoting the x and y values of a point.
 *
 * @typedef Point
 * @type {number[]}
 */
/**
 * A sequence of numbers denoting alternating x,y values of a series of points.
 *
 * @typedef PointSeq
 * @type {number[]}
 */
"use strict";

const reverseFn = {
	"l": points => points.map(v => -1 * v),
	"q": points => {
		return [
			points[0] - points[2],
			points[1] - points[3],
			points[2] * -1,
			points[3] * -1
		];
	}
};

/**
 * Build an object that encapsulates a set of SVG commands and provides
 * functions for applying transforms to the points of the path.
 *
 * @param {?PathCommand[]} cmds
 */
function pathBuilder(cmds = []) {
	let builder = {};

	/**
	 * Add a command to the path string.
	 *
	 * @param {string} type - The type of movement
	 * @param {number[]} points - The points of the command
	 */
	builder.addSegment = function (type, points) {
		cmds.push({ type: type, points: points });
		return builder;
	};

	/**
	 * Add a relative move command to the specified point.
	 *
	 * @param {Point} point
	 * @return {this}
	 */
	builder.move = function (point) {
		return builder.addSegment("m", point);
	};

	/**
	 * Add a close command to the path string.
	 *
	 * @return {this}
	 */
	builder.close = function () {
		return builder.addSegment("z", []);
	};

	/**
	 * Add a line segment.
	 *
	 * @param {Point} point
	 */
	builder.line = function (point) {
		return builder.addSegment("l", point);
	};

	/**
	 * Add a segment for a quadratic bezier.
	 *
	 * @param {PointSeq} points - Point sequence of a quadratic bezier
	 */
	builder.quad = function (points) {
		return builder.addSegment("q", points);
	};

	/**
	 * Create an SVG path string from the added commands.
	 */
	builder.toString = function () {
		return builder.toList().join(" ");
	};

	/**
	 * Return an array of strings for each command.
	 */
	builder.toList = function () {
		return cmds.map(cmd => cmd.type + cmd.points.join(","));
	};

	/**
	 * Returns a copy of the pathBuilder.
	 */
	builder.copy = function () {
		return pathBuilder(cmds.map(cmd => {
			return {
				type: cmd.type,
				points: cmd.points.map(p => p)
			};
		}));
	};

	/**
	 * Create a new path builder that will traverse the path from the end to the
	 * beginning.
	 */
	builder.reverse = function () {
		return pathBuilder(cmds.map(cmd => {
			return {
				type: cmd.type,
				points: reverseFn[cmd.type](cmd.points)
			};
		}).reverse());
	};

	/**
	 * Create a new path builder that reflects all of the points on the Y axis.
	 */
	builder.reflectY = function () {
		return pathBuilder(cmds.map(cmd => {
			return {
				type: cmd.type,
				points: cmd.points.map((c, i) => i % 2 === 0 ? -1 * c : c)
			};
		}));
	};

	/**
	 * Create a new path builder that reflects all of the points on the X axis.
	 */
	builder.reflectX = function () {
		return pathBuilder(cmds.map(cmd => {
			return {
				type: cmd.type,
				points: cmd.points.map((c, i) => i % 2 === 0 ? c : -1 * c)
			};
		}));
	};

	/**
	 * Traverse the path from the given point and output the final coordinate of
	 * the path.
	 */
	builder.traverseFrom = function (point) {
		return cmds.reduce((prev, cur) => {
			return [
				prev[0] + cur.points[cur.points.length - 2],
				prev[1] + cur.points[cur.points.length - 1]
			];
		}, point);
	};

	return builder;
}

export default function () { return pathBuilder(); }
