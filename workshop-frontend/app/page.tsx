// import Image from "next/image";

// import Home from "./Header/home";
import Choose from "./Header/choose";
import Doublesingup from "./Header/doublesingup";
import Footer from "./Header/footer";
import Menulist from "./Header/menulist";
import Popular from "./Header/popular";
import Taste from "./Header/Taste";
import Navbar from "./navbar/navbar";
// import Secondnav from "./navbar/secondnav";

export default function Homepage() {
  return (
    <div className="">
      {/* padding-top = navbar height */}
      <div
       
      >  
       
        <Navbar />
        <Menulist />
        <Taste />
        <Popular />
        <Choose />
        <Doublesingup />
        <Footer />
       
      </div>
    </div>
  );
}

