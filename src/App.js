
// import logo from './logo.svg';


import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer/Footer";
import FreeTryAtHome from "./components/Freetry/FreeTryAtHome";

import Homepage from "./components/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />


   
     

      {/* <AllRoutes /> */}
      <Homepage />
      {/* <FreeTryAtHome /> */}




      <Footer />
    </div>
  );
}

export default App;
