import Image from 'next/image'
import myImg1 from '../../public/images/logo.png'
export default function Header() {
    return (
        <>
<div className='container mx-auto max-w-5xl'>
    <div className='sm:flex sm:space-x-6 lg:space-x-0 justify-between'>
        <div> 
                    <Image className='w-max'
                        src={myImg1}
                    />
        </div>
        <div className='flex flex-col'>

           <span className='font-bold text-[20px] text-red-700'>CALL OUR OFFICES NOW!</span>
           <div className='w-34 h-1 border border-black bg-black'></div>
            <span className='font-black text-[38px]' >540.433.6906</span>
            <span className='text-slate-700'>Get Your Questions Answered Fast</span>
        </div>
    </div>
</div>

    </>
    )
}