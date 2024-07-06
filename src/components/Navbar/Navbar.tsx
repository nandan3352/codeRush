import { authModalState } from "@/atoms/authModalAtom";
import React from 'react';
import Link from "next/link"
// import Image from "next/image";
import { useSetRecoilState } from "recoil";
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
    return <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
    <Link href='/' className='flex items-center justify-center h-20'>
				{/* <Image src='/coderush_logo_dribble_800x600.png' alt='CodeRush' height={200} width={200} /> */}
				{/* <Image src='/qek2ppn5ulgptbri1c4f (1).webp' alt='CodeRush' height={200} width={200} /> */}
			
    </Link>
            <div className='flex items-center'>
				<button
					className='bg-dark-blue-s text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-dark-blue-s hover:bg-white hover:border-2 hover:border-dark-blue-s border-2 border-transparent
                transition duration-300 ease-in-out'
					onClick={handleClick}
				>
					Sign In
				</button>
			</div>
    </div>
}
export default Navbar;