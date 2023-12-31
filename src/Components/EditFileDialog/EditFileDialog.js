import React from "react";
import BillEdit from "../BillEdit/BillEdit";
import EditFileDialogFooter from "./EditFileDialogFooter";
import EditFileDialogHeader from "./EditFileDialogHeader";
import "./style.css";

const EditFileDialog = (props) => {
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
          <EditFileDialogHeader onClose={onClose} />

          <div style={{ padding: "44px 20px 40px" }}>
            <BillEdit
              selectedImage={selectedImage}
              handleImageChange={(file) => {
                handleImageChange(file);
              }}
            />
          </div>

          <EditFileDialogFooter
            onSave={saveImage}
            onClose={onClose}
            selectedImage={selectedImage}
          />
        </div>
      </div>
    );
};

export default EditFileDialog;
