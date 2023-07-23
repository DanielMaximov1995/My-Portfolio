import Image from "next/image";

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
      <Image src='/daniel.png' alt='Daniel Maximov - Full stack Developer' width={737} height={678} className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
