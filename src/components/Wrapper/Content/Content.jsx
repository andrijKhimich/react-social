import banner from "./images/banner.jpg"

const Content = () => {
  return (
    <div className="content">

      {/* main banner for all pages */}
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>

      {/* other inner components */
    /* Home
        About
        Photos
        Events
        etc.
     */}

    </div>
  )

}

export default Content;