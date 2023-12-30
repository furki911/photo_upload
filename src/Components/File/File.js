import PNGIcon from "../../Assets/Images/pngIcon.png";
import "./style.css";

const File = () => (
  <div className="File">
    <div className="FImg">
      <img alt="file_Image" src={PNGIcon} />
    </div>
    <div className="FDetails">
      <p className="FDName">File One</p>
      <p className="FDSize">2 Mb</p>
      <p className="FDStatus">Local Storage</p>
    </div>
  </div>
);

export default File;