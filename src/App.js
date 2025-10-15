import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavRoute from "./Components/Navbar/NavRoute";

import HeaderMain from "./Components/Header/header";
import Hslides from "./Components/Hslides/Hslides";
// import FlagShip from "./Components/FlagShip/flagship";
import AboutConference from "./Components/AbtConference/abtConference";
// import ImpNotices from "./Components/ImpNotices/impNotices";
import Footer from "./Components/Footer/footer";

// About Section
import About from "./Components/AboutSection/about";
import AboutUniversal from "./Components/AboutSection/about1";

// Workshop Sessions
// import WorkShops from "./Components/WorkshopSection/workshop";

// Sponsorships Sessions
import SponserShip from "./Components/Sponsership Section/sponser";

// swiper
import "swiper/css/bundle";
import Conference from "./Components/ConferenceVenue/conference";
import Registrations from "./Components/RegistrationSection/registration";
import Call_for_international from "./Components/Papers/Call_for_International/Call_for_international";
import Call_for_papers from "./Components/Papers/Call_for_papers/Call_for_papers";
import Call_for_Special from "./Components/Papers/Call_for_Special/Call_for_Special";
import Paper_submission from "./Components/Papers/Paper_submission/Paper_submission";
import Downloads from "./Components/Downloads/Download";
import Awards from "./Components/AwardsSection/Award";
import SpecialCard from "./Components/SpecialSession/SpecialCard";
import Publication from "./Components/PublicationsSection/Publication";

// committes
import AdvisoryCmte from "./Components/CommitteeSection/AdvisoryCmte/Advisory";
// import IndustryCmte from "./Components/CommitteeSection/IndustryCmte/Industry";
import StCommittee from "./Components/CommitteeSection/SteeringCmte/Steering";
import TechnicalCmte from "./Components/CommitteeSection/TechnicalCmte/Technical";

// Previous Conference
import PreConf24 from "./Components/PreviousConferences/PC2024/preConf24";

// home and notice
import HoDateNotice from "./Components/Date_Notices/HomeDateNotice";
import Guide from "./Components/Guide/Guide";
import Policy from "./Components/Policy/Policy";
import Keynote from "./Components/KeyNoteSpeakers/Keynote";
import AcademicPartners from "./Components/AcademicParters/AcademicPartners";
import { useEffect } from "react";
import PrevKeynote from "./Components/KeyNoteSpeakers/PrevKeynote";
import InnostormInfo from "./Components/Ideathon/Ideathon";
import IndInvitedSpeakers from "./Components/Speakers/IndInvitedSpeakers";
import IndKeynoteSpeakers from "./Components/Speakers/IndKeynoteSpeakers";
import IndAcademicSpeakers from "./Components/Speakers/IndAcademicSpeakers";
import ElevatexAwards from "./Components/AwardsSection/Awardees";

// import Footerr from "./Components/Footer/Footerr";
function App() {
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Disable F12 (Developer Tools)
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Disable Ctrl+Shift+I/J/C/U
      if (
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <HeaderMain />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavRoute />}>
            <Route
              index
              element={
                <>
                  <Hslides />
                  {/* <FlagShip/> */}
                  <AboutConference />
                  <Keynote/>
                  <PrevKeynote/>
                  <AcademicPartners/>
                  <HoDateNotice />
                  <Footer />
                  {/* <Footerr /> */}
                </>
              }
            />
            <Route path="about" element={<About />} />

            <Route path="about1" element={<AboutUniversal />} />

            {/* <Route path='workshops' element={<WorkShops/>}/> */}

            <Route path="sponsorships" element={<SponserShip />} />

            <Route path="conferences" element={<Conference />} />

            <Route path="registrations" element={<Registrations />} />

            <Route
              path="callForInternational"
              element={<Call_for_international />}
            />

            <Route path="callForPapers" element={<Call_for_papers />} />

            <Route path="callForSpecial" element={<Call_for_Special />} />

            <Route path="paperSubmissions" element={<Paper_submission />} />

            <Route path="downloads" element={<Downloads />} />

            <Route path="guide" element={<Guide />} />

            <Route path="awards" element={<Awards />} />
            <Route path="awardees" element={<ElevatexAwards />} />
            <Route path="innostorm" element={<InnostormInfo />} />

            <Route path="spsessions" element={<SpecialCard />} />

            <Route path="publications" element={<Publication />} />
            <Route path="invited-speakers" element={<IndInvitedSpeakers />} />
            <Route path="keynote-speakers" element={<IndKeynoteSpeakers />} />
            <Route path="academic-speakers" element={<IndAcademicSpeakers />} />

            {/* Committes  */}
            <Route path="steerings" element={<StCommittee />} />
            <Route path="technicals" element={<TechnicalCmte />} />
            <Route path="advisorys" element={<AdvisoryCmte />} />
            <Route path="advisorys" element={<AdvisoryCmte />} />
            <Route path="policy" element={<Policy />} />
            {/* <Route path='industrys' element={<IndustryCmte/>}/> */}

            {/* Previous Conferences  */}
            {/* <Route path='pcConferences22' element={<PreConf22/>}/>
<Route path='pcConferences21' element={<PreConf21/>}/>
<Route path='pcConferences20' element={<PreConf20/>}/>
<Route path='pcConferences19' element={<PreConf19/>}/>
<Route path='pcConferences18' element={<PreConf18/>}/> */}
<Route path='pcConferences24' element={<PreConf24/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

      {/*   
<HeaderMain/>
<Hslides/>
<FlagShip/>
<AboutConference/>
<div className='Date_Notices'
 style={
  {display:"grid",
  gridTemplateColumns:"repeat(2,1fr)",
  width:"98%", 
  margin:"auto",
  justifyContent:"center",
  margin:"4vh 0"
}
 
 }
>
<ImpDate/>
<ImpNotices/>
</div>
 <Footer/> */}
    </>
  );
}

export default App;
