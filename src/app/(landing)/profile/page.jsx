import Image from "next/image";
import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";

export default function Page() {
    return (
        <div className="px-20 py-16">
            <div className="rounded-lg shadow-md">
                <div className="w-full flex items-center relative justify-center  h-[20vh] 
                bg-[#5E50A1] rounded-se-lg rounded-ss-lg">
                    <div className="absolute -bottom-12">
                        <Image
                            src={"/images/opinion1.png"}
                            // src={userData.data.photo}
                            alt="avatar" width={120} height={120}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center py-16 space-y-4">
                    <div className="text-[#1F2A36]">
                        PT. Martabat Jaya Abadi
                    </div>
                    <div className="text-sm text-blue-gray-900">Financial</div>
                    <div className="flex items-center justify-center gap-1 text-gray-400">
                        <LuMapPin />
                        <div className="text-sm">Bandung, Jawa Barat</div>
                    </div>
                    <div className="px-[22vw] text-sm text-center text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.
                    </div>

                    <Link
                        href={"/profile/edit"}
                        className="text-white bg-[#5E50A1] px-24 py-2 rounded-lg"
                    >Edit Profile</Link>

                    <div className="flex flex-col space-y-4 text-gray-500">
                        <div className="flex items-center gap-4">
                            <BiLogoGmail />
                            <div className="text-sm">martabatjaya@gmail.com</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <AiOutlineInstagram />
                            <div className="text-sm">martabat_jaya</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <BsTelephone />
                            <div className="text-sm">0821-8190-1821</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <LuLinkedin />
                            <div className="text-sm">Martabat Jaya Abadi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}