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
              The Original unpublished Research Papers, Articles &amp; Working
              papers having maximum length 10 pages on the topics related to the
              theme are invited for presentation/publication in the conference
              proceedings.
            </p>
            <ol>
              {/* <li>
                Kindly ensure that your paper is formatted as per{" "}
                <a href={Pdf1} target="_blank" className="SubGuidelines">
                  Springer Guidelines{" "}
                </a>
                (not exceeding 10 pages written in A4 size). Please refer the
                attached springer template for preparation of your paper.
              </li> */}

              <li>
                All submissions will be thoroughly peer-reviewed by experts
                based on originality, significance and clarity.
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
                    href="https://cmt3.research.microsoft.com/ICAIN2024"
                    target="_blank"
                  >
                    Paper Submission Link
                  </a>
                </p>
              </li>
            </ol>

            <br />
          </div>
          {/* right  */}
          <div className="p_imp_dates">
            <ImpDate />
          </div>
        </div>

        {/* // Plagrism policy  */}
        <div className="psubPlagrism">
          <h4 className="highlight ph">Plagiarism Policy</h4>

          <div class="Sucard">
            <div class="tools">
              <div class="circle">
                <span class="red subox"></span>
              </div>
              <div class="circle">
                <span class="yellow subox"></span>
              </div>
              <div class="circle">
                <span class="green subox"></span>
              </div>
            </div>
            <div class="su_card__content ">
              <ol>
                <li>
                  The paper prior to submission should be checked for plagiarism
                  from licensed plagiarism softwares like Turnitin/iAuthenticate
                  etc.
                </li>

                <li>
                  The similarity content should not exceed 20% (in any case
                  either self contents or others). Further, you have to strictly
                  implement the following ethical guidelines for publication.
                </li>
                <li>
                  Any form of self-plagiarism or plagiarism from others' work(s)
                  should not be there in an article.
                </li>
                <li>
                  {" "}
                  If any model / concept / figure / table / data / conclusive
                  comment by any previously published work is used in your
                  article, you should properly cite a reference to the original
                  work.
                </li>

                <li>
                  Also language of explaining it should not be same as language
                  of the work from which you have adopted it.
                </li>
                <li>
                  {" "}
                  If you are using any copyrighted material, you should acquire
                  prior permission from the copyright holder.{" "}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Paper_submission;
