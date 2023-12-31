// DraggableResizableModal.js
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import ExpandIcon from "@mui/icons-material/Expand";
import "react-resizable/css/styles.css";
import "./style.css";
import { Stack } from "@mui/system";

const DraggableResizableModal = ({ data, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isMinimized, setIsMinimized] = useState(false);

  const handleDrag = (e, ui) => {
    setPosition({ x: ui.x, y: ui.y });
  };

  const handleResize = (e, { size }) => {
    setSize(size);
  };

  const minimizeModal = () => {
    setIsMinimized(true);
    setPosition({ x: 0, y: 0 });
  };
  const maximizeModal = () => {
    setIsMinimized(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    maximizeModal();
  }, [data?.file]);

  return data?.open ? (
    <Draggable
      position={position}
      onDrag={handleDrag}
      bounds="body"
      handle=".draggable-header"
    >
      <div
        className={`draggable-modal ${isMinimized ? "minimized" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="draggable-header">
          <p>
            Preview File{" "}
            {isMinimized ? (
              <span>( Click on Expand Icon )</span>
            ) : (
              (size?.width > 360 || !size?.width) && (
                <span>( resize from bottom right corner )</span>
              )
            )}
          </p>
          <Stack direction="row">
            <IconButton
              onClick={isMinimized ? maximizeModal : minimizeModal}
              disableFocusRipple
              aria-label="delete"
              size="small"
              style={{ marginRight: ".2rem" }}
            >
              {!isMinimized ? (
                <MinimizeIcon fontSize="small" />
              ) : (
                <ExpandIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton
              onClick={onClose}
              disableFocusRipple
              aria-label="delete"
              size="small"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>
        </div>
        {!isMinimized && (
          <Resizable
            width={size.width}
            height={size.height}
            onResize={handleResize}
            minConstraints={[200, 200]}
            maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]}
          >
            <div
              className="draggable-content"
              style={{ width: `${size.width}px`, height: `${size.height}px` }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "74vh",
                  objectFit: "contain",
                }}
                alt="FileImg"
                src={data?.file}
              />
            </div>
          </Resizable>
        )}
      </div>
    </Draggable>
  ) : null;
};

export default DraggableResizableModal;
