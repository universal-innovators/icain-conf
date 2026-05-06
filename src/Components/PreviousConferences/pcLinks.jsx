import 'pcLinks.css'
function PcLinks({ links, year }) {

  // ✅ helper to detect valid URL
  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="pc-links-container">
      <h3 className="pc-links-title">Proceedings {year}</h3>

      <ul className="pc-links-list">
        {links.map((item, index) => {
          const isLink = isValidUrl(item);

          return (
            <li key={index} className="pc-link-item">

              {/* LEFT: Link or Text */}
              <div className="pc-link-text">
                {isLink ? (
                  <a
                    href={item}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pc-link-anchor"
                  >
                    View Proceedings {index + 1}
                  </a>
                ) : (
                  <span className="pc-link-disabled">
                    {item}
                  </span>
                )}
              </div>

              {/* RIGHT: Badge */}
              <div>
                {isLink ? (
                  <span className="badge available">Available</span>
                ) : (
                  <span className="badge coming">Coming Soon</span>
                )}
              </div>

            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PcLinks;