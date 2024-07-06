import { Problem } from "../types/problem";
import { requiredValue } from "./required-value";
// import { reverseLinkedList } from "./beautiful-substring.ts";
import { beautifulSubstring } from "./beautiful-substring.ts";
import { easyIdea } from "./easy-idea";
import { goodSubsequence } from "./good-subsequence";
import {excellentPairs} from "./excellent-pairs";
import { connectedSubstrings } from "./connected-substrings";
import { divideTheArray } from "./divide-the-array";
interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"good-subsequence": goodSubsequence,
	"beautiful-substring":  beautifulSubstring,
	"required-value": requiredValue,
	"excellent-pairs": excellentPairs,
	"easy-idea": easyIdea,
	"connected-substrings": connectedSubstrings,
	"divide-the-array": divideTheArray
};