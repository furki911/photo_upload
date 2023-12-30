import { Button, Stack } from "@mui/material";

const UploadFileDialogFooter = ({ onClose, onSave }) => {
  return (
    <div className="MainDialogFooter">
      <Stack direction="row" justifyContent="space-between" width={"100%"}>
        <Stack direction="row" alignItems="center">
          <p style={{ fontSize: ".6rem" }}>
            please save annotations (if any) before uploading
          </p>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            color="error"
            style={{ textTransform: "none" }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            size="small"
            variant="outlined"
            style={{ textTransform: "none" }}
            onClick={() => {
              onSave();
              onClose();
            }}
          >
            Upload
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default UploadFileDialogFooter;
