import { useRef, useState } from "react";
import { IconButton, Stack } from "@mui/material";
import { dataURLtoFile } from "../../Utils/Conversions";
import Webcam from "react-webcam";
import CameraIcon from "@mui/icons-material/Camera";
import ReplayIcon from "@mui/icons-material/Replay";
import DoneIcon from "@mui/icons-material/Done";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./style.css";

const CaptureImage = ({ onClick, onClose }) => {
  const camRef = useRef();
  const [capturedImage, setCapturedImage] = useState();

  const captureImage = () => {
    setCapturedImage(camRef?.current?.getScreenshot());
  };

  const proceedCapturedImage = () => {
    if (capturedImage) {
      dataURLtoFile(
        capturedImage,
        `image${Math.floor(Math.random() * 90) + 10}.png`
      ).then((file) => onClick(file));
    }
    onClose();
  };

  return (
    <div className="WebcamContainer">
      {capturedImage ? (
        <img src={capturedImage} alt="img" />
      ) : (
        <Webcam ref={camRef} />
      )}

      <div className="WebcamContainerActions">
        {capturedImage ? (
          <Stack direction="row">
            <IconButton size="large" color="primary" onClick={onClose}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              size="large"
              color="secondary"
              onClick={() => {
                setCapturedImage(false);
              }}
            >
              <ReplayIcon />
            </IconButton>
            <IconButton
              size="large"
              color="success"
              onClick={proceedCapturedImage}
            >
              <DoneIcon />
            </IconButton>
          </Stack>
        ) : (
          <IconButton size="large" onClick={captureImage}>
            <CameraIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default CaptureImage;
