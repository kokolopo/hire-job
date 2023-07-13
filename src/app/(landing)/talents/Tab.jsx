import Link from "next/link"

const Tab = ({ portoLink, expeLink }) => {
    return (
        <div
            className={
                `flex justify-between text-lg 
                        font-semibold `
            }
        >
            <Link
                href={portoLink}
                className={
                    `flex items-center justify-center w-full
                    border-b-2 hover:border-[#5E50A1] py-4 hover:cursor-pointer`
                }
            >
                <p className="text-gray-400 hover:text-[#5E50A1]">Portofolio</p>
            </Link>
            <Link
                href={expeLink}
                className={
                    `flex items-center justify-center w-full
                    border-b-2 hover:border-[#5E50A1] py-4 hover:cursor-pointer`
                }
            >
                <p className="text-gray-400 hover:text-[#5E50A1]">Pengalaman kerja</p>
            </Link>
        </div>
    )
}

export default Tab