// import { useCallback, useState } from "react";
// import Head from 'next/head';
// import NextLink from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
// import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from "../../../../ui-component/auth/layout";
import LoginButton from "ui-component/buttons/login-button/LoginButton";
// import { useNavigate } from "react-router";
// import Header from "layout/MainLayout/Header";

const Page = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  //   const router = useRouter();
  //   const auth = useAuth();
  // const [method, setMethod] = useState("email");
  //   const formik = useFormik({
  //     initialValues: {
  //       email: 'demo@devias.io',
  //       password: 'Password123!',
  //       submit: null
  //     },
  //     validationSchema: Yup.object({
  //       email: Yup
  //         .string()
  //         .email('Must be a valid email')
  //         .max(255)
  //         .required('Email is required'),
  //       password: Yup
  //         .string()
  //         .max(255)
  //         .required('Password is required')
  //     }),
  //     onSubmit: async (values, helpers) => {
  //       try {
  //         await auth.signIn(values.email, values.password);
  //         router.push('/');
  //       } catch (err) {
  //         helpers.setStatus({ success: false });
  //         helpers.setErrors({ submit: err.message });
  //         helpers.setSubmitting(false);
  //       }
  //     }
  //   });

  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
              textAlign={"center"}
              marginTop="-5%"
            >
              <Box>
                <Typography
                  color="#063970"
                  gutterBottom
                  variant={matchDownSM ? "h2" : "h1"}
                  fontSize="50px"
                >
                  Đăng nhập
                </Typography>
              </Box>
              {/* <Typography color="text.secondary" variant="body2">
                Đăng nhập tại đây
              </Typography> */}
            </Stack>
            <form
            // noValidate
            // onSubmit={formik.handleSubmit}
            >
              <Stack spacing={1}>
                <TextField
                  sx={{ borderRadius: "5px" }}
                  // error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  // helperText={formik.touched.email && formik.errors.email}
                  label="Tên đăng nhập"
                  name="email"
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                  type="email"
                  // value={formik.values.email}
                />
                <Typography
                  color={theme.palette.secondary.dark}
                  variant="subtitle2"
                  sx={{
                    cursor: "pointer",
                    textAlign: "end",
                  }}
                >
                  <a href="/input-email">Bạn quên mật khẩu?</a>
                </Typography>
                <TextField
                  // error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  // helperText={formik.touched.password && formik.errors.password}
                  label="Mật khẩu"
                  name="password"
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                  type="password"
                  // value={formik.values.password}
                />
              </Stack>
              {/* <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText> */}
              {/* {formik.errors.submit && (
                  <Typography
                    color="error"
                    sx={{ mt: 3 }}
                    variant="body2"
                  >
                    {formik.errors.submit}
                  </Typography>
                )} */}
              {/* <Button
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  borderRadius: "7px",
                  backgroundColor: "#063970",
                  ":is(:hover, :focus)": {
                    backgroundColor: "#478be9",
                    outline: "3px solid #478be9",
                    outlineOffset: "2px",
                  },
                }}
                type="submit"
                variant="contained"
              >
                Đăng nhập
              </Button> */}
              <Stack sx={{ marginTop: "5%" }}>
                <LoginButton />
              </Stack>

              <Stack sx={{ textAlign: "center", marginTop: "2%" }}>
                <Typography
                  color={theme.palette.secondary.main}
                  variant="subtitle1"
                >
                  Bạn chưa có tài khoản? <a href="/register">Đăng ký tại đây</a>
                </Typography>
              </Stack>
            </form>
          </div>
        </Box>
      </Box>
    </AuthLayout>
  );
};

// Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;
