import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeBeautifulSubstring = `function beautifulSubstring(s){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerBeautifulSubstring = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const nums = [
			"3242415",
			"12345678",
			"213123",
			"32424176854947584128934895485"
		];

		const answers = [
			5,
			1,
			6,
			9
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < nums.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(nums[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("good subsequence handler function error");
		throw new Error(error);
	}
};

export const  beautifulSubstring: Problem = {
	id: "beautiful-substring",
	title: "2. Beautiful Substring",
	problemStatement: `<p class='mt-3'>
  A beautiful substring is a non empty substring of a string such that it can be made palindrome by swapping finite number of adjacent pairs.
  Given a string s, <em>return the maximum length of any substring of s which is beautiful</em>.
</p>`,

	examples: [
		{
			id: 1,
			inputText: "s = 3242415 ",
			outputText: "5",
			explanation: "24241 is the longest beautiful substring",
		},
		{
			id: 2,
			inputText: "s = 12345678",
			outputText: "1",
			explanation: "",
		},
		{
			id: 3,
			inputText: " s = 213123",
			outputText: "6",
			explanation:" The whole string is the answer"
		},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= s.length <= 100000</code>
</li> <li class='mt-2'>
<code>s consists only of digits</code>
</li>
`,
	handlerFunction: handlerBeautifulSubstring,
	starterCode: starterCodeBeautifulSubstring,
	order: 2,
	starterFunctionName: "function  beautifulSubstring(",
};