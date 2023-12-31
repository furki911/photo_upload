import { useEffect, useMemo, useState } from "react";
import PNGIcon from "../../Assets/Images/pngIcon.png";
import JPGIcon from "../../Assets/Images/jpg.png";
import { dataURLtoFile } from "../../Utils/Conversions";
import "./style.css";

const File = ({ data }) => {
  const [currentfileDetail, setCurrentFileDetail] = useState();

  useEffect(() => {
    dataURLtoFile(data, `image${Math.floor(Math.random() * 90) + 10}.png`).then(
      (file) => {
        setCurrentFileDetail(file);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRelaventIconImage = useMemo(() => {
    const type = (currentfileDetail?.type?.match(/\/([a-zA-Z]+)/) ||
      [])[1]?.toLowerCase();

    switch (type) {
      case "jpeg":
      case "JPG": {
        return <img alt="file_Image" src={JPGIcon} />;
      }
      default:
        return <img alt="file_Image" src={PNGIcon} />;
    }
  }, [currentfileDetail?.type]);

  return (
    <div className="File">
      <div className="FImg">{getRelaventIconImage}</div>
      <div className="FDetails">
        <p className="FDName">{currentfileDetail?.name}</p>
        <p className="FDSize">
          {(currentfileDetail?.size / (1024 * 1024)).toFixed(2)} Mb
        </p>
        <p className="FDStatus">Local Storage</p>
      </div>
    </div>
  );
};

export default File;
