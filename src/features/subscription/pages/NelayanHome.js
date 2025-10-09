import Navbar from "../../../components/UserNavbar";
import HeroSection from "../components/Hero";
import Features from "../components/Features"
import Forum from "../components/Forum";
import Footer from "../../../components/Footer";

function NelayanHome(){
    return(
        <div>
            <Navbar />
            <HeroSection />
            <Features />
            <Forum />
            <Footer />
        </div>
    )
}

export default NelayanHome;