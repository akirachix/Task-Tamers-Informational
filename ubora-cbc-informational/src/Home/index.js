import './index.css';
// import logo from "../image/image.png"
// import cbckids from "../image/cbckids.png"
// import features from "../image/features.png"


 
const Navbar =() => {
    return (
      <div className='container'>
      <div className='navbar'>
        <div className='logo'>
            <img src="/images/image.png" alt='logo' className="logo"/>
        </div>

        <div className='navigations'>
            <p><em>Home</em></p>
           <p>Features</p>
           <p>About</p>
           <p>FAQ's</p>
           <p>Team</p>
           <p>Contacts</p>
           </div>

         </div> 
           <div className='home'>
            <div className='intro'>
          <p className='ubora'>Ubora CBC,</p>
          <p className='unlocking'>Unlocking Practical Knowledge.</p>
          <div className='button'>
          <button className='learnmore'>Learn More..</button>
          </div>
          </div>
          <div className='kidsImage'> 
          <img src="/images/cbckids.png" alt='kidsimage' className="kidsImage"/>
          </div>
          </div> 
          <div>
          <img src="/images/features.png" alt='features' className="features"/>
          </div>
          </div>
       
    
    );
};
export default Navbar ;