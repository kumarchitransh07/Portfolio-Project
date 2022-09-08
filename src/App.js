import Hero from "./Home/Hero/Hero";
import About from "./Home/About/About";
import Projects from "./Home/Projects/Projects";
import Experience from "./Home/Experience/Experience";
import VoluntaryExperience from "./Home/Experience/VoluntaryExperience";
import Support from "./Home/Support/Support";
import Contact from "./Home/Contact/Contact";
import Footer from "./Home/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [details, setDetails] = useState();
  const [projects, getProjects] = useState();
  const [experience, fetchExperience] = useState();
  const [voluntaryExperience, fetchVoluntaryExperience] = useState();

  if (details == null || projects == null || experience == null) {
    return (
      <div>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <VoluntaryExperience />
        <Support />
        <Contact />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Hero details={details} />
        <About details={details} />
        <Projects projectData={projects} />
        <Experience experienceDetails={experience} />
        <VoluntaryExperience experienceDetails={voluntaryExperience} />
        <Support />
        <Contact details={details} />
        <Footer />
      </div>
    );
  }
}

export default App;
