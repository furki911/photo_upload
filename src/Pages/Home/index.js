import React, { useCallback, useEffect, useMemo, useState } from "react";
import Bill from "../../Assets/Images/Bill_1.png";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import File from "../../Components/File/File";
import UploadFileDialog from "../../Components/UploadFileDialog/UploadFileDialog";
import "./style.css";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(Bill);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const openUploadDialog = () => {
    setIsUploadDialogOpen(true);
  };

  const closeUploadDialog = () => {
    setIsUploadDialogOpen(false);
  };

  const handleImageChange = (file) => {
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setSelectedImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = () => {
    // Currently Logic Applied to Save it to local storage
    let uploadedImages =
      JSON.parse(localStorage.getItem("uploadedImages")) || [];

    if (selectedImage) {
      localStorage.setItem(
        "uploadedImages",
        JSON.stringify([...uploadedImages, selectedImage])
      );
    }
    getImages();
  };

  const getImages = useCallback(() => {
    // Currently Logic Applied to Get it from local storage
    const rawImages = localStorage?.getItem("uploadedImages") || [];
    if (rawImages.length > 0) {
      const images = JSON?.parse(rawImages);
      setUploadedImages(...[images]);
    }
  }, []);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const uploadedFiles = useMemo(() => {
    if (uploadedImages.length) {
      return (
        <>
          {uploadedImages.map((item, index) => (
            <File key={index} />
          ))}
        </>
      );
    } else {
      return <p style={{ textAlign: "center" }}>No Uploaded Files!</p>;
    }
  }, [uploadedImages]);

  return (
    <>
      <div className="HomePage">
        <div className="HPTitle">
          <h5 className="HPTText">Uploaded Files</h5>

          <Button
            className="HPTButton"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={openUploadDialog}
          >
            Upload New
          </Button>
        </div>

        <div className="HPBody">
          <div className="HPBFiles">{uploadedFiles}</div>
        </div>
      </div>

      <UploadFileDialog
        open={isUploadDialogOpen}
        onClose={closeUploadDialog}
        handleImageChange={handleImageChange}
        saveImage={uploadImage}
        selectedImage={selectedImage}
      />
    </>
  );
};

export default Home;
