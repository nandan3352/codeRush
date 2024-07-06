// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
// import { AiFillYoutube } from "react-icons/ai";
// import { IoClose } from "react-icons/io5";
// // import YouTube from "react-youtube";
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, firestore } from "@/firebase/firebase";
// // import  DBProblem from "@/utils/types/problem";
import { DBProblem } from "@/utils/types/problem";
import { useAuthState } from "react-firebase-hooks/auth";
// import { problems } from "@/mockProblems/problems";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import Rating from "../Rating/Rating";
import { GoStarFill } from "react-icons/go";
import Rating2 from "../Rating2/Rating2";
type ProblemsTableProps = {
	setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProblemsTable: React.FC<ProblemsTableProps> = ({ setLoadingProblems }) => {
	const problems = useGetProblems(setLoadingProblems);
	const solvedProblems = useGetSolvedProblems();
	const starredProblems = useGetStarredProblems();
	// console.log("solvedProblems", solvedProblems);
   
	

	return (
		<>
			<tbody className='text-white'>
				{problems.map((problem, idx) => {
					const tagColor =
					// Observation
						problem.tag === "Observation"
							? "text-dark-green-s"
							: problem.tag === "Data Structures"
							? "text-dark-pink"
							: "text-dark-yellow";
					return (
						<tr className={`${idx % 2 == 1 ? "bg-dark-layer-1" : ""}`} key={problem.id}>
							
							<td className={"px-6 py-4"}>{problem.order}</td>
                            <td className={"px-6 py-4"}>
							 <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${problem.id}`}>
                               {problem.title}
                             </Link>
                             </td>
							<td className={`px-6 py-4 ${tagColor}`}>{problem.tag}</td>
							{/* <td className={`px-6 py-4`}>{problem.rating}</td> */}
							
							

							<td className={`px-6 py-4`}><Rating2 upvotes={problem.likes} downvotes={problem.dislikes}/></td>

							<td className={`px-6 py-4`}>{problem.votes}</td>
							<th className='px-10 py-4 font-medium whitespace-nowrap text-dark-green-s'>
							{solvedProblems.includes(problem.id) && <BsCheckCircle fontSize={"18"} width='25' />}
							</th>
							<th className='px-10 py-4 font-medium whitespace-nowrap text-dark-green-s'>
							{starredProblems.includes(problem.id) && <GoStarFill fontSize={"18"} width='25'/>}
							</th>
							<th></th>
							
						</tr>
					);
				})}
			</tbody>

		</>
	);
};
export default ProblemsTable;

function useGetProblems(setLoadingProblems: React.Dispatch<React.SetStateAction<boolean>>) {
	const [problems, setProblems] = useState<DBProblem[]>([]);
	useEffect(() => {
		const getProblems = async () => {
			// fetching data logic
			setLoadingProblems(true);
			const q = query(collection(firestore, "problems"), orderBy("order", "asc"));
			const querySnapshot = await getDocs(q);
			const tmp: DBProblem[] = [];
			querySnapshot.forEach((doc) => {
				tmp.push({ id: doc.id, ...doc.data() } as DBProblem);
			});
			setProblems(tmp);
			setLoadingProblems(false);
		};

		getProblems();
	}, [setLoadingProblems]);
	return problems;
}

function useGetSolvedProblems() {
	const [solvedProblems, setSolvedProblems] = useState<string[]>([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const getSolvedProblems = async () => {
			const userRef = doc(firestore, "users", user!.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setSolvedProblems(userDoc.data().solvedProblems);
			}
		};

		if (user) getSolvedProblems();
		if (!user) setSolvedProblems([]);
	}, [user]);

	return solvedProblems;
}
function useGetStarredProblems() {
	const [starredProblems, setStarredProblems] = useState<string[]>([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		const getStarredProblems = async () => {
			const userRef = doc(firestore, "users", user!.uid);
			const userDoc = await getDoc(userRef);

			if (userDoc.exists()) {
				setStarredProblems(userDoc.data().starredProblems);
			}
		};

		if (user) getStarredProblems();
		if (!user) setStarredProblems([]);
	}, [user]);

	return starredProblems;
}