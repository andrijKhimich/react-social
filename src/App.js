import './App.scss';
import './index.scss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content';

const App = () => {
  return (
    <div className="main-wrapper">
      <Header/>
      <div className="container">
        <div className="wrapper">
          <Sidebar/>
          <Content />
          
        </div>
      </div>

    </div>
  );
}

export default App;
