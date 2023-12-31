import React, { useState } from "react";
import Draggable from "react-draggable";
import ReactDOM from "react-dom";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";

const DraggableModal = ({ data, onClose, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  return data?.open
    ? ReactDOM.createPortal(
        <Draggable
          position={position}
          onDrag={handleDrag}
          //   onStop={handleStop}
          bounds="body"
        >
          <div className="draggable-modal" onClick={(e) => e.stopPropagation()}>
            <div className="draggable-header">
              <p>Preview File</p>
              <IconButton
                onClick={() => {
                  onClose();
                }}
                disableFocusRipple
                aria-label="delete"
                size="small"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
            <div className="draggable-content" style={{ width: "400px" }}>
              <img
                style={{ width: "100%", height: "100%", maxHeight: "74vh" }}
                alt="bill"
                src={data?.file}
              />
            </div>
          </div>
        </Draggable>,
        document.body
      )
    : null;
};

export default DraggableModal;
