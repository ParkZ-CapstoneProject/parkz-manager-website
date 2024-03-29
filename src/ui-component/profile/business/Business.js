import React from "react";
import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EditButton from "ui-component/buttons/edit-button/EditButton";

const Business = (props) => {
  const { data } = props;
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  let { businessName, address } = props;
  businessName = "Doanh nghiệp tư nhân Hoàng Văn Thụ";
  address = "72/4/1 đường Làng Tăng Phú, TP.Thủ Đức, TP.Hồ Chí Minh";

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={3}
        sx={{ marginLeft: "auto" }}
      >
        <Grid item xs={10} sx={{ marginLeft: "3%" }}>
          <Typography
            color={theme.palette.secondary.main}
            gutterBottom
            variant={matchDownSM ? "h4" : "h4"}
          >
            Tên doanh nghiêp
          </Typography>
          <Typography
            color={theme.palette.common.black}
            gutterBottom
            variant={matchDownSM ? "h3" : "h3"}
          >
            {data?.businessProfileName}
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ marginLeft: "3%" }}>
          <Typography
            color={theme.palette.secondary.main}
            gutterBottom
            variant={matchDownSM ? "h4" : "h4"}
          >
            Địa chỉ Văn phòng (Optional)
          </Typography>
          <Typography
            color={theme.palette.common.black}
            gutterBottom
            variant={matchDownSM ? "h3" : "h3"}
          >
            {data?.address}
          </Typography>
        </Grid>
        {data?.businessLicense ? (
          <Grid item xs={10} sx={{ marginLeft: "3%" }}>
            <Typography
              color={theme.palette.secondary.main}
              gutterBottom
              variant={matchDownSM ? "h4" : "h4"}
            >
              Giấy phép kinh doanh
            </Typography>
            <Avatar
              alt="front"
              src={data?.businessLicense}
              variant="rounded"
              sx={{ width: "80%", height: "80%" }}
            />
          </Grid>
        ) : (
          <Grid item xs={10} sx={{ marginLeft: "3%" }}>
            <Typography
              color={theme.palette.secondary.main}
              gutterBottom
              variant={matchDownSM ? "h4" : "h4"}
            >
              Hộ kinh doanh gia đình
            </Typography>
          </Grid>
        )}
      </Grid>
      {/* <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{ marginTop: "38px", marginRight: "-20px" }}
      >
        <Grid item xs={2}>
          <EditButton />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Business;
