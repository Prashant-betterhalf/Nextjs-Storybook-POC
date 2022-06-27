
import Image from "next/image"

function MainSection() {
  return (
  //   <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //   <div className="max-w-md w-full space-y-8">
  //     <div>
  //       <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
  //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
  //       <p className="mt-2 text-center text-sm text-gray-600">
  //         Or
  //         <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
  //       </p>
  //     </div>
  //     <form className="mt-8 space-y-6" action="#" method="POST">
  //       <input type="hidden" name="remember" value="true" />
  //       <div className="rounded-md shadow-sm -space-y-px">
  //         <div>
  //           <label htmlFor="email-address" className="sr-only">Email address</label>
  //           <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
  //         </div>
  //         <div>
  //           <label htmlFor="password" className="sr-only">Password</label>
  //           <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
  //         </div>
  //       </div>
  
  //       <div className="flex items-center justify-between">
  //         <div className="flex items-center">
  //           <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
  //           <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
  //         </div>
  
  //         <div className="text-sm">
  //           <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
  //         </div>
  //       </div>
  
  //       <div>
  //         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  //           <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
  //             <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //               <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
  //             </svg>
  //           </span>
  //           Sign in
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // </div>

  <div className="h-[567px]  md:h-auto  flex flex-col justify-around  ">
  <div>
    <main className="grid grid-cols-3 gap-2">
      <div className="flex flex-col items-center justify-center col-span-1 space-y-14 md:items-stretch md:col-span-1">
        <div className="flex flex-col items-center space-y-2 md:items-stretch">
          <h1 className="text-2xl font-bold !leading-tight text-center md:text-4xl lg:text-5xl md:text-left max-w-[300px] md:max-w-[400px]">
         {` India's New Age Matrimony App`}
          </h1>
          <p className="text-lg leading-6 text-[16px] text-center text-gray-500 md:text-xl lg:text-2xl md:text-left max-w-[300px] md:max-w-[400px]">
          Find someone who you can easily connect with, Get married!
          </p>
        </div>
        {/* <button
          id="webapp-ca-btn"
          className="  w-[200px] md:block md:w-[300px] md:p-3  lg:w-[302px] bg-[#f7b9a8] hover:bg-[#ff9f85] p-2 lg:p-4 text-2xl text-white  rounded-md word-spacing hover:animate-none"
         
        >
          Find Your partner
        </button> */}
      </div>

      <div className="relative w-full h-[290px] md:h-[560px] md:col-span-2 ">
        {/* <Image
            src={'/assets/images/landingPage/hero.png'}
            alt="wedding image"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
            loading="eager"
          /> */}
        <Image
            src={'/assets/images/landingPage/hero.png'}
            alt="wedding image"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
            loading="eager"
            // id="pic2"
            // className="pic"
          />
       {/* <Image
            src={'/assets/images/landingPage/CristianHero.png'}
            alt="wedding image"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
            loading="eager"
            id="pic3"
            className="pic"
          /> */}
          
      </div>
      <div className=" absolute right-[90px] grid grid-cols-1 gap-20 top-[200px]" >
            <div className="">
              <img src="/assets/images/landingPage/01.png" alt="dating thumb" />
            </div>
            <div className="shapeimg shapeimg__two">
              <img src="/assets/images/landingPage/02.png" alt="dating thumb" />
            </div>
            <div className="shapeimg shapeimg__three">
              <img src="/assets/images/landingPage/03.png" alt="dating thumb" />
            </div>
          </div>
     
    </main>

    {/* <StatsSection stats={stats} /> */}
  </div>
  </div>
  )
}

export default MainSection