import './App.scss';
import './index.scss';

import banner from "./images/banner.jpg";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div className="main-wrapper">
      <Header/>
      <div className="container">
        <div className="wrapper">
          <Sidebar/>
          <div className="content">
            {/* <Content /> */}
            {/* main banner for all pages */}
            <div className="banner">
              <img src={banner} alt="banner" />

            </div>
          <Home/>
            {/* other inner components */
            /* Home
              About
              Photos
              Events
              etc.
          */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
