// "use client"

import { TbBrandNextjs } from "react-icons/tb";
// import { usePathname } from "next/navigation";

const Footer = () => {
    return <>
        <div
            className='flex-col justify-between min-w-full text-white px-7 py-7 bg-[#5E50A1]'
        >
            <div className="flex items-center space-x-1 ">
                <TbBrandNextjs className="text-4xl" />
                <p className="text-2xl font-semibold">Peworld</p>
            </div>

            <div className="mt-4 text-sm text-justify w-72">
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>

            <div className="w-full mt-4 border-b border-white"></div>

            <div
                className={
                    `flex flex-col mt-4 space-y-3 text-sm w-fit 
                    sm:flex-row-reverse sm:space-y-0 sm:justify-between sm:w-full`
                }
            >
                <div className="flex justify-between sm:space-x-14">
                    <p>Telepon</p>
                    <p>Email</p>
                </div>
                <p>2020 Pewworld. All right reserved</p>
            </div>
        </div>
    </>
}

export default Footer