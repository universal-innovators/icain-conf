import "./AdCards.css";

const advcm = [
  { name: 'Prof. (Dr.) Omer Rana', info: 'Cardiff University, UK' },
  { name: 'Dr. Ahmed A. Elngar', info: 'Assistant professor Faculty of Computers and Information, Beni-Suef University, Beni Suef, Salah Salem Str., 62511 Egypt' },
  { name: 'Dr. Alina Miron', info: 'Brunel University, UK' },
  { name: 'Dr. Atta ur Rehman Khan', info: 'College of Engineering and IT, Ajman University, UAE' },
  { name: 'Dr. Catarina Moreira', info: 'Queensland University of Technology, Australia' },
  { name: 'Dr. Dusanka Boskovic', info: 'University of Sarajevo, Sarajevo, Bosnia' },
  { name: 'Dr. Frank H.F. Leung', info: 'Associate Professor Leader, BSc in IMT Programme, Department of Electronic and Information Engineering, Hong Kong Polytechnic University, Hung Hom, Kowloon, Hong Kong' },
  { name: 'Dr. Mamoona Humayun', info: 'University of Roehampton, United Kingdom' },
  { name: 'Dr. Milan Tuba', info: 'Sinergija University, Serbia' },
  { name: 'Dr. Naresh Kumar', info: 'PhD, Assistant Professor, Computer Science, DMPS, College of Arts and Sciences, University of Nizwa, Oman' },
  { name: 'Dr. Nilgün Şengöz', info: 'Burdur Mehmet Akif Ersoy University, Burdur/TURKEY' },
  { name: 'Dr. Nhu Gia Nguyen', info: 'Duy Tan University, Vietnam' },
  { name: 'Dr. Sandra Fernando', info: 'London Metropolitan University' },
  { name: 'Dr. Shikun Zhou', info: 'University of Portsmouth, UK' },
  { name: 'Dr. Stefania Tomasiello', info: 'University of Tartu, Estonia' },
  { name: 'Dr. Steve S.H. Ling', info: 'PhD SMIEEE Senior Lecturer School of Electrical, Mechanical and Mechatronic Systems, Centre for Health Technologies, Faculty of Engineering and IT University of Technology, Sydney' },
  { name: 'Dr. Uzzal Sharma', info: 'Don Bosco University, Assam, India' },
  { name: 'Prof. (Dr.) Belfin Robinson', info: 'University of North Carolina, USA' },
  { name: 'Prof. (Dr.) Chakchai So-In', info: 'Khon Kaen University, Thailand' },
  { name: 'Prof. (Dr.) Dharm Singh Jat', info: 'Namibia University of Science and Technology' },
  { name: 'Prof. (Dr.) Gerhard-Wilhelm Weber', info: 'Poznan University of Technology, Poland' },
  { name: 'Prof. (Dr.) Jens Bo Holm Nielson', info: 'Aalborg University, Denmark' },
  { name: 'Prof. (Dr.) João Manuel RS Tavares', info: 'Professor Associado com Agregação FEUP - DEMec' },
  { name: 'Prof. (Dr.) Jose Quenum', info: 'Namibia University of Science and Technology, Namibia' },
  { name: 'Prof. (Dr.) Jyoti Choudrie', info: 'University of Hertfordshire, UK' },
  { name: 'Prof. (Dr.) Ladjel Bellatreche', info: 'Poitiers University, France' },
  { name: 'Prof. (Dr.) M Shamim Kaiser', info: 'Jahangirnagar University, Bangladesh' },
  { name: 'Prof. (Dr.) Mike Hinchey', info: 'University of Limerick, Ireland' },
  { name: 'Prof. (Dr.) Mufti Mahmud', info: 'Computer Science, Nottingham Trent, UK' },
  { name: 'Prof. (Dr.) Punam Bedi', info: 'Senior Professor, Department of Computer Science, University of Delhi' },
  { name: 'Prof. (Dr.) R. Simon Sherratt', info: 'University of Reading, UK' },
  { name: 'Prof. (Dr.) Saurabh Singh', info: 'Dongguk University, South Korea' },
  { name: 'Prof. (Dr.) Sheng Lung Peng', info: 'National Taipei University of Business, Taiwan' },
  { name: 'Prof. (Dr.) Tatiana Kalganova', info: 'Brunel University London, UK' },
  { name: 'Prof. (Dr.) Tiziana Catarci', info: 'Sapienza University, Rome, Italy' },
  { name: 'Prof. (Dr.) Alfredo Cuzzocrea', info: 'University of Calabria, Italy' },
  { name: 'Prof. Roshan G. Ragel', info: 'University of Peradeniya, Sri Lanka' },
  { name: 'Prof(Dr.) Cenap Ozel', info: 'King Abdulaziz University, Saudi Arabia' },
  { name: 'Prof(Dr.) David Camacho', info: 'Associate Prof, Universidad Autonoma de Madrid, Spain' },
  { name: 'Prof(Dr.) Gerhard-Wilhelm Weber', info: 'Poznan University of Technology, Poland' },
  { name: 'Prof(Dr.) Huseyin Irmak', info: 'Cankiri Karatekin University, Turkey' },
  { name: 'Prof(Dr.) Joanna Jozefowska', info: 'Pro-Rector for Research, Poznan University of Technology' },
  { name: 'Prof(Dr.) Marius Balas', info: 'Aurel Vlaicu University of Arad, Romania' },
  { name: 'Prof. WSG Dr. Marzena Sobczak-Michałowska', info: 'Vice-Rector, WSG University, Bydgoszcz, Poland' }
];


function AdCards() {
  return (
    <>
      <div className="adCards">
        {advcm.map((a, i) => {
          return (
            <div className="adCard" key={i}>
              <h1>{a.name}</h1>
              <p>{a.info}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AdCards;
