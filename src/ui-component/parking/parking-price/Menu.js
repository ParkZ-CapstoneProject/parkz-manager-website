import { IconButton, List, ListItem, Popover, Typography } from "@mui/material";
import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const Menu = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log("id: ", id);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List sx={{ width: "130px" }}>
          {/* <ListItem onClick={() => console.log("first")}>
            <EditIcon sx={{ marginRight: "3%", color: "#2196f3" }} />
            <Typography color="primary" variant="subtitle1">
              Chỉnh sửa
            </Typography>
          </ListItem> */}
          <ListItem onClick={() => console.log("first")}>
            <RemoveRedEyeIcon sx={{ marginRight: "3%", color: "#673ab7" }} />
            <Typography color="secondary" variant="subtitle1">
              Chi tiết
            </Typography>
          </ListItem>
          <ListItem onClick={() => console.log("first")}>
            <DeleteIcon sx={{ marginRight: "3%", color: "#f44336" }} />
            <Typography color="error" variant="subtitle1">
              Xóa
            </Typography>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};

export default Menu;