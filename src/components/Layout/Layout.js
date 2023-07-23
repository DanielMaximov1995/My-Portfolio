import Nav from "@/components/Layout/Nav";
import Header from "@/components/Layout/Header";
import TopLeftImg from "@/components/TopLeftImg";

const Layout = ({children}) => {
  return <div className={'page bg-site text-white bg-cover bg-no-repeat relative'}>
    <Nav/>
    <Header/>
    <TopLeftImg/>
    {children}
  </div>;
};

export default Layout;
