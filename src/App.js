import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
import Navigation from "./components/Shared/Navigation/Navigation";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
