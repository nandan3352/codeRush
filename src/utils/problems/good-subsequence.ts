import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeGoodSubsequence = `function goodSubsequence(nums,target){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerGoodSubsequence = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[10,2,-10,5,20],
			[-1,-2,-3],
			[10,-2,-10,-5,20],
			[10,2,-10,5,20,10,3,-10,20,-2,2,2,2,2,30,0,-7,90]
		];

		const targets = [2, 1, 2, 4];
		const answers = [
			37,
			-1,
			23,
			198
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i], targets[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("good subsequence handler function error");
		throw new Error(error);
	}
};

export const goodSubsequence: Problem = {
	id: "good-subsequence",
	title: "1. Good Subsequence",
	problemStatement: `<p class='mt-3'>
  Good subsequence is subsequence of array such that every two adjacent elements are not far more than k in the array.
  Given an array and integer k,
  <em>return the maximum sum of any good sequence possible</em>.
</p>`,

	examples: [
		{
			id: 1,
			inputText: "nums = [10,2,-10,5,20], k = 2",
			outputText: "37",
			explanation: "The subsequence is [10, 2, 5, 20].",
		},
		{
			id: 2,
			inputText: "nums = [-1,-2,-3], k = 1",
			outputText: "-1",
			explanation: "The subsequence must be non-empty, so we choose the largest number.",
		},
		{
			id: 3,
			inputText: " nums = [10,-2,-10,-5,20], k = 2",
			outputText: "23",
			explanation:" The subsequence is [10, -2, -5, 20]."
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= k <= nums.length <= 100000</code>
</li> <li class='mt-2'>
<code>-10000 <= nums[i] <= 10000</code>
</li>
`,
	handlerFunction: handlerGoodSubsequence,
	starterCode: starterCodeGoodSubsequence,
	order: 1,
	starterFunctionName: "function goodSubsequence(",
};