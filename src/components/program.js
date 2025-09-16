import "./program.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

export default function Program() {
  return (
    <div>
      <h1>Our Programs</h1>
      <div className="program-container">

        <div className="program-item">
          <FontAwesomeIcon icon={faLaptopCode} size="5x"  />
          <div className="program-title">Computer Science & Engineering</div>
        </div>

        <div className="program-item">
          <FontAwesomeIcon icon={faMicrochip} size="5x" />
          <div className="program-title">Artificial Intelligence & Machine Learning</div>
        </div>

        <div className="program-item">
          <FontAwesomeIcon icon={faServer} size="5x"/>
          <div className="program-title">Data Science</div>
        </div>

        <div className="program-item">
          <FontAwesomeIcon icon={faBolt} size="5x"/>
          <div className="program-title">Electronic & Telecommunication</div>
        </div>

        <div className="program-item">
          <FontAwesomeIcon icon={faHouseChimney} size="5x"/>
          <div className="program-title">Civil Engineering</div>
        </div>

        <div className="program-item">
          <FontAwesomeIcon icon={faFlask} size="5x"/>
          <div className="program-title">Chemical Engineering</div>
        </div>
        
        
      </div>
    </div>
  );
}