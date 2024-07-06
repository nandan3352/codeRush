import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeDivideTheArray = `function divideTheArray(nums,k){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerDivideTheArray = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			[12,9,7],
			[4],
			[12,2,3],
			[10,2,20,2,12,23,23,45,12,12]
		];

		const targets = [2, 1, 2, 3];
		const answers = [
			13,
			4,
			12,
			45
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i], targets[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("handler function error");
		throw new Error(error);
	}
};

export const divideTheArray: Problem = {
	id: "divide-the-array",
	title: "7. Divide Array",
	problemStatement: `<p class='mt-3'>
    Given an array nums and k, you have to divide the array into atmost k subarrays such that no element is missed and the maximum Bitwise OR of these subarrays is as minimum as possible, <em>return that value if you divide optimally</em>.
  </p>`,

	examples: [
		{
			id: 1,
			inputText: "nums = [12,9,7], k = 2",
			outputText: "13",
			explanation: `We can divide nums into [12,9] and [7]. Bitwise OR of these are 13,7. So, answer is 13 and can be proved as the minimum value possible.`
            // "The subsequence is [10, 2, 5, 20].",
		},
		{
			id: 2,
			inputText: "nums = [4], k = 1",
			outputText: "4",
			explanation: "",
		},
		{
			id: 3,
			inputText: " nums = [12,2,3], k = 2",
			outputText: "12",
			explanation:""
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= k <= nums.length <= 100000</code>
</li> <li class='mt-2'>
<code>0 <= nums[i] <= 10000000</code>
</li>
`,
	handlerFunction: handlerDivideTheArray ,
	starterCode: starterCodeDivideTheArray,
	order: 7,
	starterFunctionName: "function divideTheArray(",
};