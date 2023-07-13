'use client'

import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineBell, AiOutlineLogout } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import useLogin from "../(auth)/login/useLogin";
import { Spinner } from "@material-tailwind/react";

const Navbar = () => {
    const { logout } = useLogin()
    const [userData, setUserData] = useState();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user'));
        if (data) {
            setUserData(data);
        }
    }, []);

    const router = useRouter()

    return <>
        <div className='flex justify-between min-w-full py-4 shadow-sm px-7'>
            <Link href={"/"} className="flex items-center text-[#5E50A1] hover:cursor-pointer">
                <TbBrandNextjs className="text-2xl" />
                <p className="font-semibold">Peworld</p>
            </Link>

            <div
                className="flex items-center space-x-3 text-xl text-gray-400"
            >
                <AiOutlineBell />
                <GoMail />

                {!userData ? <Spinner /> :
                    <Link
                        href={userData.data.role == 'worker' ? '/my-profile' : '/'}
                        className="w-8 h-8 rounded-full bg-slate-400 hover:cursor-pointer"
                    >
                        {userData ? <img
                            // src={"/images/opinion1.png"}
                            src={userData.data.photo}
                            alt="avatar" width={120} height={120}
                        /> :
                            <Image
                                src={"/images/opinion1.png"}
                                // src={userData.data.photo}
                                alt="avatar" width={120} height={120}
                            />}
                    </Link>}

                <AiOutlineLogout onClick={() => {
                    deleteCookie("accessToken")
                    deleteCookie("userId")
                    logout()
                    router.push("/login")
                }} />
            </div>
        </div>
    </>
}

export default Navbar