import Navbar from "../../../components/LandingPageNavbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Service";
import Team from "../components/Team";
import Feedback from "../components/Feedback";
import Subscribe from "../components/Subscribe";
import Forum from "../components/Forum";
import Footer from "../../../components/Footer"


function Home() {
  return (
    <div> 
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Feedback />
      <Subscribe />
      <Forum />
      <Footer />
    </div>
  );
}

export default Home;
