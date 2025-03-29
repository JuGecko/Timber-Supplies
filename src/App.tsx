import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import Home from './scenes/home';
import { SelectedPage } from "./shared/types";


function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>(
  SelectedPage.Home
);
const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if (window.scrollY !== 0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll); 
  //if you dont add this line you might have memory leaks
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return <div className="app bg-gray-20">
    <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setselectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage}
    
    />
  </div>;
}

export default App
