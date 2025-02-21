import "./Paper_submission.css";
import Footer from "../../Footer/footer";
import ImpDate from "../../impDates/impDtext";
import Pdf1 from "../../Downloads/pdfs/Manuscript.pdf";
const Paper_submission = () => {
  return (
    <>
      <div className="submission">
        <h2 className="abtHeader">Paper Submission</h2>

        <div className="Submission_con">
          {/* left  */}
          <div className="Submission_desc">
            <p style={{"color":"black"}}>
            Original, unpublished research papers, articles, and working papers, with a maximum length of 10 pages, on topics related to the conference theme are invited for presentation and publication in the conference proceedings.
             
            </p>
            <ul>
              {/* <li>
                Kindly ensure that your paper is formatted as per{" "}
                <a href={Pdf1} target="_blank" className="SubGuidelines">
                  Springer Guidelines{" "}
                </a>
                (not exceeding 10 pages written in A4 size). Please refer the
                attached springer template for preparation of your paper.
              </li> */}

              <li>
              All submissions will undergo a thorough peer review by experts, focusing on originality, significance, and clarity.
              </li>
              <li>
                Only papers presenting original content with novel research
                results or successful innovative applications will be considered
                for publication in the conference proceedings.
                 {/* (as chapters in
                edited volumes of Springer AIS Series). */}
              </li>

              <li>
                All papers must be submitted online via this link:
                <p className="submissionLinkhead">
                  <a
                    href="https://cmt3.research.microsoft.com/ICAIN2025"
                    target="_blank"
                  >
                    Paper Submission Link
                  </a>
                </p>
              </li>
            </ul>

            <br />
          </div>
          {/* right  */}
          <div className="p_imp_dates">
            <ImpDate />
          </div>
        </div>

        {/* // Plagrism policy  */}
        <div className="psubPlagrism">
          <h4 style={{color:"white"}}>Plagiarism Policy</h4>

          <div class="Sucard">
            {/* <div class="tools">
              <div class="circle">
                <span class="red subox"></span>
              </div>
              <div class="circle">
                <span class="yellow subox"></span>
              </div>
              <div class="circle">
                <span class="green subox"></span>
              </div>
            </div> */}
            <div class="su_card__content ">
            Before submission, the paper should be checked for plagiarism using licensed plagiarism detection software such as Turnitin or iAuthenticate. The similarity content should not exceed 20% (including both self-content and others’ work).<br/>
            Furthermore, the following ethical guidelines must be strictly adhered to for publication:
              <ul>
                

                <li>
                Any form of self-plagiarism or plagiarism from others’ work will not be tolerated.
                </li>
                <li>
                If any model, concept, figure, table, data, or conclusive comment from previously published work is used in your article, it must be properly cited, with a clear reference to the original source.
                </li>
                <li>
                  {" "}
                  The language used to explain any borrowed content should be distinct from the original work from which it has been adopted.
                </li>

                <li>
                If using any copyrighted material, prior permission from the copyright holder must be obtained.
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Paper_submission;
