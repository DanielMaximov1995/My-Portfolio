import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";

const Header = () => {
  return <header className='absolute z-30 w-full flex items-center xl:px-0 xl:h-[90px]'>
    <div className='container mx-auto'>
      <div className='flex flex-row justify-around items-center gap-x-8 gap-y-8 py-8'>
        <Link href='/'>
          <Image src='/logo.svg' alt='Daniel Maximov Full stack Developer' width={220} height={48} priority={true}/>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
