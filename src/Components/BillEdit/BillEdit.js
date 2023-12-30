import * as markerjs2 from "markerjs2";
import { useCallback, useEffect, useRef } from "react";
import { dataURLtoFile } from "../../Utils/Conversions";
import "./style.css";

const BillEdit = ({ handleImageChange, selectedImage }) => {
  const sampleImageRef = useRef(null);

  const saveEditedImage = useCallback(
    (event) => {
      dataURLtoFile(
        event.dataUrl,
        `image${Math.floor(Math.random() * 90) + 10}.png`
      ).then((file) => {
        handleImageChange(file);
      });
    },
    [handleImageChange]
  );

  const showMarkerArea = useCallback(
    (target) => {
      const markerArea = new markerjs2.MarkerArea(target);
      markerArea.addEventListener("render", (event) => {
        target.src = event.dataUrl;
        saveEditedImage(event);
      });
      markerArea.renderAtNaturalSize = true;
      markerArea.renderImageType = "image/jpeg";
      markerArea.renderImageQuality = 10;
      markerArea.show();
    },
    [saveEditedImage]
  );

  const displayMarkerArea = useCallback(() => {
    showMarkerArea(sampleImageRef?.current);
  }, [showMarkerArea]);

  useEffect(() => {
    // logic to display marker area when edit mode is one
    const currentImage = sampleImageRef?.current;
    currentImage?.addEventListener("click", displayMarkerArea);

    return () => {
      currentImage?.removeEventListener("click", displayMarkerArea);
    };
  }, [displayMarkerArea]);

  useEffect(() => {
    // Removing The Portal After Work is Done, if not cleared by library automatically
    return () => document?.querySelector(".__markerjs2_")?.remove();
  }, []);

  return (
    <>
      <div style={{ width: "400px" }}>
        <img
          ref={sampleImageRef}
          style={{ width: "100%", height: "100%" }}
          alt="bill"
          src={selectedImage}
        />
      </div>
    </>
  );
};

export default BillEdit;
