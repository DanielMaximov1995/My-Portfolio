'use client'
import Image from "next/image";

0
const Circles = () => {
  return <div className='w-[200px] xl:w-[300px] absolute right-0 bottom-0 mix-blend-color-dodge animate-pulse opacity-10 duration-75 z-10'>
  <Image
      src='/circles.png'
      alt=''
      width={260}
      height={200}
      className='w-full h-full'
  />
  </div>;
};

export default Circles;
