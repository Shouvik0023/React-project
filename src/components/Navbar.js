
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import logo from "../images/Texticon.png"
export default function Navbar(props) {

        //props is used to set the value to the components. 
    /*Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.*/

    return(<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-light`} >
    <div className="container-fluid">
     
     
      <h1 className="navbar-brand"  href="/">
        <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top bg-primary mx-2" style={{borderRadius: "5px"}}/>
       <a  href="/" className={`text-${props.mode==='primary'?'dark':'light'} navbar-brand mx-2`}>{props.title}</a> 
      </h1>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode==='primary'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link active text-${props.mode==='primary'?'dark':'light'}`} to="/about">{props.links}</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-info mx-2" type="submit">Search</button>
        </form> */}
        {/* <div className="d-flex">
          <div className="bg-primary mx-2" style={{height: "40px", width: "40px", borderRadius: "10px", border: "2px solid black"}}></div>
          </div> */}
        <button className="btn btn-warning  text-dark my-1" onClick={props.togglemode}>{props.text}</button></div>
      </div>
     
  </nav>);
}

Navbar.propTypes={title: PropTypes.string.isRequired,
                  links:PropTypes.string}
 
Navbar.defaultProps ={
  title: 'set title here',
  links: 'set links here'
}