import { Routes, Route} from "react-router-dom";
import Header from "@header/Header";
import Home from "@pages/Home";
import Footer from "@footer/Footer";

function App(){
      return <>
      <Header/>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hi" element={<h1>Hi</h1>}/>
      </Routes>
      <Footer/>
      </>
}

export default App;
