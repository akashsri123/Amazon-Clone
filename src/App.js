import React  from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Navbottom from "./components/Navbottom";
import Carousel1 from "./components/Carousel1";
import Secondcard from "./components/Secondcard";
import Thirdcard from './components/Thirdcard';
import Cardslider from "./components/Cardslider";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Firscomponent from "./components/firstcomponent";
import Navupper from "./components/Navupper";
function App() {
  return (
    <div>
      <Navupper />
   <Navbottom />
   <Carousel1 />
   <Firscomponent  />
   <Secondcard />
   <Thirdcard />
   <Cardslider />
   <Signin />
   <Footer />
   </div>
  );
}

export default App;
