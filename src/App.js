import './App.scss';
import './index.scss';

import banner from "./images/banner.jpg";
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from "./components/Home/Home";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
// import { Route, Routes } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header />
        <div className="container">
          <div className="wrapper">
            <Sidebar />
            <div className="content">
              {/* <Content /> */}

              {/* main banner for all pages */}
              <div className="banner">
                <img src={banner} alt="banner" />
              </div>
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/news" element={<News />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
