import { useState } from "react";
import Preloader from "./Components/Preloader";

import { Footer } from "./Layout/Footer";
import NavBar from "./Layout/NavBar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Expereince from "./Sections/Expereince";
import Hero from "./Sections/Hero";
import { Projects } from "./Sections/Projects";
import Testimonial from "./Sections/Testimonial";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

     
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
    
    </>
  );
}

export default App;