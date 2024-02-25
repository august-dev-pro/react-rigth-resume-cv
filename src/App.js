import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Education from "./components/Education";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./css/main.css";
import "./css/aos.css";
import "./css/bootstrap.min.css";
import "./css/font-awesome/css/all.min.css";
import "./scripts/main.js";
import "./scripts/aos.js";
import "./scripts/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App" id="top">
      <Header />
      <div class="page-content">
        <div class="container">
          <div class="cover shadow-lg bg-white">
            <Cover />
            <About />
            <hr class="d-print-none" />
            <Skills />
            <hr class="d-print-none" />
            <WorkExperience />
            <hr class="d-print-none" />
            <div class="page-break"></div>
            <Education />
            <hr class="d-print-none" />
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
