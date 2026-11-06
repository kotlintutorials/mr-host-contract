import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
	it("adds a list", () => {
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([])).toBe(0);
	});
	// CI fails on demand: FAIL_CI at the root turns `CI` red on every run.
	it("passes unless FAIL_CI is present", () => {
		expect(existsSync("FAIL_CI")).toBe(false);
	});
	// FAIL_QUEUE fails `CI` only in the merge queue: the PR's own runs pass, so it can be queued, and its group fails.
	it("passes in the merge queue unless FAIL_QUEUE is present", () => {
		const inQueue = process.env.GITHUB_EVENT_NAME === "merge_group";
		expect(inQueue && existsSync("FAIL_QUEUE")).toBe(false);
	});
});
