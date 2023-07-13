import Link from "next/link";
import LoginForm from "../LoginForm";

export default function Page() {
    return (
        <div className="sm:w-1/2 sm:px-[70px] sm:py-[100px] w-screen">
            <div className="space-y-1">
                <p className='text-3xl font-semibold'>Halo, Workers</p>
                <p className='text-gray-400'>Selamat Datang di Peworld.</p>
            </div>

            <LoginForm role={'worker'} API={process.env.API_URL + '/workers/login'} />

            <div className="text-sm text-center mt-7">
                <p>Anda belum punya akun? <Link href="/register/workers" className='text-[#FBB017] hover:cursor-pointer'>Daftar disini</Link></p>
            </div>
        </div>
    )
}