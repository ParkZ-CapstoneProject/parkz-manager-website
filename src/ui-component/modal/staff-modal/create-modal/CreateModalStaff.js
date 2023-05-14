import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "store/modalReducer";
// import { Grid } from "@mui/material";
import ItemModal from "./ItemModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "90%",
  bgcolor: "background.paper",
  // border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 12,
  p: 4,
};

export default function CreateModalStaff({ modalType }) {
  const theme = useTheme();
  const isOpen = useSelector((state) => state.modal.modals.includes(modalType));
  const dispatch = useDispatch();

  // const handleOpen = (modalType) => {
  //   dispatch(openModal(modalType));
  // };
  const handleClose = () => {
    dispatch(closeModal(modalType));
  };

  return (
    <div>
      {/* <Button onClick={() => handleOpen("createModalStaff")}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{ border: "none" }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <IconButton
              // aria-label="close"
              onClick={handleClose}
              // sx={{
              //   position: "absolute",
              //   right: 0,
              //   top: 0,
              //   color: theme.palette.grey[500],
              // }}
              style={{
                position: "absolute",
                top: 1,
                right: 1,
                color: theme.palette.grey[500],
                backgroundColor: theme.palette.grey[100],
              }}
            >
              <CloseIcon />
            </IconButton>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <ItemModal modalType={modalType} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
