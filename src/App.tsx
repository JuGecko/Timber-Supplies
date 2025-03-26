import { useState } from "react";
import Navbar from "./scenes/navbar";

function App() {
const [selectedPage, setselectedPage] = useState('home');

  return <div className="app bg-gray-20">
    <Navbar 
      selectedPage={selectedPage}
      setselectedPage={setselectedPage}
    />
  </div>;
}

export default App
