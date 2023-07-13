"use client"

import { Button, Radio, Spinner } from "@material-tailwind/react"
import FieldInput from "../profile/edit/FieldInput"
import Image from "next/image"
import { AiFillCloseSquare } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { useRef, useState } from "react"
import useEditWorker from "./useEditWorker";
import { useRouter } from "next/navigation";

const FormPortofolio = ({ API, JWT }) => {
    const [name, setName] = useState('')
    const [repository, setRepo] = useState('')
    const [typeApp, setType] = useState('')
    const [image, setImage] = useState('')

    const fileInputRef = useRef(null);
    const [hidden, setHidden] = useState("");
    const [file, setFile] = useState(null);

    const { addPortofolio, loading } = useEditWorker()

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', file);
        formData.append('app_name', name);
        formData.append('repository', repository);
        formData.append('type', typeApp);

        console.log(JWT);
        addPortofolio(API, JWT, formData)
        setTimeout(() => router.push('/my-profile'), 2000)
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file)

        if (file && file.type.startsWith('image/')) {
            // Lakukan sesuatu dengan file gambar
            const reader = new FileReader();
            reader.onload = (e) => {
                // setImageSrc(e.target.result);
                setHidden("hidden")
                setImage(`url(${reader.result})`)
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form
            className="sm:w-2/3 mt-7"
        >
            <div
                className="flex flex-col px-6 py-10 space-y-4 rounded-lg shadow-md "
            >
                <div className="border-b">Portofolio</div>

                <FieldInput label={"Nama Aplikasi"} value={name} setter={e => setName(e.target.value)} />
                <FieldInput label={"Link Repository"} value={repository} setter={e => setRepo(e.target.value)} />
                <div className="flex gap-10">
                    <Radio name="type" label="Mobile" value={"mobile"} onClick={() => setType('mobile')} />
                    <Radio name="type" label="Website" value={"web"} onClick={() => setType('web')} />
                </div>
                {/* <div className="">
                    <Image src={"/images/upload.png"} alt='gambar' width={800} height={100} />
                </div> */}

                <div className="rounded-md sm:w-full h-[30vh]">
                    {
                        image &&
                        <div className="flex items-center justify-center w-full h-full bg-no-repeat bg-cover rounded-md"
                            style={{ backgroundImage: image }}
                        >
                            <div className='px-2 py-2 bg-red-400 rounded-md w-fit'>
                                <AiFillCloseSquare className='text-white' onClick={() => {
                                    setImage(null)
                                    setHidden("")
                                }} />
                            </div>
                        </div>
                    }
                    <div className={hidden + " text-3xl flex flex-col justify-center items-center"}>
                        <CiImageOn onClick={handleImageClick} />
                        <span className='text-sm'>Add Photo</span>
                    </div>
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
                {loading ? <div className="flex justify-center ">
                    <Spinner className="w-8 h-8" />
                </div> :
                    <Button onClick={handleSubmit} color="amber" variant="outlined" className='font-semibold text-amber-500'>Tambah Portofolio</Button>
                }

            </div>
        </form>
    )
}

export default FormPortofolio