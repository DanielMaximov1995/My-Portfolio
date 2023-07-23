import {FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import Link from "next/link";

const social = [
  { title: 'linkedin.com/in/danielmaximov', uri: 'https://www.linkedin.com/in/danielmaximov', icon: <FaLinkedinIn /> },
  { title: 'github.com/Danielmaximov1995', uri: 'https://github.com/Danielmaximov1995', icon: <FaGithub /> },
  { title: 'DanielMaximov2@gmail.com', uri: 'mailto:DanielMaximov2@gmail.com', icon: <FaEnvelope /> },
  { title: '050-7255-889', uri: 'tel:0507255889', icon: <FaPhoneAlt /> },
  { title: 'WhatsApp', uri: 'https://wa.me/972507255889', icon: <FaWhatsapp /> },
];

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    {
      social.map((item , index) => {
        return <Link target='_blank' href={item.uri} className='hover:text-accent transition-all duration-300'>{item.icon}</Link>
      })
    }
  </div>;
};

export default Socials;
