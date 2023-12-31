import * as React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditFileDialog from "../EditFileDialog/EditFileDialog";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CaptureImage from "../CaptureImage";
import "./style.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const UploadFileDialog = ({ open, onClose, saveImage, setSelectedImage }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [cameraCapture, setCameraCapture] = React.useState(false);

  const handleFileChange = (event) => {
    const fileFormatRegex = /(png|jpe?g|pdf|webp)/i;

    let file = event?.target?.files[0] || event;

    if (fileFormatRegex.test(file?.type)) {
      setIsEditDialogOpen(true);

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedFile(reader.result);
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
      onClose();
    } else {
      alert("wrong format! Try with Image or Pdf");
    }
  };

  const openCameraCapture = () => {
    setCameraCapture(true);
  };
  const closeCameraCapture = () => {
    setCameraCapture(false);
  };

  return (
    <>
      {open && (
        <div className="DialogBackdrop" onClick={onClose}>
          <div
            className="MainDialog"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="MainDialogHeader">
              <p className="MainDialogHeader__Title">Upload File</p>
              <IconButton
                onClick={() => {
                  closeCameraCapture();
                  onClose();
                }}
                disableFocusRipple
                aria-label="delete"
                size="small"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
            {!cameraCapture ? (
              <div
                style={{
                  width: "20rem",
                  padding: "3rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  onChange={handleFileChange}
                >
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>

                <IconButton
                  aria-label="camera"
                  size="large"
                  onClick={openCameraCapture}
                >
                  <CameraAltIcon />
                </IconButton>
              </div>
            ) : (
              <div style={{ width: "400px", height: "400px" }}>
                <CaptureImage
                  onClick={handleFileChange}
                  onClose={closeCameraCapture}
                />
              </div>
            )}
          </div>
        </div>
      )}

      <EditFileDialog
        open={isEditDialogOpen}
        onClose={() => {
          setIsEditDialogOpen(false);
          setSelectedFile(null);
        }}
        handleImageChange={handleFileChange}
        saveImage={saveImage}
        selectedImage={selectedFile}
      />
    </>
  );
};

export default UploadFileDialog;
