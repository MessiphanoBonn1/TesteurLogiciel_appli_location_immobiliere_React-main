import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Logements from "./Pages/Logements.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logement/:id" element={<Logements />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
