import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { DialogContent, DialogTitle } from "@mui/material";

const MaterialModal = ({
  openModal,
  handleClose,
  ModalTitle,
  ModalContent,
  ModalSize,
  modalStyle,
  paperBackground,
  modalId,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      fullWidth={true}
      fullScreen={fullScreen}
      open={openModal}
      //  onClose={handleClose}
      scroll="paper"
      maxWidth={ModalSize}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={modalStyle}
      id={modalId ? modalId : "MaterialModal"}
      //  onBackdropClick="false"
    >
      <DialogTitle id="scroll-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="p" sx={{ color: "primary.main" }}>
            {ModalTitle}
          </Typography>
          <CancelIcon
            onClick={handleClose}
            sx={{
              cursor: "pointer",
              width: "2rem",
              height: "2rem",
              color: "#676767",
            }}
          ></CancelIcon>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{ backgroundColor: paperBackground ? "#fafafa" : "#fff" }}
        dividers
      >
        {ModalContent()}
      </DialogContent>
    </Dialog>
  );
};

MaterialModal.propTypes = {
  openModal: PropTypes.bool,
  ModalTitle: PropTypes.string,
  ModalContent: PropTypes.func,
  ModalSize: PropTypes.string,
  handleClose: PropTypes.func,
  //modalStyle: PropTypes.obj,
  paperBackground: PropTypes.bool,
};

export default MaterialModal;
