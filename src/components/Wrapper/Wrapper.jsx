import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content';
import "./wrapper.css";
const Wrapper = () => {
  return (
    <div className="container">
      <main className="wrapper">
        <Sidebar/>
        <Content/>
      </main>
    </div>

  )
}

export default Wrapper;