import './SuNoPaward.css'
function Submission() {
    return ( 
        <>

        {/* submission  */}
        <div className="Submission">

            <div className="submissionStart">
            <h1>SUBMISSION</h1>
             <p>Please fill the attached form and send it along with complete CV to 
                <span className='Sumail'> universalinovators@gmail.com</span>( <span className='Sucategory'>Subject: Award [Category/Sub-Category]</span>  ).</p>

                <p>If applying for best paper or thesis awards, then mail us filled form, CV, paper/thesis to 
                <span className='Sumail'> universalinovators@gmail.com</span>( <span className='Sucategory'>Subject: Award [Category/Sub-Category] </span>  ).</p>
        </div>
        </div>

{/* submission table  */}
        <div className="submissionTable">
          <p><a href="#">Individual Award Form</a></p>
          <p><a href="#">Higher Education Award Form</a></p>
        </div>


 {/* Nomination and evaluation  */}
 <div className="Nomination">

  <h1>NOMINATION AND EVALUATION:</h1>
 <div className="nominationMain">
          <p>Each applicant would be required to fill in a Self-Nomination form and send it to us by 31st January, 2023</p>
          <p>Higher Education Award FormAny organization/individual from education/allied sector can apply. Each applicant can apply for one or multiple categories.</p>
          <p>The nominees in each category will be presented to the final jury for determination of winners.</p>
          <p>Information received will be treated confidential and not used for any purpose except for determining the winner of the awards</p>
          <p>Incomplete questionnaire in any manner will disqualify a participant from participating in the awards.</p>
          <p>Right to permit participation is reserved with the Awards management.</p>
          </div>
        </div>


        {/* Past awardees  */}
<div className="PastAwardees">
       <h3>PAST AWARDEES:</h3>
        <div className="PastMainAward">
          <p><a href="#">UILA Awards 2020</a></p>
          <p><a href="#">UILA Awards 2021</a></p>
          <p><a href="#">UILA Awards 2022</a></p>
        </div>
      
        </div>

        </>
     );
}

export default Submission;