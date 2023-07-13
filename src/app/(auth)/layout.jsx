import Image from 'next/image'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="flex h-screen p-7">
            <div className="relative hidden w-1/2 sm:block">
                <Image src={"/images/heroImage.png"} alt="gambar" fill />

                <div className="flex items-center justify-center layer">
                    <div className="absolute left-10 top-10">
                        <img src={"/images/Logo.png"} alt="gambar" width={90} />
                    </div>
                    <div className="text-tertiaryColor font-bold text-[44px] w-[65%]">
                        <p>Temukan developer berbakat & terbaik di berbagai bidang keahlian</p>
                    </div>
                </div>
            </div>

            {children}
        </div>
    )
}

export default Layout