import './AwardCards.css'
function AwardCards({heading, para}) {
    return ( 
         <>
         <div className="AwardCardMain">
            <h2>{heading}</h2>
            <hr />
            <p>{para}</p>
         </div>
         </>
     );
} 

export default AwardCards;