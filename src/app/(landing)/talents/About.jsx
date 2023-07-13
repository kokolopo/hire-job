import { LuMapPin } from "react-icons/lu";

const About = ({ name, job, location, tempKerja, desc }) => {
    return (
        <div className='flex flex-col my-4 space-y-2'>
            <div className="text-2xl font-semibold">{name}</div>
            <div className="text-sm">{job}</div>
            <div className='flex items-center text-sm text-[#9EA0A5]'>
                <LuMapPin />
                <p>{location}</p>
            </div>
            <div className="text-sm text-[#9EA0A5]">{tempKerja}</div>

            <div className="text-sm text-[#9EA0A5] text-justify">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default About