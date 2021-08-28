import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import i18n from "../../i18n";
import Flag from 'react-world-flags'


export default function Topbar({ menuOpen, setMenuOpen }) {

  const changeLanguage = (ln) =>{
    return () => {
      i18n.changeLanguage(ln);
    }
  }

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <HomeIcon href="#intro" style={{ color: 'white' }}/>
          <a href="#intro" className="logo" style={{ color: 'white' }} >
            home
          
          </a>
          
          <div className="itemContainer">
            <Person className="icon" style={{ color: 'white' }} />
            <span>+995 555 555 555</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" style={{ color: 'white' }}/>
            <span>shalva@gmail.com</span>
          </div>

          <div className="buttons">
            <span>
              
              <div className="flags">
              <Flag className="flagen" onClick={changeLanguage("en")} code="gb" height="20"/>
              
              
              <Flag className ="flaggeo" onClick={changeLanguage("geo")} code="ge" height="20"/>
              </div>
              
            </span>
          </div>

        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
