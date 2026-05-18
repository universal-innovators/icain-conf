import "./Publication.css";
import ImpDate from "../impDates/impDtext";
import Footer from "../Footer/footer";
import Indexing from "./Indexing";

import lnns from "./PuImages/lnns.jpg";

const publications = [
  {
    title: "Computer & Electrical Engineering Journal (Elsevier) SCI IF 4.15",
    img: "/images/publications/4.jpg",
    link: "https://www.sciencedirect.com/journal/computers-and-electrical-engineering",
  },
  {
    title: "Expert Systems Journal (Wiley) SCI IF 2.58",
    img: "/images/publications/5.jpeg",
    link: "https://onlinelibrary.wiley.com/journal/14680394",
  },
  {
    title: "Human-centric Computing and Information Sciences Journal, SCI - IF 6.6",
    img: "/images/publications/hccis.jpeg",
    link: "http://hcisj.com/data/file/article/2023040003/13-17.pdf",
  },
  {
    title: "Internet Technology Letters, Wiley - ESCI & SCOPUS",
    img: "/images/publications/17.jpg",
    link: "https://onlinelibrary.wiley.com/journal/24761508",
  },
  {
    title: "SLAS Technology, Elsevier - SCIE (IF 2.8)",
    img: "/images/publications/slas.jpg",
    link: "https://www.sciencedirect.com/journal/slas-technology",
  },
  {
    title: "International Journal of Ad Hoc and Ubiquitous Computing - Inderscience (Scopus)",
    img: "/images/publications/adhoc.jpg",
    link: "https://www.inderscience.com/info/ingeneral/cfp.php?id=5850",
  },
  {
    title: "Computational Intelligence - An International Journal (SCIE, IF 1.3)",
    img: "/images/publications/compIntelligence.jpg",
    link: "https://www.wiley.com/en-in/Computational+Intelligence-p-14678640",
  },
  {
    title: "Signal Processing and Cognitive Computing in 6G Communication - IET (SCIE)",
    img: "/images/publications/signalProcessing.webp",
    link: "https://ietresearch.onlinelibrary.wiley.com/doi/toc/10.1049/IETSP.si.670553",
  },
  {
    title: "International Journal of Sensors, Wireless Communications and Control - Bentham Science",
    img: "/images/publications/ijs.jpg",
    link: "https://www.benthamscience.com/journal/115/manuscript-transfer-facility",
  },
  {
    title: "IET Signal Processing Journal, Wiley (SCI)",
    img: "/images/publications/iet.jpg",
    link: "https://ietresearch.onlinelibrary.wiley.com/journal/ietsp",
  },
  {
    title: "Current Medical Imaging, Bentham Science (IF 1.1)",
    img: "/images/publications/cmir.gif",
    link: "https://benthamscience.com/public/journals/current-medical-imaging",
  },
  {
    title: "Discover Applied Sciences Journal (IF 2.8)",
    img: "/images/publications/das.webp",
    link: "https://link.springer.com/journal/42452",
  },
  {
    title: "Frontiers in Artificial Intelligence Journal, SCI IF 3.0",
    img: "/images/publications/fai.png",
    link: "https://www.frontiersin.org/journals/artificial-intelligence",
  },
  {
    title: "Applied Research Journal, Wiley - Scopus - IF 2.0",
    img: "/images/publications/ar.jpg",
    link: "https://onlinelibrary.wiley.com/journal/27024288",
  },
];

function Publication() {
  return (
    <>
      <div className="Publication">
        <h2>Publications</h2>
        <hr />

        <div className="publicationMain">
          <div className="pubProceedings">
            <b className="sectionLabel">Publication Proceedings</b>
            <p className="porange">
              All the papers of ICAIN 2026 will be published in Springer LNNS
              series (SCOPUS, DBLP, EI Compendex, INSPEC, SCImago, zbMATH).
              <br /> All the papers of ICAIN 2026 will be published in the
              Springer LNNS series as proceedings of ICAIN indexed in SCOPUS,
              DBLP, EI Compendex, INSPEC, SCImago, zbMATH
            </p>

            <div className="puImages proceedingsImages">
              <div className="imgdata">
                <div className="puimg">
                  <img src={lnns} alt="Springer LNNS proceedings" />
                </div>
              </div>
            </div>

            <p>
              Some of the high-quality selected extended papers of the
              conference will be invited to submit for publication in the
              special issues of the following journals:
            </p>

            <div className="puImages">
              {publications.map((publication) => (
                <div className="imgdata" key={publication.title}>
                  <a
                    className="publicationLink"
                    href={publication.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="puimg">
                      <img src={publication.img} alt={publication.title} />
                    </div>
                    <p>{publication.title}</p>
                  </a>
                </div>
              ))}
            </div>

            <Indexing />
          </div>

          <div className="puImpdate">
            <ImpDate />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Publication;
