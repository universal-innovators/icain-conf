import "./TecCards.css";

const tpcm = [
  { name: "Dr. Michael Baron", info: "Associate Professor, Curtin University, Melbourne, Australia" },
  { name: "Dr. Dac-Nhuong Le", info: "Haiphong University, Vietnam" },
  { name: "Dr. Andri Pranolo", info: "Universitas Ahmed Dahlan, Indonesia" },
  { name: "Dr. Brojo Kishore Mishra", info: "Associate Professor, CV Raman College of Engineering, Bhubaneshwar" },
  { name: "Arvind Kumar Bhardwaj", info: "Capgemini, Test Lead, Texas, USA" },
  { name: "Dr. Enuouch Suleiman", info: "Bauchi State Govt. of Nigeria, Nigeria" },
  { name: "Dr. Hamid Reza Boveiri", info: "Sama College, IAU, Shoushtar Branch, Khuzestan, Iran" },
  { name: "Dr. Jafar A. Alzubi", info: "Al-Balqa Applied University, Salt - Jordan" },
  { name: "Dr. Maqbool Khan", info: "Assistant Professor, Pak-Austria Fachhochschule-Institute of Applied Sciences and Technology, Mang, Haripur, Pakistan and Adjunct Researcher, Software Competence Center Hagenberg GmbH, Softwarepark, Hagenberg, Linz, Austria" },
  { name: "Dr. A.K. Singh", info: "Computer Engineering Department, NIT Kurukshetra" },
  { name: "Dr. Akshi Kumar", info: "Director, Associate Professor, Goldsmith University of London, UK" },
  { name: "Dr. Mamoona Humayun", info: "Assistant Professor, Jouf university Al-jouf, Saudi Arabia" },
  { name: "Dr. Mamoona Humayun", info: "Department of Information Systems, College of Computer and Information Sciences, Jouf University, Sakaka, Saudi Arabia" },
  { name: "Dr. Nicu Bizon", info: "University of Pitesti, Romania" },
  { name: "Dr. Nhu Gia Nguyen", info: "Duy Tan University, Vietnam" },
  { name: "Dr. Onuma Suphattanakul", info: "Universiti Utara, Malaysia" },
  { name: "Dr. Pavel Kromer", info: "VSB Technical University of Ostrava" },
  { name: "Dr. Prigan", info: "University of North Texas, USA" },
  { name: "Dr. Sahil Garg", info: "École de technologie supérieure, Université du Québec, Montreal, Canada" },
  { name: "Dr. Sheikh Tahir Bakhsh", info: "Department of Computer Science, Cardiff School of Technologies, Llandaff Campus" },
  { name: "Dr. Siddhartha Bhattacharyya", info: "VSB Technical University of Ostrava, Czech Republic" },
  { name: "Dr. S.B. Goyal", info: "Director, City University of Malaysia" },
  { name: "Dr. Surbhi Bhatiakhan", info: "University of Salford, UK" },
  { name: "Prof. WSG Dr. Eng. Zdzislaw Polkowski", info: "WSG University, Bydgoszcz, Poland" },
  { name: "Jan Valicek", info: "Institute of Technology and Business in České Budějovice" },
  { name: "Lakshmanan Sethu", info: "Technical Account Manager (AI/ML), Google, California, USA" },
  { name: "Avinash Reddy Pothu", info: "Principal Application Security Engineer, Frisco, TX, USA" },
  { name: "Prof. (Dr.) Amar Mohapatra", info: "Professor, IGDTUW, Delhi, India" },
  { name: "Rajesh Sura", info: "Head of Data Engineering and Analytics, Amazon, USA" },
  { name: "Prof. (Dr.) Arun Sharma", info: "Professor, IGDTUW, Delhi, India" },
  { name: "Prof. (Dr.) Celia Shahnaz", info: "BUET, Bangladesh" },
  { name: "Prof. (Dr.) Gabriela Raducan", info: "Senior Research Fellow, La Trobe Innovation and Entrepreneurship Foundry" },
  { name: "Prof. (Dr.) Huynh Thanh Binh", info: "Hanoi University of Science and Technology, Vietnam" },
  { name: "Prof. (Dr.) Isabel de la", info: "University of Valladolid, Spain" },
  { name: "Prof. (Dr.) Joanna Paliszkiewkz", info: "Director, SGGN, Warsaw, Poland" },
  { name: "Prof. (Dr.) Kapil Sharma", info: "Professor, Delhi Technical University, Delhi" },
  { name: "Prof. (Dr.) Kirti Tyagi", info: "Inha University, Tashkent" },
  { name: "Prof. (Dr.) Manuel Cardona", info: "Universidad Don Bosco EI Salvador" },
  { name: "Prof. (Dr.) Oana Gaman", info: "Biomedical Branch, Romania" },
  { name: "Ankush Sanjay Mahajan",info: "Senior Tech Project Manager, Pacific Gas and Electricity, Seattle, Washington, United States"},
  { name: "Prof. (Dr.) P S Rana", info: "Professor, Thapar University, Punjab, India" },
  { name: "Prof. (Dr.) Shelly Sachdeva", info: "NIT Delhi, Delhi" },
  { name: "Prof. (Dr.) Srinath Doss", info: "Botho University, Botswana" },
  { name: "Prof. (Dr.) Swagatam Das", info: "Professor, Indian Statistical Institute, Kolkata, India" },
  { name: "Prof. Dr. Bal Virdee", info: "London Metropolitan University" },
  { name: "Prof. (Dr.) V.C. Pandey", info: "Director, HMRITM, Delhi" },
  { name: "Dr. Sangeeta Kumari", info: "Bennett University (Times Group), Greater Noida, Uttar Pradesh, India" },
  { name: "Dr. Balavignesh Vemparala", info: "R&D Engineer II, ANSYS Inc., USA" }
];


function TecCards() {
  return (
    <div className="tecCards">
      <div className="tecCard">
        {tpcm.map((a, i) => {
          return (
            <div className="tecPara" key={i}>
              <h3>{a.name}</h3>
              <p>{a.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TecCards;



