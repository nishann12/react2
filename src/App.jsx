import Body from "./Body";
import Header from "./header";
import SideNav from "./SideNav";
import Footer from './footer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="d-flex flex-column vh-100">
    <Header />
    <div className="d-flex flex-grow-1">
      <div className="col-2">
        <SideNav />
      </div>
      <div className="col-10">
        <Body />
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default App;
