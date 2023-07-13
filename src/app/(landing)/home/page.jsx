'use client'

import { BiSearch, BiCategory } from "react-icons/bi";
import TalentCard from "./TalentCard";
import Pagination from "./Pagination";
import Link from "next/link";
import useTalents from "./useTalents";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export default function page() {
    const [word, setWord] = useState('')
    const token = getCookie('accessToken')
    const {
        loading,
        talents,
        fetchTalents,
        totalPage,
        currentPage,
        sort,
        sorting,
        keyword,
        searching
    } = useTalents()

    useEffect(() => {
        fetchTalents(`http://103.214.113.5:5000/workers?limit=5&page=${currentPage}&sort=${sort}&name=${keyword}`, token)
    }, [currentPage, sort, keyword])

    console.log(talents);
    let dataKeys = Object.keys(talents)

    return (
        <div
            className={`px-7 sm:px-12 my-3`}
        >
            {/* Search */}
            <div
                className={
                    `shadow-md rounded-xl flex px-4
                        bg-white items-center justify-between mt-7`
                }
            >
                <form onSubmit={(e) => {
                    e.preventDefault()
                    searching(word)
                }}>
                    <input type="text" name="search"
                        className="py-3 text-base
                    placeholder:text-[#9EA0A5] rounded-[6px] 
                    focus:outline-none text-gray-600"
                        placeholder="Search by name"
                        onChange={e => setWord(e.target.value)}
                    />
                </form>

                <div className={`text-2xl flex space-x-3 text-gray-400`}>
                    <BiSearch />

                    <div className="hover:cursor-pointer" onClick={() => {
                        switch (sort) {
                            case 'asc':
                                sorting('desc')
                                break;
                            case 'desc':
                                sorting('asc')
                                break;
                            default:
                                break;
                        }
                    }}>
                        <BiCategory />
                    </div>
                </div>
                {/* <div className="text-2xl text-gray-400">
                    </div> */}
            </div>

            {/* List Item */}
            <div className={`flex flex-wrap justify-between sm:flex-col`}>
                {dataKeys.map((key) => {
                    let item = talents[key]
                    return <Link key={item.id} href={`/talents/portofolios/${item.id}`}>
                        <TalentCard image={item.photo} job={item.detail_worker.job_desc} location={item.detail_worker.domisili} name={item.name} />
                    </Link>
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center w-full my-8">
                <Pagination totalPage={totalPage} />
            </div>
        </div>
    )
}