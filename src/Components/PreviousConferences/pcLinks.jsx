import "./pcLinks.css";

const isUrl = (value) => {
  if (typeof value !== "string") {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

function PcLinks({ links, year }) {
  return (
    <div className="pc-links-container">
      <h3 className="pc-links-title">Proceedings {year}</h3>

      <ul className="pc-links-list">
        {links.map((item, index) => {
          const isLink = isUrl(item);

          return (
            <li key={`${year}-${index}`} className="pc-link-item">
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
                  <span className="pc-link-disabled">{item}</span>
                )}
              </div>

              <span className={`pc-link-badge ${isLink ? "available" : "coming"}`}>
                {isLink ? "Available" : "Coming Soon"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PcLinks;
