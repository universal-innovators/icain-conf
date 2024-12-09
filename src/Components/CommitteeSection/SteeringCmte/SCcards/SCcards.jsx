import "./Scards.css";

function SCcards() {
  let genChair = [
    // {
    //   h1: " Prof. Giancarlo Fortino",
    //   p: "(Università della Calabria, Italy)",
    // },
    // {
    //   h1: "Prof. Dr. Karim Ouazzane",
    //   p: "(London Metropolitan University)",
    // },
    // {
    //   h1: " Prof. Aboul Ella Hassanien",
    //   p: "(College of Business Administration, Kuwait University, Kuwait)",
    // },
    // {
    //   h1: " Oscar Castillo",
    //   p: "(Tijuana Institute Technology, Tijuana, Mexico )",
    // },
    // {
    //   h1: "Prof. Sergio Duarte Correia",
    //   p: "(Polytechnic Institute of Portalegre, Portugal)",
    // },
    {
      h1: "Prof. Dr. Bal Virdee",
      p: "London Metropolitan University"
    },
    {
      h1: "Prof Punam Bedi",
      p: "Department of Computer Science, University of Delhi",
    },

  ];


  let patron = [
    {
      h1: " Mr. Sunil Kumar CT",
      p: "Director -Academics, University of Stirling RAK Campus",
    },
    {
      h1: "Ms. Shanthi  Rajan",
      p: "Director-Internal QA Dept. , Director-Scottish Qualification Authority, RAK Centre, University of Stirling RAK Campus",
    },
    {
      h1: "Dr. Abhinanda Barman",
      p: "Director-University Communication and Strategic Alliance, University  of Stirling RAK Campus"
    },
    {
      h1: " Mr. Mobin Khtib",
      p: "Director-Human Resources, University of Stirling RAK Campus",
    },
    {
      h1: "Mr. William Alistair McQueer",
      p: "Programme Director - Computing Science, University of Stirling RAK Campus",
    },
    {
      h1: "Dr. Sanman Jain",
      p: "Programme Director -  Accounting & Finance, University of Stirling RAK Campus",
    },
    {
      h1: "Dr. Nikhil V.P",
      p: " Programme Director- Management, University of Stirling, RAK Campus",
    },
    // {
    //   h1: " Prof. Madhu Pruthi",
    //   p: "(Principal, Keshav Mahavidyalaya, University of Delhi)",       
    // }
  ]
  let chiefPatron = [

    {
      h1: " Dr. Richa Arora",
      p: "COO and Head of Institution (HOI), University of Stirling RAK Campus, UAE",
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
      h1: "Prof. Isabel DE LA TORRE DÍEZ",
      p: "University of Valladolid, Spain",
    },
    {
      h1: "Dr. João Manuel R. S. Tavares",
      p: "Universidade do Porto (FEUP), PORTUGAL",
    },

    {
      h1: "Prof. Joel J P C Rodrigues",
      p: "National Institute of Telecommunications (Inatel), Brazil",
    },
{
      h1: "Dr. Narina Thakur",
      p: "Assistant Prof.  CS and SE , HEAD - Research Innovation Committe, University of Stirling RAK Campus",
    },
    {
      h1: "Dr.  Shamik Palit",
      p: "Associate Prof.  CS and SE , HEAD - Corporate Outreach Committe, University of Stirling RAK Campus",
    },
  ];

  let techChair = [
    {
      h1: "Jan Valicek",
      p: "Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Marta Harnicarova",
      p: "Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Dr. Ahmed J. Obaid",
      p: "University of Kufa, Iraq",
    },
    {
      h1: "Dr. Mamoona Humayun",
      p: "Department of Information Systems, College of Computer and Information Sciences, Jouf University, Sakaka, Saudi Arabia",
    },
    {
      h1: "Dr. Momina Shaheen",
      p: "Department of Computing, School of Arts Humanities and Social Sciences, University of Roehampton, London SW15 5PJ, United Kingdom",
    },
    {
      h1: "Dr. Richa Sharma",
      p: "London Metropolitan University",
    },
    // {
    //   h1: "Prof. Giancarlo Fortino",
    //   p: "(Università della Calabria, Italy)",
    // },
    // {
    //   h1: "Prof. Sanjay Mishra",
    //   p: "(Covenant University, Nigeria)",
    // },

    // {
    //   h1: "Valentina Emilia Balas",
    //   p: "(Aurel Vlaicu University of Arad, Romania)",
    // },



  ];
  let organisingChair = [

    // {
    //   h1: "Dr. Ashish Khanna",
    //   p: "(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi.)",
    // },
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
      h1: "Prof. Abhishek Swaroop",
      p: "Bhagwan Parshuram Institute of Technology, India",
    },
    {
      h1: "Prof. Sérgio Duarte Correia",
      p: "Polytechnic Institute of Portalegre, Portugal.",
    },
    {
      h1: "Dr Pancham Shukla",
      p: "Imperial College London",
    },
    // {
    //   h1: "Prof. P. Sanjeevi kumar",
    //   p: "(Aarhus University, Herning, Denmark)",
    // },
  ];

  let coConvener = [




  ];

  let publicChair = [
    // {
    //   h1: "Dr. Prayag Tiwari",
    //   p: "(Aalto University, Finland)",
    // },


    {
      h1: "Dr Marta Harničárová",
      p: "Department of Mechanical Engineering, Faculty of Technology, Institute of Technology and Business in České Budějovice",
    },

    {
      h1: "Dr. Akshi Kumar",
      p: "Director, Department of Computing, Goldsmiths University of London",
    },
    {
      h1: "Dr. Gulshan Shrivastava",
      p: "Galgotia University, Gr. Noida, India",
    },


    {
      h1: "Dr. Sandra Fernando",
      p: "London Metropolitan University",
    },
    {
      h1: "Prof. Mete YAĞANOĞLU",
      p: "Ataturk University, Department of Computer Engineering, Turkey",
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
    // {
    //   h1: "Dr. Deepak Gupta",
    //   p: "(Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi,India)",
    // },
    {
      h1: "Roman Danel",
      p: "Institute of Technology and Business in České Budějovice"
    },
    {
      h1: "Moolchand Sharma",
      p: "Maharaja Agrasen Institute of Technology (GGSIPU), New Delhi",
    }

    // {
    //   h1: "Dr. Utku Kose",
    //   p: "(Suleyman Demirel University, Isparta, Turkey)",
    // },
    // {
    //   h1: "Dr. Jameel Ahamed",
    //   p: "(Maulana Azad National Urdu University (MANUU), Hyderabad, India)",
    // },

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
