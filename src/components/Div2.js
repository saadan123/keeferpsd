import Image from 'next/image'
import myImg4 from '../../public/images/paste_board.gif'
import myImg5 from '../../public/images/bullet_white.gif'
import myImg6 from '../../public/images/avo_rating_large.gif'
import myImg7 from '../../public/images/national_college_large.gif'
import myImg8 from '../../public/images/pic1.gif'
import myImg9 from '../../public/images/order_icon.gif'
import myImg99 from '../../public/images/hr_shadow.png'
export default function Div2() {
    return (
        <>
            <div className="container mx-auto max-w-5xl">
                <div className="md:flex   md:flex-nowrap px-3 md:px-10">
                    <div className="1stdiv w-full  md:w-4/12 pl-[20px] md:pl-[0px]">
                        <div className="flex flex-col text-center md:text-left"><span className='font-bold text-[20px]'>CHARGED WITH <span className='text-red-900'>DUI?</span></span>
                            <span className='font-bold text-red-900'>FREE CASE EVALUATION</span></div>


                        <div className="md:flex">
                            <div className="flex flex-col md:w-1/2 text-gray-600 text-[12px] md:mt-[10px] text-center md:text-left"><span>Being charged with a DUI
                                can be scary.Get the help you deserve</span>
                                <span className="mt-2 ">Click here to lets us know how we can help you with your case</span>
                            </div>
                            <div className='w-full md:w-4/12  flex justify-center md:ml-[30px] pb-[4px]'>
                                <Image className='w-full'
                                    src={myImg4} /></div>
                        </div>
                        <div className='flex justify-center'>
                            <div className=' md:w-1/5  border-t-2 border-gray-500 md:border-0'></div>
                            <div className='flex w-full md:w-4/5 justify-center md:mr-[40px] md:ml-[20px] border-t-2 border-gray-500 '>
                                <div className='p-[2px] bg-red-800 shadow-2xl '><span className='text-white font-semibold'>CLICK HERE</span></div>
                                <div className='lg:pl-[3px] lg:pt-[2px] sm:pl-[1px] sm:pt-[1px] p-1 bg-red-800 w-fit'>
                                    <Image className='w-full '
                                        src={myImg5}
                                    />
                                </div></div>
                        </div>
                    </div>
                    <div className="2nddiv w-full   md:w-5/12 md:border-x flex flex-col">
                        <div className='md:flex text-center md:text-left'><div className='flex flex-col md:w-1/2 p-4 pt-0 text-center md:text-left'><span className='font-bold text-[20px]'>LAW <span className='text-red-700 font-bold'>BLOG</span></span>
                            <span>Learn more about Viriginia Traffic Laws</span>
                        </div>
                            <div className='md:w-1/2 flex justify-center px-4  pb-[3px]'><Image className='w-full' src={myImg8} /></div>
                        </div>
                        <div className='flex w-full md:w-1/2 justify-center md:mr-[40px] md:ml-[20px] border-t-2 border-gray-500 '>
                            <div className='p-[2px] bg-red-800 shadow-2xl'><span className='text-white font-semibold'>CLICK HERE</span></div>
                            <div className='lg:pl-[3px] lg:pt-[2px] sm:pl-[1px] sm:pt-[1px] p-1 bg-red-800 w-fit'>
                                <Image className='w-full '
                                    src={myImg5}
                                />
                            </div></div>


                        <div className='md:flex'><div className='flex flex-col md:w-3/5 p-4 text-center md:text-left pt-0'><span className='font-bold text-[20px]'>CASE <span className='text-red-700'>RESULTS
                        </span></span>
                            <span className='text-[14px]'>See how we help our clients. Read our latest care results</span></div>

                            <div className='md:w-1/3 flex justify-center'><Image className='' src={myImg9} /></div>
                        </div>
                        <div className='md:ml-[20px] md:ml-[18px] w-full md:w-1/2 md:w-2/4 flex border-t-2 border-gray-500 justify-center'>
                            <div className='p-[2px] bg-red-800 shadow-2xl justify-center'><span className='text-white font-semibold'>CLICK HERE</span></div>
                            <div className='lg:pl-[3px] lg:pt-[2px] sm:pl-[1px] sm:pt-[1px] p-1 bg-red-800 w-fit'>
                                <Image className='w-full '
                                    src={myImg5}
                                />
                            </div></div>
                    </div>
                    <div className="3rddiv md:w-4/12 w-full    mt-[10px] md:mt-[0px]">
                        <div className='flex space-x-6 md:space-x-0 md:justify-between flex justify-center'>
                            <div>
                                <Image className=''
                                    src={myImg6} />
                            </div>
                            <div>  <Image className=''
                                src={myImg7} />
                            </div>
                        </div>
                        <div className='flex flex-col p-4 pr-[0px]  w-full  pt-0 text-center md:text-left'>
                            <span className='font-bold text-[20px]'>CERTIFICATES &<span className='text-red-700 font-bold'> CREDENTIALS</span></span>
                            <span className='md:text-[16px] font-semibold text-gray-700'>Keefer Law Firm has protected the right of Viriginians for over 30 years</span>
                        </div>
                        <div className='flex  md:mr-[40px] md:ml-[20px] '>
                            <div className='md:w-1/4'></div>
                            <div className='md:w-3/4 w-full md:w-1/2 flex border-t-2 border-gray-500 justify-center'>
                                <div className='p-[2px] bg-red-800 shadow-2xl justify-center'><span className='text-white font-semibold'>CLICK HERE</span></div>
                                <div className='lg:pl-[3px] lg:pt-[2px] sm:pl-[1px] sm:pt-[1px] p-1 bg-red-800 w-fit'>
                                    <Image className='w-full '
                                        src={myImg5}
                                    />
                                </div></div>
                        </div>
                    </div>

                </div>
                <div><Image className='w-full' src={myImg99} /></div>
            </div>
        </>)
}