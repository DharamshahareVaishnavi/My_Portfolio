import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid text-light py-5 bg-dark">
        <div className="row justify-content-between">
          <div className="col-sm-4 ">
            <h5>Copyright @ 2022 React-Portfolio. All Rights Reserved</h5>
          </div>
          <div className="col-sm-3">
            <h5>Designed by <span className='text-warning'>Vaishnavi Dharamshahare</span></h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer