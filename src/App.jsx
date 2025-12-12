import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import SejaVoluntario from "./page/sejaVoluntario/SejaVoluntario";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import "./globalStyler.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<SejaVoluntario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
