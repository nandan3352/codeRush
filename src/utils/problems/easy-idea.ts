import assert from "assert";
import { Problem } from "../types/problem";
// import example1 from "./images/search-a-2d-1.jpg";
// import example2 from "./images/search-a-2d-2.jpg";

export const easyIdeaHandler = (fn: any) => {
	try {
		const tests = [
			{
				s: [0,1,1],
				v: [2,5,1]
			},
			{
				s: [0,3,1],
				v: [1,5,1]
			},
			{
				s: [1],
				v: [1]
			},
			{
				s: [1,2,3,1,2,2,3,2,1,2,2,2,2,3],
				v: [1,2,2,1,3,2,3,3,1,2,1,2,2,3],
			},
			
		];
		const answers = [3,2,1,7];
		for (let i = 0; i < tests.length; i++) {
			const result = fn(tests[i].s, tests[i].v);
			assert.deepEqual(result, answers[i]);
		}
		return true;
	} catch (error: any) {
		console.log("Error from searchA2DMatrixHandler: ", error);
		throw new Error(error);
	}
};
const starterCodeEasyIdeaJS = `// Do not edit function name
function easyIdea(p,s) {
  // Write your code here
};`;

export const easyIdea: Problem = {
	id: "easy-idea",
	title: "5. Easy Idea",
	problemStatement: `
  <p class='mt-3'>
   Given n items and two vectors p,s where p[i] is price of ith item and s[i] is satisfaction we get if we select ith element.
     You have to select some items such that sum of number of items we select and total satisfaction we get from those items >= total number of items and sum of the prices of selected items must be minimum, <em>return that value</em>.
`,
	examples: [
		{
			id: 0,
			inputText: `p=[0,1,1], s=[2,5,1]`,
			outputText: `3`,
			explanation: `We can choose first and third items: (2 + (0 + 1)) = 3 >= 3 and price is 2+1=3 which is optimal `
			// img: example1.src,
		},
		{
			id: 1,
			inputText: `p=[0,3,1], s=[1,5,1]`,
			outputText: `2`,
			explanation:"",
		},
		{
			id: 2,
			inputText: `p=[1], s=[1]`,
			outputText: `1`,
			explanation: ""
			
		},
	],
	constraints: `
  <li class='mt-2'><code>1 <= n <= 1000</code></li>
  <li class='mt-2'><code>0 <= s[i] <= n </code></li>
  <li class='mt-2'><code>1 <= p[i] <= 1000000</code></li>
  `,
	starterCode: starterCodeEasyIdeaJS,
	handlerFunction: easyIdeaHandler,
	starterFunctionName: "function easyIdea(",
	order: 5,
};