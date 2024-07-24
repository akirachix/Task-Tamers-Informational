import React from 'react';
import Navbar from './Home/index';
import Features from './Features';


function App() {

  return (
    <div>
      <Navbar />
      <Features/>
    </div>
  );
  }

export default App;




import Faq from "./Faqs";
import Features from "./Features";


const App = ()=>{
  return(
    <div>
     <Features/>
     <Faq/>
    

    </div>
  )


}
export default App;

