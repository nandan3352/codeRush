// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main> <h1>Mom</h1>
//     </main>
//   );
// }

// import {Topbar} from "../components/Topbar/Topbar"
// "./components/Topbar/Topbar";


// import Topbar from "@/components/Topbar/Topbar";
// export default function Home() {
//   return (
// 		<>
// 			<main className='bg-dark-layer-2 min-h-screen'>
// 				<Topbar />
// 				<h1
// 					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
// 					uppercase mt-10 mb-5'
// 				>
// 					&ldquo; QUALITY OVER QUANTITY &rdquo; 👇
// 				</h1>
//         <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
//         <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
//         <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
// 								<tr>
// 									<th scope='col' className='px-1 py-3 w-0 font-medium'>
// 										Status
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Title
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										tag
// 									</th>

// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Category
// 									</th>
// 									<th scope='col' className='px-6 py-3 w-0 font-medium'>
// 										Solution
// 									</th>
// 								</tr>
// 							</thead>
//               </table>
//         </div>
//         </main>
//         </>
// 	);
// }

import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Rating from "@/components/Rating/Rating";
import useHasMounted from "@/hooks/useHasMounted";
// import {Rating} from 
import EmojiPicker from 'emoji-picker-react'
import Reaction from "@/components/Reaction/Reaction"
import { useState } from "react";

export default function Home() {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				{/* <h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					 QUALITY OVER QUANTITY
				</h1> */}
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(7)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
					{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										NUMBER
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Tag
									</th>
									{/* <th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th> */}
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Rating
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Votes
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										STATUS
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Favourites
									</th>

									{/* <th scope='col' className='px-6 py-3 w-0 font-medium'>
										Rating
									</th> */}
									
								</tr>
							</thead> )}
							<ProblemsTable setLoadingProblems={setLoadingProblems} />
					</table>
				</div>
			</main>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};
