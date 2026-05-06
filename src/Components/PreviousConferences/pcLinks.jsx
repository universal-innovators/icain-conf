import "./pcLinks.css";
function PcLinks({ links, year }) {
  return (
    <div>
      <h3>Proceedings {year}</h3>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <span style={{ color: "gray" }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PcLinks;
