import React from 'react'

function Footer() {
  return (
<footer className="page-footer font-small bg-gradient-to-b from-gray-800 to-black text-white border-t-2 border-gray-700">
  {/* Footer Elements */}
  <div className="container pl-5">
    {/* Grid row*/}
    <div className="row">
      {/* Grid column */}
      <div className="col-md-12 py-5">
        <div className="d-flex justify-content-center">
          {/* Facebook */}
          <a className="fb-ic icons" style={{cursor: 'pointer'}} href='https://www.facebook.com/shuvayu.patra?mibextid=ZbWKwL'
          target='_blank' rel="noreferrer" >
            <i className="fab fa-facebook-f fa-xl white-text mr-md-5 mr-3"> </i>
          </a>
          {/* Github */}
          <a className="gi-ic icons" style={{cursor: 'pointer'}}
          href='https://github.com/Shuvayu-Patra'
          target='_blank' rel="noreferrer">
            <i className="fab fa-github fa-xl white-text mr-md-5 mr-3"> </i>
          </a>
          {/*Linkedin */}
          <a className="li-ic icons" style={{cursor: 'pointer'}}
          href='https://www.linkedin.com/in/shuvayu-patra-2506b8221/'
          target='_blank' rel="noreferrer">
            <i className="fab fa-linkedin-in fa-xl white-text mr-md-5 mr-3"> </i>
          </a>
          {/*Instagram*/}
          <a className="ins-ic icons" style={{cursor: 'pointer'}}
          href='https://instagram.com/ami_shuvayu?igshid=MXJ4ZmJuaWhueDE5aw=='
          target='_blank' rel="noreferrer">
            <i className="fab fa-instagram fa-xl white-text mr-md-5 mr-3"> </i>
          </a>
        </div>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row*/}
    <div className="footer-copyright text-center pb-5" style={{ fontFamily: "'Montserrat', sans-serif" }}>© 2020 Copyright:
    <a href="#home" style={{color:'inherit'}} id='logo'> Shuvayu Patra Portfolio</a>
  </div>
  </div>
  {/* Footer Elements */}
  {/* Copyright */}
  {/* <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="/"> Shuvayu Patra portfolio</a>
  </div> */}
  {/* Copyright */}
</footer>

  )
}

export default Footer
