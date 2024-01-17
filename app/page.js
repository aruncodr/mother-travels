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

{/*---------------Hero Page  Booking Section------------*/}

      <div className='px-4 grid grid-cols-1 3xl:grid-cols-6 font-[#6B6B6B]'>

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
{/* -------------------On Screen Button-------------------- */}

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

{/* -------------------Our Services-------------------- */}

  <div className='w-full bg-[#FBFCFF]'>
  <div className='mt-28 text-center text---[#1C4FA2] text-[#19468F] font-semibold text-[24px] pt-8 pb-4'>Our Services</div>

    <div className='grid grid-cols-2 w-full p-2 pb-12 border-1 text-[#1C4FA2] bg-[#FBFCFF] text-md font-semibold'>

      <div className='col-span-2 mx-2 text-center bg-white rounded-xl border border-blue-50 shadow-sm py-4 mb-4 hover:bg-gray-50'>
        <Image className='mb-4 mx-auto' width={36} height={36} src="ontime.svg"></Image>
        <div className='font-semibold'>24 * 7 <br />Taxi services</div>
      </div>

      <div className='mx-2 text-center bg-white rounded-xl border border-blue-50 shadow-sm py-4 mr-2 hover:bg-gray-50'>
        <Image className='mb-4 mx-auto' width={40} height={40} src="welldriver.svg"></Image>
        <div className='font-semibold'>Well Trained<br />Drivers</div>
      </div>

      <div className='mx-2 text-center bg-white rounded-xl border border-blue-50 shadow-sm py-4 ml-2 hover:bg-gray-50'>
        <Image className='mb-4 mx-auto' width={40} height={40} src="cost.svg"></Image>
        <div className='font-semibold'>Low Fare<br />Best Prices</div>
      </div>

    </div>
  </div>

{/* --------------Review section 1 star ----------*/}
<div>
  
</div>
{/* --------------Review section 2 star ----------*/}
    <div>
          <div className='mx-6 md:ml-[234px] mt-12 text-sm'>Trusted and Reviewed by </div>
          <div className='mx-6 md:mx-72 mt-6 flex justify-between'>

          <div>
            <Image src='/google.png' width={80} height={20} alt='logo'/>
              <div className='flex my-2'>
                <Image src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/starhalf.png' width={7} height={7} alt='star'/>  
              </div>
            <div className='text-[12px] my-2'>Rating : 4.1/5 reviews</div>
            
          </div>

          <div>
            <Image className='mt-1' src='/justdial.png' width={80} height={20} alt='logo'/>
              <div className='flex mt-4'>
                <Image src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1'  src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/star.png' width={14} height={14} alt='star'/>
                <Image className='ml-1' src='/starhalf.png' width={7} height={7} alt='star'/>  
              </div>
            <div className='text-[12px] my-2'>Rating : 4.5/5 reviews</div>
          </div>

        </div>
    </div>

{/*---------------Best place in Puduchery-------------
    <div className='mb-12 py-6 bg-[#FBFCFF]'>
      <div className='text-xl mb-4 font-medium text-center text-[#1C4FA2]'>Best Place to visit Pondicherry</div>
      <div className='text-left ml-12 text-[13px] leading-6 text-[#0C2347] flex'>
        <div className='pr-6'>
          <div>Auroville</div>
          <div>Pondy Marina</div>
          <div>Ocean Park</div>
          <div>Paradise Beach</div>
          <div>Eden Beach</div>
        </div>
        <div>
          <div>Manakula Vinayagar</div>
          <div>Light House</div>
          <div>Botanical Garden</div>
          <div>Seaside Promenade</div>
          <div>Bharati Government Park</div>
        </div>
      </div>
    </div>


{/*---------------Contact 1-------------*/}
<div> 
  <div className='text-center text-[#19468F] font-semibold text-[24px] pt-12 pb-4'>Contact</div>

  <div className='grid grid-cols-2 mt-4 mx-4 text-[#19468F]'>  
    <div className='mx-2 text-center bg-white rounded-2xl border border-blue-50 shadow-sm py-4 mb-4 hover:bg-gray-50'>
      <Image className='mx-auto py-2' width={26} height={26} src='admincall.svg' />
      <div className='text-md font-semibold'>Talk to us</div>
    </div>
    <div className='mx-2 text-center bg-white rounded-2xl border border-blue-50 shadow-sm py-4 mb-4 hover:bg-gray-50'>
      <Image className='mx-auto py-2' width={32} height={32} src='adminmsg.svg' />
      <div className='text-md font-semibold'>Customer Support</div>
    </div>
  </div>
</div>

{/*---------------Contact 3-------------*/}
<div className='border border-blue-50 text-[#19468F] shadow-sm rounded-2xl mx-6 px-4 pt-2 pb-4 '>
      <div className='py-2 font-bold text-lg'> Mother travels ( Puducherry ) </div>
      <div className='leading-7'>
        <div className='pt-2 font-semibold'> Address</div>
        <div className='text-md'>14, Nallavadu Road</div>
        <div className='text-md'>Thavalakuppam</div>
        <div className='text-md'>Puducherry</div>
        <div className='text-md'>605 007</div>
      </div>
      <div className='font-semibold pt-4'>Phone</div>
      <div>+919092131783</div>
    </div>

{/*---------------Contact 2-------------*/}
  <div className='rounded-2xl border border-blue-50 mx-6 mb-20 mt-5'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.639195049036!2d79.79768177453086!3d11.860509638264213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549f14fb19e809%3A0x1cf17691736c6c8e!2sMother%20Travels!5e0!3m2!1sen!2sin!4v1705503912329!5m2!1sen!2sin" className='w-full h-64 border border-gray-200 rounded-xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>






    </div>
    )
}
