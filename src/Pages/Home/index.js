import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "../../Components/File/File";
import UploadFileDialog from "../../Components/UploadFileDialog/UploadFileDialog";
import "./style.css";

const Home = ({ openFileViewModal }) => {
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [selectedFile, setselectedFile] = useState();
  const [savedImages, setUploadedImages] = useState([]);

  const saveImage = () => {
    // Currently Logic Applied to Save it to local storage
    let savedImages = JSON.parse(localStorage.getItem("savedImages")) || [];

    if (selectedFile) {
      localStorage.setItem(
        "savedImages",
        JSON.stringify([...savedImages, selectedFile])
      );
    }
    getImages();
  };

  const getImages = useCallback(() => {
    // Currently Logic Applied to Get it from local storage
    const rawImages = localStorage?.getItem("savedImages") || [];
    if (rawImages.length > 0) {
      const images = JSON?.parse(rawImages);
      setUploadedImages(...[images]);
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const handleFileView = useCallback(
    (file) => {
      openFileViewModal(file);
    },
    [openFileViewModal]
  );

  const savedFiles = useMemo(() => {
    if (savedImages.length) {
      return (
        <>
          {savedImages.map((item, index) => (
            <File data={item} handleFileView={handleFileView} key={index} />
          ))}
        </>
      );
    } else {
      return <p style={{ textAlign: "center" }}>No Uploaded Files!</p>;
    }
  }, [handleFileView, savedImages]);

  //
  return (
    <>
      <div className="HomePage">
        <div className="HPTitle">
          <h5 className="HPTText">Uploaded Files</h5>

          <Button
            className="HPTButton"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => {
              setIsUploadOpen(true);
            }}
          >
            Upload New
          </Button>
        </div>

        <div className="HPBody">
          <div className="HPBFiles">{savedFiles}</div>
        </div>
      </div>

      <UploadFileDialog
        open={isUploadOpen}
        setselectedFile={setselectedFile}
        onClose={() => setIsUploadOpen(false)}
        saveImage={saveImage}
      />
    </>
  );
};

export default Home;
