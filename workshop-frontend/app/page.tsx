// import Image from "next/image";

// import Home from "./Header/home";
import Menulist from "./Header/menulist";
import Navbar from "./navbar/navbar";
// import Secondnav from "./navbar/secondnav";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <Secondnav /> */}
      <Menulist />
    
    </div>
  );
}
