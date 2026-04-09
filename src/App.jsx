import { useState } from "react";
import Preloader from "./Components/Preloader";
import CustomCursor from "./Components/CustomCursor";
import { Footer } from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Expereince from "./Sections/Experience";
import Hero from "./Sections/Hero";
import { Projects } from "./Sections/Projects";
import Testimonial from "./Sections/Testimonial";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="min-h-screen overflow-x-hidden">
          <NavBar />

          <main>
            <Hero />
            <About />
            <Projects />
            <Expereince />
            <Testimonial />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
