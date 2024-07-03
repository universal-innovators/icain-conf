import "./pcLinks.css";
function PcLinks({ year, link1 }) {
  return (
    <>
      <div className="pcLinks">
        <h1>LINK OF PROCEEDINGS OF Icicc {year}</h1>

        <div className="pcLinkMains">
          {/* 1st  */}
          <div className="pcLinkMain">
            <h2>Volume 1:</h2>
            <p>
              <a href={link1} target="_blank">
                Link of the volume 1
              </a>
            </p>
          </div>

          {/* 2nd  */}
          <div className="pcLinkMain">
            <h2>Volume 2:</h2>
            <p>
              <a href="#" target="_blank">
                Link of the volume 2
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PcLinks;
