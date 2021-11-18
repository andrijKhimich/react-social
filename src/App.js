import './App.css';
import './index.css';

import Header from './components/Header/Header';
import Wrapper from './components/Wrapper/Wrapper';

const App = () => {
  return (
    <div className="main-wrapper">
      <Header/>
      <Wrapper/>
    </div>
  );
}

export default App;
