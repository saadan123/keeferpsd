import Image from 'next/image'
import myImg1 from '../../public/images/gurantee_banner.gif'
import myImg2 from '../../public/images/confidential.png'
import myImg3 from '../../public/images/bullet_white.gif'


export default function Div1() {
    return (
        <>
            <div className="container mx-auto max-w-5xl">
                <div className="lg:flex p-6 mt-[2px]  ">
                    <div className='mb-[4px] lg:w-6/12 w-full object-fill'>
                        <Image className='w-full object-fill'
                            src={myImg1}
                            
                        />
                    </div>
                    <div className='bg-hero-pattern bg-cover object-cover lg:w-6/12 bg-no-repeat bg-cover lg:ml-[15px]  mb-[5px] pb-[7px]' >
                        <div className='flex justify-between  lg:justify-start'>


                            <div><span className='bg-red-800 sm:pb-2 text-white font-semibold w-1/2 lg:text-[24px] md:text-[32px] sm:text-[16px] sm:pt-[1px] md:pt-[1px] p-[4px] lg:pt-[0px] pt-[0px] pb-[1px]'>QUESTIONS?</span> </div>
                            <div className='pl-[25px] font-semibold lg:text-[18px] w-1/2 md:text-[18px] lg:ml-[20px] sm:text-[16px]'><span>Have a <span className='font-black md:text-[30px] lg:text-[24px]'>Question</span> <br />About Your Case?</span> </div>
                        </div>


                        <div className='p-4 pt-[4px] lg:text-[17px] md:text-[17px] sm:text-[13px] '><span>Enter your information and get your questions answered quickly and discreetly or call us at:<span className='font-semibold'>540.433.6906</span></span></div>
                        <div>


                            <div className='flex justify-between'>
                                <div className='px-4'>
                                    <div className='flex lg:mb-[4px] '>
                                        <label for="name" class=" block mb-2 md:text-[18px] lg:text-[13px] sm:text-[11px] font-medium text-gray-900  font-semibold dark:text-gray-300">Name:</label>
                                        <input type="name" id="name" class="ml-[2px] mb-[2px] bg-gray-50 border border-black-300 text-gray-900 lg:text-sm" placeholder="Name" required>
                                        </input>
                                    </div>

                                    <div className='flex lg:mb-[4px]'>
                                        <label for="email" class=" block  md:text-[18px]  sm:text-[11px] lg:text-[13px]  font-medium text-gray-900 font-semibold dark:text-gray-300 "> Email:</label>
                                        <input type="email" id="email" class="ml-[5px] mb-[2px] bg-gray-50 border border-black-300 text-gray-900 lg:text-sm" placeholder="Email" required>
                                        </input>
                                    </div>

                                    <div className='flex'>
                                        <label for="Phone" class=" block mb-2 md:text-[17px]  sm:text-[11px] lg:text-[13px]  font-medium text-gray-900 font-semibold dark:text-gray-300">Phone:</label>
                                        <input type="name" id="name" class="ml-[0px] mb-[2px] bg-gray-50 border border-black-300 text-gray-900 lg:text-sm" placeholder="Phone" required>
                                        </input>
                                    </div>

                                </div>
                                <div className='rotate-17 pt-[20px] pr-[15px] ml-[40px]'>
                                    <Image className='w-full'
                                        src={myImg2}
                                    />

                                </div>
                            </div>



                            <div className='md:mt-[7px]'>
                                <input type="name" id="name" class="ml-[30px] md:mb-[10px] sm:mb-[2px] lg:mb-[2px] bg-gray-50 lg:w-[400px] lg:h-[40px] md:w-[600px]  md:h-[60px] sm:w-[250px]  w-[200px] h-[60px] mb-[4px] border border-black-300 text-gray-900 text-md" placeholder="Detail about your case here" required>
                                </input>
                            </div>
                            <div className='flex space-x-4 justify-center '>
                                <div className='text-slate-400 lg:text-[14px] md:text-[13px] sm:text-[9px] sm:mt-[12px] mt-[8px] md:mt-[4px] italic'><span>100% Privacy Guranteed</span></div>
                                <div className='flex justify-between bg-red-800 lg:p-1 '>
                                    <div className='md:p-1 p-2'>
                                        <span className='text-white lg:text-[14px] md:text-[12px] sm:pl-[2px] font-semibold sm:text-[9px]'>Ask Us About Your Case</span>
                                    </div>
                                    <div className='lg:ml-[5px] lg:pt-[2px] sm:pl-[3px] sm:pt-[9px] md:pt-[5px] p-2'>
                                        <Image className=''
                                            src={myImg3}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}