import './HiEduData.css'


function HiEduData() {

    const arr=[
 {
    head: "Best College of the Year (BBA/Bcom/BA/Bsc)",
    para: "This award is to recognize the institutes with excellent courses and pedagogy in undergrad level"
 }, 
 
 {
    head: "Institute offering best certification courses",
    para: "Institute offering certificate courses in language, vocational courses, technology, multimedia, music & dance, skill enhancement etc."
 }, 

 {
    head: "University of the Year (North)",
    para: "This will be awarded to an institution that has demonstrated exceptional performance in the past academic year."
 }, 
 {
   head: "University of the Year (South)",
   para: "This will be awarded to an institution that has demonstrated exceptional performance in the past academic year."
 },
 {
    head: "BUniversity of the Year (West)",
    para: "This will be awarded to an institution that has demonstrated exceptional performance in the past academic year."
  },
  {
     head:"International Collaboration of the Year",
     para: "This award will recognize exceptional projects carried out jointly between an Indian institution and one or more international partners.",
  },
  {
    head:"Business School of the Year (National/Regional)International Collaboration of the Year",
    para: "This title will be awarded to the business school demonstrating the most outstanding performance in the past academic year.",
 },
 {
    head:"Most Emerging Higher Education Institute of the Year",
    para: "Emerging higher education institution lesser than 5 years old in Medical/Engineering/Management field",
 },
 {
    head:"Outstanding ICT Initiative of the Year",
    para:"This award will recognize and reward an institutional ICT initiative that has demonstrated an innovative, strategic and potentially far-reaching use of ICT in support of the goals of that institution"
 },
 {
    head:"Most Entrepreneurial Institution of the Year",
    para:"The Awards will recognize institutions that have embedded entrepreneurial activity into the fabric of their institution either through setting Incubation centers or tie-ups with corporate sector for promoting entrepreneurship in higher education",
 },
 {
    head:"Research Project of the Year",
    para:"This will be awarded to the individual or team for innovative research that has a far-reaching impact on its field and has caught, or has the potential to catch, the imagination of the public. It is open to individuals or teams in any discipline at an Indian institution. Nominations must be endorsed by the applicants' institution.",
 },
 {
    head:"Excellence in Distance learning education",
    para:"This award is for overcoming geographical challenges without diluting the quality",
 },
 {
    head:"Teaching Excellence Awards",
    para:"This will be awarded to the individual for demonstrating the upgraded curriculum and teaching methodologies",
 },
 {
    head:"Higher Education Publisher of the Year",
    para:"The Award will recognize a Leading publisher who has brought out the best content in Higher education",
 },
 {
    head:"Best Private University",
    para:"Best academic delivery with desired infrastructure, best practices & working for the cause of Education",
 },
 {
    head:"Best Infrastructure of the Year",
    para:"",
 },
 {
    head:"Institute with best placement",
    para:"",
 },
 {
    head:"Best Engineering College of the Year (Regional / National)",
    para:"",
 },
 {
    head:"Best Medical College of the Year (Regional / National)",
    para:"",
 }
 



    ];



    return ( 
   <>
    
     <div className="EducardData">
     <div className="EducardDataMain">
     {
        arr.map((a,i)=>{
            return(
                <>
                <div className="edudaMain">
                <h2>{a.head}</h2>
                <hr />
                <p>{a.para}</p>
                </div>
                </>
            )
        })
      }
      <hr />

     </div>
     </div>

   </>



     );
}

export default HiEduData;