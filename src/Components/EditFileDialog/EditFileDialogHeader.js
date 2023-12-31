import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EditFileDialogHeader = ({ onClose }) => (
  <div className="MainDialogHeader">
    <p className="MainDialogHeader__Title">
      Edit Bill <span>(Click on the Bill to annotate)</span>
    </p>
    <IconButton
      onClick={onClose}
      disableFocusRipple
      aria-label="delete"
      size="small"
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </div>
);

export default EditFileDialogHeader;
