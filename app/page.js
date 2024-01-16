import Image from 'next/image'

export default function Home() {
    const reviewMenu=[
      {
        id:1,
        name:'googleg',
        icon:'/googleg.png'
      },
      {
        id:2,
        name:'justdials',
        icon:'/justdial.png'
      }
    ]
    const ImageLink = ({src,href}) => {
      return (
      <a href={'https://wa.me/+919092131783'}>
      <img src={'/whatsapp.png'} alt="whatsapp"/>
      </a>
      )
      }
        
  return (
    <div className=' md:px-16 text-[16px]'>

      <div className='px-4 grid grid-cols-1 3xl:grid-cols-6 font-[#6B6B6B] -----Hero Page'>

          <div className='col-span-2  -----Left hero'>

                <div className='mt-3 md:pl-6 text-[#0C2347] font-semibold text-[24px] md:text-[32px] text-center '>We Take you Anywhere </div>
                <div className='mt-2 md:pl-6 text-[#0C2347] font-semibold text-[24px] md:text-[32px] text-center '>You Want to Go</div>
                <div className='mt-4 mb-4 md:pl-6 text-[#0C2347] font-medium text-[14px] md:text-[16px] text-center ' ><span className='text-[#1C4FA2]'> We Provide More,</span> You Pay Less </div>

                <div className='flex flex-col text-[12px] px-4 md:px-0 lg:w-[60%] lg:ml-24 xl:w-[40%] xl:ml-[360px] '>
                    <div className='dark:bg-white font-medium text-[16px] md:text-[18px] rounded-md text-[#0C2347] dark:text-black items-center flex justify-evenly '>
                      <div className=''>
                        Local
                      </div>
                      <div className='border-b-2 border-[#1C4FA2] p-1 text-[#1C4FA2]'>
                        <span className=''>Outstation</span>
                      </div>
                      <div className=''>
                        Rental
                      </div>
                    </div>

                    <div className='pt-5'>
                      <input className='dark:text-black text-[14px] md:text-[16px] focus:outline-none block md:ml-6 pl-8 md:pl-12 py-2 w-full border border-[#7898CC] rounded-md' placeholder='Enter Pickup location'/>
                    </div>
                    <div className='pt-5'>
                      <input className='dark:text-black text-[14px] md:text-[16px] focus:outline-none block md:ml-6 pl-8 md:pl-12 py-2 w-full border border-[#7898CC]       rounded-md' placeholder='Enter Destination'/>
                    </div >
                    <button className='mt-5 py-2 md:ml-6 bg-[#1C4FA2] text-[16px] font-medium w-full text-white rounded-lg'>See prices</button>
                
                </div>
        </div>

          <div className='col-span-4 -----Right hero'>
            
          </div>

      </div>
        
        <div className='w-12 h-12 fixed bottom-4 right-4'>
          <ImageLink src="/whatsapp.png" href="https://wa.me/+919092131783"/>
        </div>
          
        <a className='text-lg' href='tel:+919092131783'>
          <div className='fixed bottom-4 left-4 py-2 px-4 flex items-center 
          bg-white border border-[#1C4FA2] text-center rounded-2xl font-bold text-[#1C4FA2] text-xl'>
          <div><svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" fill="#1c4fa2"></path> </svg></div>
          <div className='pl-2'>Call</div> 
          </div>
        </a>
        {/* ------------Our Services----------- */}


<div className='mt-32 text-center bg-[#FBFCFF] text-[#1C4FA2] font-semibold font- text-3xl py-8'>Our Services</div>
        <div className='grid grid-cols-2 leading-7 mx-2 p-2 pb-8 border-1 text-[#1C4FA2] bg-[#FBFCFF] text-md font-semibold'>
          <div className='bg-white rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>Airport Services</div>
          <div className='row-span-3 bg-white flex flex-col-reverse items-center rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>
            <div className='font-bold'>24 * 7 <br />Taxi services</div> <div><Image className='mb-4' width={36} height={36} src="ontime.svg"></Image></div>
            </div>
          <div className='bg-white rounded-md shadow-sm text-center py-2  mx-2 my-2 hover:bg-gray-50'>Outstation Rides</div>
          <div className='grid row-span-2 bg-white rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>Local Rides</div>
          <div className='row-span-3 bg-white flex flex-col-reverse items-center rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>
            <div className='font-bold'>Well Trained<br />Drivers</div> <div><Image className='mb-4' width={40} height={40} src="welldriver.svg"></Image></div>
            </div>
          <div className='grid row-span-2 bg-white rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>Mother travels Puducherry</div>
          <div className='grid row-span-3 bg-white rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>Low Fare<br />Best Prices</div>
          <div className='grid row-span-3 bg-white rounded-md shadow-sm text-center py-2 mx-2 my-2 hover:bg-gray-50'>Luxury cars<br />A/C cabs<br />Carriers</div>
          
        </div>


          <div className='ml-5 md:ml-[234px] mt-12 text-sm'>Trusted and Reviewed by </div>
          <div className='mx-4 md:mx-72 mt-6 flex justify-between'>

          <div>
            <Image src='/google.png' width={80} height={20} alt='logo'/>
              <div className='flex gap-1 my-2'>
                <Image src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/starhalf.png' width={10} height={10} alt='star'/>  
              </div>
            <div className='text-[12px] my-2'>Rating : 4.1/5 reviews</div>
            <button className='mt-1 py-1 md:ml-6 bg-white text-[14px] font-medium w-full text-[#1C4FA2] border-[#1C4FA2] rounded-lg'>See prices</button>
          </div>

          <div>
            <Image className='mt-1' src='/justdial.png' width={80} height={20} alt='logo'/>
              <div className='flex mt-4'>
                <Image src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1'  src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/star.png' width={20} height={20} alt='star'/>
                <Image className='ml-1' src='/starhalf.png' width={10} height={10} alt='star'/>  
              </div>
            <div className='text-[12px] my-2'>Rating : 4.5/5 reviews</div>
          </div>

        </div>
        <div>

        </div>



    </div>
    )
}
