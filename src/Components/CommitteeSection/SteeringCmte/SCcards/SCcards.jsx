import "./Scards.css";

function SCcards() {
  let genChair = [   
    {
      h1: "Prof. Dr. Bal Virdee",
      p: "London Metropolitan University, United Kingdom"
    },
    {
      h1: "Prof. (Dr.) Swagatam Das",
      p: "Professor, Indian Statistical Institute, Kolkata, India"
    }
];

  let patron = [
    {
      h1: "Prof. Souri Banerjee",
      p: "Director, BITS Pilani-Dubai Campus",
    },
    {
      h1: "Prof. Mukul Sharad Sutaone",
      p: "Director, IIIT Allahabad, India",
    },
    // {
    //   h1: "Ms. Shanthi Rajan",
    //   p: "Director - Internal QA Dept., Director - Scottish Qualification Authority, RAK Centre, University of Stirling RAK Campus, UAE",
    // },
    // {
    //   h1: "Dr. Abhinanda Barman",
    //   p: "Director - University Communication and Strategic Alliance, University of Stirling RAK Campus, UAE",
    // },
    // {
    //   h1: "Mr. Mubin Khatib",
    //   p: "Director - Human Resources, University of Stirling RAK Campus, UAE",
    // },
    // {
    //   h1: "Mr. William Alistair McQueer",
    //   p: "Programme Director - Computing Science, University of Stirling RAK Campus, UAE",
    // },
    // {
    //   h1: "Dr. Sanman Jain",
    //   p: "Programme Director - Accounting and Finance, University of Stirling RAK Campus, UAE",
    // },
    // {
    //   h1: "Dr. Nikhil V.P",
    //   p: "Programme Director - Management, University of Stirling RAK Campus, UAE",
    // }
];

  let chiefPatron = [

     {
       h1: "Prof. V. Ramgopal Rao",
       p: "Vice-Chancellor, BITS Pilani",
     },
    // {
    //   h1: " Prof. Madhu Pruthi",
    //   p: "(Principal, Keshav Mahavidyalaya, University of Delhi)",       
    // }
  ]
  let honaryChar = [
    {
      h1: " Prof. Janusz Kacprzyk",
      p: "Polish Academy of Sciences, Systems Research Institute, Poland",
    },
    {
      h1: "Prof. Vaclav Snasel, Rector",
      p: "VSB-Technical University of Ostrava, Czech Republic",
    },
  ];

  let confChair = [
    {
      h1: " Prof. Sujala D. Shetty",
      p: "Associate Professor and Head (CS), BITS PILANI DUBAI CAMPUS"
    },
    
    {
      h1: "Prof. Dr. Jan Valicek",
      p: "Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Dr. Pancham Shukla",
      p: "Imperial College London"
    },
    // {
    //   h1: "Dr. Shamik Palit",
    //   p: "Associate Prof. CS and SE, HEAD - Corporate Outreach Committee, University of Stirling RAK Campus, UAE"
    // }
];


let techChair = [
   {
      h1: "Prof. Hussain Chowdhury",
      p: "Assistant Professor (CS), BITS PILANI DUBAI CAMPUS"
    },   
  {
    h1: "Prof. Dr. Isabel DE LA TORRE DÍEZ",
    p: "University of Valladolid, Spain"
  },
  {
    h1: "Dr. Mamoona Humayun",
    p: "Department of Information Systems, College of Computer and Information Sciences, Jouf University, Sakaka, Saudi Arabia"
  },
  {
    h1: "Dr. Momina Shaheen",
    p: "Department of Computing, School of Arts Humanities and Social Sciences, University of Roehampton, London SW15 5PJ, United Kingdom"
  },
  {
    h1: "Dr. Richa Sharma",
    p: "London Metropolitan University, United Kingdom"
  }
];

  let organisingChair = [

    {
      h1: "Dr. Anupam Agrawal",
      p: "Professor & Dean, IIIT Allahabad, India",
    },
    // {
    //   h1: "Prof. Sergio Duarte Correia",
    //   p: "(Polytechnic Institute of Portalegre, Portugal.)",
    // },
  ];

  // let editorChair = [
  //   {
  //     h1: "Prof. Aboul Ella Hassanien",
  //     p: "(College of Business Administration, Kuwait University, Kuwait)",
  //   },
  //   {

  // ];

  let pubChair = [
    {
      h1: "Prof. Dr. Abhishek Swaroop",
      p: "Bhagwan Parshuram Institute of Technology, India"
    },
    {
      h1: "Prof. Dr. Sérgio Duarte Correia",
      p: "Polytechnic Institute of Portalegre, Portugal"
    }
];


  let coConvener = [




  ];

  let publicChair = [
    {
      h1: "Prof. Suyash Shukl",
      p: "Assistant Professor (CS), BITS PILANI DUBAI CAMPUS"
    }, 
    {
      h1: "Dr. Sandra Fernando",
      p: "London Metropolitan University"
    },
    {
      h1: "Dr. Jameel Ahamed",
      p: "Maulana Azad National Urdu University, Gachibowli, Hyderabad, India"
    },
    {
      h1: "Dr. Marta Harničárová",
      p: "Department of Mechanical Engineering, Faculty of Technology, Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Prof. Mete YAĞANOĞLU",
      p: "Ataturk University, Department of Computer Engineering, Turkey"
    },
    {
      h1: "Dr. Sushil Kumar Singh",
      p: "Associate Professor, Marwadi University, Rajkot, Gujarat, India, London Metropolitan University, London, UK"
    },
    {
      h1: "Prof. Dr. Zdzislaw Polkowski",
      p: "The Karkonosze University of Applied Sciences in Jelenia Góra, Poland"
    },
    {
      h1: "Dr. Ahmed J. Obaid",
      p: "Associate Professor of Computer Science at the University of Kufa, Iraq"
    },
];


  // let techCoChair = [

  //   {
  //     h1: "Dr Oana Geman",
  //     p: "(Universitatea Stefan cel Mare din Suceava, 720239 Romania)",
  //   },
  //   
  //   {
  //     h1: "Prof. Arun Sharma",
  //     p: "(Indira Gandhi Delhi Technical University for Womens, India)",
  //   },
  //   {
  //     h1: "Dr Le Hoang Son",
  //     p: "(University of Dannang, Vietnam)",
  //   },
  // ];



  let convener = [
    {
      h1: "Prof. Kajal Kansal",
      p: "Assistant Professor (CS), BITS PILANI DUBAI CAMPUS"
    },    
    {
      h1: "Dr. Roman Danel",
      p: "Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Dr. Moolchand Sharma",
      p: "Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi"
    }

];




  // let OrgTeam=[{
  //   cat:"Faculty Coordinators:",
  //   mem:[
  //     // {
  //     //   h1: "Prof Punam Bedi",
  //     //   p: "Department of Computer Science, University of Delhi",
  //     // },
  //     {
  //       h1: "Prof Vinita Jindal",
  //       p: "Keshav Mahavidyalaya, University of Delhi",
  //     },
  //     {
  //       h1:"Prof Hema Banati",
  //       p:"Dayal Singh College, University of Delhi"
  //     },
  //     {
  //       h1: "Dr Anjali Thukral",
  //       p: "Keshav Mahavidyalaya, University of Delhi",
  //     },
  //     {
  //       h1: "Dr Bhavna Gupta",
  //       p: "Keshav Mahavidyalaya, University of Delhi",
  //     },
  //     {
  //       h1: "Ms Richa Gupta",
  //       p: "Keshav Mahavidyalaya, University of Delhi",
  //     }
  //   ]
  // },
  // {
  //   cat:"Student Coordinators:",
  //   mem:[
  //     {
  //       h1: "Rahul Arora",
  //       p: "B.Sc. (H) Computer Science, 2nd Year, KMV",
  //     },
  //     {
  //       h1: "Nancy Gupta",
  //       p: "B.Sc. (H) Computer Science, 2nd Year, KMV",
  //     },
  //     {
  //       h1:"Anjali",
  //       p:"B.Sc. (H) Computer Science, 1st Year, KMV"
  //     },
  //     {
  //       h1: "Ayser Islam",
  //       p: "B.Sc. (H) Computer Science, 1st Year, KMV",
  //     },
  //     {
  //       h1: "Jhalak Arora",
  //       p: "B.Sc. (H) Computer Science, 1st Year, KMV",
  //     },
  //     {
  //       h1: "Mohit Kumar",
  //       p: "B.Sc. (H) Computer Science, 1st Year, KMV",
  //     }
  //   ]
  // },
  // ]

  return (
    <>
    <div className="ScCardsSteering"> 
      

      <div className="PaGeCommon">
      <div className="patron">
        <h2>Chief Patron(s):</h2>
            <div className="patronMain">
              {chiefPatron.map((a) => {
                return (
                  <>
                    <div className="patrondata">
                      <h1>{a.h1}</h1>
                      <p>{a.p}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
      {/* general chair and honoray chair */}
      <div className="patron">
        <h2>Patron(s):</h2>
          <div className="patronMain">
            {patron.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* General Chai  */}
        <div className="patron">
          <h2>General Chair(s):</h2>
          <div className="patronMain">
            {genChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Honary  */}
        {/* <div className="patron">
          <h2>Honorary Chair(s):</h2>
          <div className="patronMain">
            {honaryChar.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
      </div>

      {/* Conference chair  and technical program chair */}
      <div className="PaGeCommon">
        {/* Conference Chai  */}
        <div className="patron">
          <h2>Conference Chair(s):</h2>
          <div className="patronMain">
            {confChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Conference chair  and technical program chair */}
      <div className="PaGeCommon">
        {/* Conference Chai  */}
        <div className="patron">
          <h2>Organising Chair(s):</h2>
          <div className="patronMain">
            {organisingChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        </div>
        <div className="patron">
          <h2>Convener(s): </h2>
          <div className="patronMain">
            {convener.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="patron">
          <h2>Publication Chair(s):</h2>
          <div className="patronMain">
            {pubChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Technical program  */}
        <div className="patron">
          <h2>Technical Program Chair(s):</h2>
          <div className="patronMain">
            {techChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      

     

      {/* Publication Chair: and Publicity Chair*/}
      <div className="PaGeCommon">
        {/* Publicity Chair  */}
        <div className="patron">
          <h2>Publicity Chair(s):</h2>
          <div className="patronMain">
            {publicChair.map((a) => {
              return (
                <>
                  <div className="patrondata">
                    <h1>{a.h1}</h1>
                    <p>{a.p}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* Publication Chair  */}
        
      </div>

     
    </div>
  </>
  );
}

export default SCcards;
