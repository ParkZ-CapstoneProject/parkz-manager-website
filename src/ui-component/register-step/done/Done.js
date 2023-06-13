import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom/dist";
import ContinueLogin from "ui-component/buttons/continue-login/ContinueLogin";

const Done = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/login");
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <img
            src="https://img.freepik.com/premium-vector/done-green-sign-icon-web-app-check-mark-sign-vector-stock-illustration_100456-5937.jpg?w=2000"
            alt="done"
            width={700}
            height={300}
          />
        </Grid>
        <Grid item>
          <Typography color={theme.palette.primary.main} variant="h1">
            Hoàn Thành
          </Typography>
        </Grid>
        <Grid item>
          <Typography color={theme.palette.secondary.dark} variant="h2">
            Yêu cầu của bạn đang chờ duyệt!
          </Typography>
        </Grid>
        <Grid item>
          <Typography color={theme.palette.secondary.dark} variant="h2">
            Vui lòng kiểm tra Email để nhận thông báo
          </Typography>
        </Grid>
        <Stack sx={{ marginTop: "6px" }}>
          <ContinueLogin onClick={handleOnclick} />
        </Stack>
      </Grid>
    </>
  );
};

export default Done;
