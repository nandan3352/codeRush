import assert from "assert";
import { Problem } from "../types/problem";

export const requiredValueHandler = (fn: any) => {
	try {
		const tests = [
			[1,2,3],
			[1,3,3],
			[4,-2,-3,4,1],
			[4,10,2,-9,90,-9,37,-9,3,7,-2,-3,4,1],
		];
		const answers = [
			4,
			4,
			59,
			5818
		];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i]);
			assert.equal(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error :", error);
		throw new Error(error);
	}
};

const starterCodeRequiredValueJS = `function requiredValue(nums) {
  // Write your code here
};`;

export const requiredValue: Problem = {
	id:"required-value",
	title: "3. Required Value",
	problemStatement: `<p class='mt-3'>
	Required value of a subarray is difference between the largest and smallest element in that subarray. Required value of given array is sum of required values of all subarrays of that array.
    Given an array nums, <em>return the required value of nums.</em>  </p>
  `,

	examples: [
		{
			id: 0,
			inputText: `nums = [1,2,3]`,
			outputText: `4`,
			explanation: `
Values are as follows:
[1], value = largest - smallest = 1 - 1 = 0 
[2], value = 2 - 2 = 0
[3], value = 3 - 3 = 0
[1,2], value = 2 - 1 = 1
[2,3], value = 3 - 2 = 1
[1,2,3], value = 3 - 1 = 2
So the sum of all values is 0 + 0 + 0 + 1 + 1 + 2 = 4.`
						},
		{
			id: 1,
			inputText: `nums = [1,3,3]`,
			outputText: `4`,
			explanation:`
values are as follows:				
[1], value = largest - smallest = 1 - 1 = 0
[3], value = 3 - 3 = 0
[3], value = 3 - 3 = 0
[1,3], value = 3 - 1 = 2
[3,3], value = 3 - 3 = 0
[1,3,3], value = 3 - 1 = 2
So the sum of all values is 0 + 0 + 0 + 2 + 0 + 2 = 4.`
		},
		{
			id: 2,
			inputText: `nums = [4,-2,-3,4,1]`,
			outputText: `59`,
			explanation:"",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 100000</code></li>
    <li class='mt-2'><code>-1000000 <= nums[i] <= 1000000</code></li>`,
	starterCode: starterCodeRequiredValueJS,
	handlerFunction: requiredValueHandler,
	starterFunctionName: "function requiredValue(",
	order: 3,
};