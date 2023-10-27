import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import AudiophileDetails from "./pages/AudiophileDetails.jsx";
import NewsletterDetails from "./pages/NewsletterDetails.jsx";
import RestCountriesDetails from "./pages/RestCountriesDetails.jsx";
import ContactMe from "./pages/ContactMe";
function App() {
  return (
    <div className="font-PublicSans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/AudiophileDetails" element={<AudiophileDetails />} />
        <Route path="/NewsletterDetails" element={<NewsletterDetails />} />
        <Route
          path="/RestCountriesDetails"
          element={<RestCountriesDetails />}
        />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
