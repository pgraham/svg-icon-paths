/**
 * Test suite for the svg-icon-paths module
 */

const paths = require("../svg-icon-paths");

describe("svg-icon-paths", () => {

	it("includes an add path", () => {
		expect(paths.add).not.toBeUndefined();
	});
});
