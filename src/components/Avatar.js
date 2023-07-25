import Image from "next/image";

const Avatar = (props) => {
  return <div className='hidden xl:flex xl:max-w-none'>
      <Image src={props.avatar} alt='Daniel Maximov - Full stack Developer' width={737} height={678} className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
