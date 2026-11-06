import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
	it("adds a list", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});
	// CI fails on demand: a PR that adds FAIL_CI at the root turns `CI` red (the host contract's failing run).
	it("passes unless FAIL_CI is present", () => {
		expect(existsSync("FAIL_CI")).toBe(false);
	});
});
