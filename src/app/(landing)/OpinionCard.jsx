import Image from "next/image"

const OpinionCard = ({ avatar }) => {
    return (
        <>
            <div className="opini-card">
                <div className="bg-[#fbaf177a] h-fit w-fit p-2 rounded-full">
                    <img src={avatar} alt="gambar" width={120} height={120} />
                </div>

                <div className=" text-center w-[90%] space-y-3">
                    <h3 className='text-3xl text-[#1F2A36] font-semibold2'>Niall Horan</h3>
                    <sub className='text-[#9EA0A5] text-lg'>Web Developer</sub>
                    <p className='px-12 text-lg text-[#46505C]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </>
    )
}

export default OpinionCard