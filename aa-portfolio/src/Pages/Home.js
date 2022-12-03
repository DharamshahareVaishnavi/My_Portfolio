import React, { useContext } from 'react'
import { data } from '../Store'



const Home = () => {

  let { mode, setMode } = useContext(data)
  return (
    <>
    <div id='Home'>
    <div className={`container-fluid bg-${mode ? 'dark' : 'light'}`} style={{ marginTop: "60px" }}>
        <div className="row align-items-center">
          <div className={`col-lg-6 text-${mode ? 'light' : 'dark'}`}>
            <img src="images/smallscreen.24178486-removebg-preview.png" alt="" width="100%" />
          </div>
          <div className={`col-lg-6 text-${mode ? 'light' : 'dark'}`}>
            <h1>FRONT-END DEVELOPER</h1>
            <p>A front end developer has one general responsibility: to ensure that website visitors can easily interact with the page. They do this through the combination of design, technology and programming to code a website's appearance, as well as taking care of debugging.</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Home