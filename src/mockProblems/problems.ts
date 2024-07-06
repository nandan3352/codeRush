export type Problem = {
	id: string;
	title: string;
	tag: string;
	// category: string;
	order: number;
	rating:number;
};

export const problems: Problem[] = [
	{
		id: "good-subsequence",
		title: "Good subsequence",
		tag: "Data Structures",
		// category: "Array",
		order: 1,
		rating:0,
	},
	{
		id:"beautiful-substring",
		title: "Beautiful Substring",
		tag: "Bit Manipulation",
		// category: "Linked List",
		order: 2,
		rating:0,
	},
	{
		id:"required-value",
		title: "Required Value",
		tag: "Data Structures",
		// category: "Dynamic Programming",
		order: 3,
		rating:0,
	},
	{
		id:"excellent-pairs",
		title: "Excellent Pairs",
		tag: "Observation",
		// category: "Stack",
		order: 4,
		rating:0,
	},
	{
		id:"easy-idea",
		title: "Easy Idea",
		tag: "Observation",
		// category: "Binary Search",
		order: 5,
		rating:0,
	},
	{
		id:"connected-substrings",
		title: "Connected Substrings",
		tag: "Observation",
		// category: "Array",
		order: 6,
		rating:0,
	},
	{
		id: "divide-the-array",
		title: "Divide the array",
		tag: "Binary Search",
		// category: "Tree",
		order: 7,
		rating:0,
	},
	// {
	// 	id:"good-subsequence-ii",
	// 	title: "Good Subsequence II",
	// 	tag: "Medium",
	// 	category: "Intervals",
	// 	order: 8,
	// 	rating:0,
	// },
	// {
	// 	id:"bad-subsets",
	// 	title: "Bad Subsets",
	// 	tag: "Medium",
	// 	category: "Two Pointers",
	// 	order: 9,
	// 	rating:0,
	// },
	// {
	// 	id: "find-it",
	// 	title: "Find it",
	// 	tag: "Medium",
	// 	category: "Backtracking",
	// 	order: 10,
	// 	rating:0,
	// },
];
