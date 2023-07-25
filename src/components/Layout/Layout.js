'use client'
import Nav from "@/components/Layout/Nav";
import Header from "@/components/Layout/Header";
import TopLeftImg from "@/components/TopLeftImg";
import {usePathname} from "next/navigation";

const Layout = ({children}) => {
    const pathname = usePathname()

  return (
      <div className={'md:page bg-site text-white bg-cover bg-no-repeat relative md:z-10'}>
        <Nav />
          {
              !pathname.includes('/admin') && <>
                  <Header />
                  <TopLeftImg />
              </>
          }
        {children}
      </div>
  );

};

export default Layout;
