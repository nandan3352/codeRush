import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeConnectedSubstrings = `function connectedSubstrings(s1,s2){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerConnectedSubstrings = (fn: any) => {
	// fn is the callback that user's code is passed into
	try {
		const s1 = [
			"101",
			"11",
			"0010",
			"110"
		];
		const s2 = [
			"101",
			"111",
			"1",
			"100101101"
		];

		const answers = [
			1,
			5,
			0,
			3
		];

		// loop all tests to check if the user's code is correct
		for (let i = 0; i < s1.length; i++) {
			// result is the output of the user's function and answer is the expected output
			const result = fn(s1[i],s2[i]);
			assert.deepStrictEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("good subsequence handler function error");
		throw new Error(error);
	}
};

export const  connectedSubstrings: Problem = {
	id: "connected-substrings",
	title: "6. Connected Substrings",
	problemStatement: `<p class='mt-3'>
  Given 2 binary strings s1 and s2, characters of s2 are arranged on circular table. Find number of substrings of s2 when converted to integers give xor 0 with s1, <em>return it</em>. Check the explanation of 1st test case for more clarity.
 </p>`,

	examples: [
		{
			id: 1,
			inputText: "s1 = 101, s2 = 101 ",
			outputText: "1",
			explanation: `Three connected substrings of s2 are 101 gives 5, 110 gives 6, 011 gives 3 when connected to numbers. Only one of them gives 0 when taken XOR with s1 (5)`
            // "24241 is the longest beautiful substring",
		},
		{
			id: 2,
			inputText: "s1 = 11, s2 = 111 ",
			outputText: "5",
			explanation: ""},
		{
			id: 3,
			inputText: "s1 = 0010, s2 = 101",
			outputText: "0",
			explanation: ""},
		
	],
	constraints: `<li class='mt-2'>
  <code>1 <= s1.length , s2.length<= 100000</code>
`,
	handlerFunction: handlerConnectedSubstrings,
	starterCode: starterCodeConnectedSubstrings,
	order: 6,
	starterFunctionName: "function  connectedSubstrings(",
};