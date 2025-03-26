import "./pcLinks.css";
function PcLinks({ year, links }) {
  return (    
    <>
      <div className="pcLinks">
        <h1>LINK OF PROCEEDINGS OF ICAIN {year}</h1>
        {links.map((link,ind)=>{
          return <div className="pcLinkMains">
          <div className="pcLinkMain">
            <h2>Volume {ind+1}:</h2>
            <p>
              <a href={link} target="_blank">
                Link of the volume {ind+1}
              </a>
            </p>
          </div>          
        </div>
        })}
       
      </div>
    </>
  );
}

export default PcLinks;
