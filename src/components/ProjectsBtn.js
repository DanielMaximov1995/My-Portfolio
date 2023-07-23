import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from "react-icons/hi2";
import {useRouter} from "next/navigation";

const ProjectsBtn = () => {

    return <div className='mx-auto xl:mx-0 z-10'>
            <div className='relative w-[145px] h-[145px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
            <Image src='/rounded-text.png' alt='' width={125} height={138}
                   className='animate-spin-slow w-full h-full max-w-[119px] max-h-[126px] '/>
            <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
            </div>

    </div>;
};

export default ProjectsBtn;
