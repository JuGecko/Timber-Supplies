import { useState } from "react";
import Navbar from "./scenes/navbar";
import { SelectedPage } from "./shared/types";

function App() {
const [selectedPage, setselectedPage] = useState<SelectedPage>(
  SelectedPage.Home
);

  return <div className="app bg-gray-20">
    <Navbar 
      selectedPage={selectedPage}
      setselectedPage={setselectedPage}
    />
  </div>;
}

export default App
