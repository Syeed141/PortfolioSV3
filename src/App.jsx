import NavBar from "./Layout/NavBar"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Expereince from "./Sections/Expereince"
import Hero from "./Sections/Hero"
import Project from "./Sections/Project"
import Testimonial from "./Sections/Testimonial"


function App() {
 
  return (
    <div className="min-h-screen overflow-x-hidden">
     <NavBar></NavBar>
    
     <main>
      <Hero> </Hero>
      <About> </About>
      <Project></Project>
    <Expereince></Expereince>
    <Testimonial> </Testimonial>
    <Contact></Contact>
     </main>
    </div>
  )
}

export default App
