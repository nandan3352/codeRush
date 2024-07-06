import assert from "assert";
import { Problem } from "../types/problem";

export const excellentPairsHandler = (fn: any) => {
	try {
        const s1=[
            "axbzii",
			"abdbbd",
			"abcd",
			"abcdabcdadabcdad"
		];
        const s2=[
            "ab",
			"abd",
			"acd",
			"abcdd"
		];
		const answers = [
			7,
			12,
			1,
			114
		];
		for (let i = 0; i < s1.length; i++) {
			const result = fn(s1[i],s2[i]);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.error("Error: ", error);
		throw new Error(error);
	}
};

const starterCodeExcellentPairsJS = `function excellentPairs(s1,s2) {
  // Write your code here
};`;

export const excellentPairs: Problem = {
	id: "excellent-pairs",
	title: "4. Excellent Pairs",
	problemStatement: `<p class='mt-3'>
    A pair of indices (i,j) where i<=j is an excellent pair if we delete a non-empty substring s1[i..j] from s1 and add left,right parts and then s2 still remains as a subsequence of s1.
	Given 2 strings s1 and s2, <em>return the number of excellent pairs in s1</em>.
	`,
	examples: [
		{
			id: 0,
			inputText: 's1 = axbzii, s2 = ab ',
			outputText: "7",
			explanation: `The substrings we can remove are : [2,2],[4,4],[5,5],[6,6],[4,5],[5,6],[4,6]`
		},
		{
			id: 1,
			inputText: 's1 = abdbbd, s2 = abd ',
			outputText: "12",
		},
		{
			id: 2,
			inputText: 's1 = abcd, s2 = acd ',
			outputText: "1",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= s1.length,s2.length <= 100000</code></li>`,
// <li class='mt-2 '><code>s</code> consists of parentheses only <code class="text-md">'()[]{}'</code>.</li>`,
	handlerFunction: excellentPairsHandler,
	starterCode: starterCodeExcellentPairsJS,
	starterFunctionName: "function excellentPairs(",
	order: 4,
};