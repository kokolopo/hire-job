import Link from 'next/link'
import FormRegist from './FormRegist'

const page = () => {
    // console.log(process.env.API_URL);
    return (
        <div className="sm:w-1/2 sm:px-[70px] py-5">
            <div className="space-y-1">
                <p className='text-3xl font-semibold'>Halo, Pewpeople</p>
                <p className='text-secondaryText'>Lorem ipsum dolor sit amet</p>
            </div>

            <FormRegist API={process.env.API_URL + '/recruters/register'} />

            <div className="text-sm text-center my-7 ">
                <p>Anda sudah punya akun? <Link href="/login" className='text-[#FBB017] hover:cursor-pointer'>Masuk disini</Link></p>
            </div>
        </div>
    )
}

export default page