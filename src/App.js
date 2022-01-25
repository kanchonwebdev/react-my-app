import { Routes, Route } from "react-router-dom";
import Home from './component/home';
import About from './component/about';
import Service from './component/service';
import Review from './component/review';
import Contact from './component/contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeCo />}></Route>
        <Route path='/about' element={<AboutCo />}></Route>
        <Route path='/service' element={<ServiceCo />}></Route>
        <Route path='/review' element={<ReviewCo />}></Route>
        <Route path='/contact' element={<ContactCo />}></Route>
      </Routes>
    </div>
  );
}

export default App;

function HomeCo() {
  return (
    <div>
      <Home />
    </div>
  );
}

function AboutCo() {
  return (
    <div>
      <About />
    </div>
  );
}

function ServiceCo() {
  return (
    <div>
      <Service />
    </div>
  );
}

function ReviewCo() {
  return (
    <div>
      <Review />
    </div>
  );
}

function ContactCo() {
  return (
    <div>
      <Contact />
    </div>
  );
}




