import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "animate.css";
import Header from './Header';
import Routing from './Routing';
import Footer from './Footer';
import { createContext, useState } from "react";

export const loginStatus = createContext();

function  App() {
  const [login,setLogin] = useState(false)
  return (
         <div className="container-fluid p-0">
          <loginStatus.Provider value={[login, setLogin]}>
           <Header />
           <Routing />
           <Footer /> 
           </loginStatus.Provider>
         </div>
  );
};

export default App;
