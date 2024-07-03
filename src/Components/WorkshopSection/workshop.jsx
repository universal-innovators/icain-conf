import ImpDate from "../impDates/impDates";
import Footer from "../Footer/footer";
import "./workshop.css"
import "animate.css"
function WorkShops () {
    return ( 
       <div>
        <div className="workshops animate__animated animate__fadeInLeftBig">
         <ImpDate/>
         </div>

         <Footer/>
       </div>
     );
}

export default WorkShops ;