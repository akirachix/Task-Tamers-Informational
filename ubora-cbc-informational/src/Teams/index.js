import "./index.css"
const Teams =() =>{
   return(
        <div className="team-info">
           <h1 className='team'>Our Team</h1>
           <div className="images">
             <div>
               <img src="/images/images/doro.png" alt="dorcas" className="images" />
               
                 <h1 className="text">Dorcas Tuukuo</h1>
               
             </div>
             <div>
               <img src="/images/images/terry.png" alt="terry" className="images" />
                
                 <h1 className="text">Terry Mitchel</h1>
             </div>
             <div>
               <img src="/images/images/nyokabi.png" alt="nyokabi" className="images" />
                <h1 className="text">Esther Nyokabi</h1>
             </div>
             </div>
             <div>
               <div className='second'>
               <div>
               <img src="/images/images/latifa.png" alt="latifa" className="image" />
                 <h1 className="text">Latifa Umunyana</h1>
             </div>
             <div>
               <img src="/images/images/shama.png" alt="shama" className="image" />
                 <h1 className="text">Esther Shiamagovi</h1>
               </div>
               </div>
               </div>
             </div>
            
         );
 };
 export default Teams;