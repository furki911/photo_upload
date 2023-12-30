import React from "react";
import BillEdit from "../BillEdit/BillEdit";
import UploadFileDialogFooter from "./UploadFileDialogFooter";
import UploadFileDialogHeader from "./UploadFileDialogHeader";
import "./style.css";

const UploadFileDialog = (props) => {
  const { open, onClose, handleImageChange, saveImage, selectedImage } = props;

  if (open)
    return (
      <div className="DialogBackdrop" onClick={onClose}>
        <div
          className="MainDialog"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <UploadFileDialogHeader onClose={onClose} />

          <div style={{ padding: "44px 20px 40px" }}>
            <BillEdit
              selectedImage={selectedImage}
              handleImageChange={(file) => {
                handleImageChange(file);
              }}
            />
          </div>

          <UploadFileDialogFooter
            onSave={saveImage}
            onClose={onClose}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    );
};

export default UploadFileDialog;
