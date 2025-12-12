import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home/home";
import SejaVoluntario from "./page/sejaVoluntario/sejaVoluntario";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
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
