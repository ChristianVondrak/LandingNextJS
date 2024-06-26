import Image from "next/image";

export default function Home() {
  return(
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative ">
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">Insightful</h1>
            <h2 className="text-md md:text-2xl">Start growing today</h2>
          </div>

        </div>
      </header>
    </main>
  )
}

function Navbar(){
  return(
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>Insightful</h6>
        <ul className='flex gap-8'>
          <li><link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' rel="stylesheet" href="#home" />Home</li>
          <li><link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' rel="stylesheet" href="#about" />About</li>
          <li><link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' rel="stylesheet" href="#pricing" />Pricing</li>
        </ul>
      </div>
    </div>
  )
}
