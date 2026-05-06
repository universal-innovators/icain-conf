function PcLinks({ links, year }) {
  return (
    <div className="pc-links-container">
      <h3 className="pc-links-title">Proceedings {year}</h3>

      <ul className="pc-links-list">
        {links.map((item, index) => (
          <li key={index} className="pc-link-item">
            
            {/* LEFT: Link or Text */}
            <div className="pc-link-text">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pc-link-anchor"
                >
                  {item.label}
                </a>
              ) : (
                <span className="pc-link-disabled">
                  {item.label}
                </span>
              )}
            </div>

            {/* RIGHT: Badge */}
            <div>
              {item.url ? (
                <span className="badge available">Available</span>
              ) : (
                <span className="badge coming">Coming Soon</span>
              )}
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default PcLinks;