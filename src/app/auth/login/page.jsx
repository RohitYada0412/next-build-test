"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation'

import {
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  FormLabel,
  Grid2 as Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Form, Formik } from "formik";

import { imagePath } from "@/utils/images";
import Iconify from "@/components/common/iconify";

import { authLogin } from "@/redux/slice/auth/session.slice";
import { toast } from "react-toastify";
import Image from "next/image";

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  // Local State 

  const [loading, setLoading] = useState(false)

  return (
    <React.Fragment>
      <Box
        className="py-5 px-5"
        sx={{
          background: 'linear-gradient(74deg, #282157, #50449d)',
          height: { lg: "100%", md: '100%' },
        }}
      >
        <Stack direction="row" justifyContent="left">
          <Box sx={{ width: 100, height: 50 }}>
            <Image
              src={imagePath?.logo}
              alt="Logo"
              width={100}
              height={50}
            // style={{ width: '100%', height: 'auto' }}
            />
            {/* <Image
              src="/profile.png"
              width={500}
              height={500}
              alt="Picture of the author"
            /> */}
          </Box>
        </Stack>
        <Box
          sx={{
            height: '100%',
            display: "flex",
            alignItems: "center",
          }}
        >
          <Container maxWidth="xl">
            <Grid container spacing={10}>
              <Grid size={{ xs: 12, md: 6, lg: 7 }} sx={{ position: "relative" }}>
                <Box
                  sx={{
                    width: 50,
                    height: 500,
                    position: "absolute",
                    top: "50%",
                    left: "30%",
                    transform: "translate(-50%, -50%)",
                    backdropFilter: `blur(1px)`
                  }}
                />
                <Box sx={{ textAlign: "center", zIndex: 2 }}>
                  <Image
                    // className="w-75 h-75"
                    src={imagePath?.loginImage}
                    alt=""
                    width={500}
                    height={500}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 5 }}>
                <Card sx={{ backdropFilter: "blur(10px)", padding: 4, width: '100%' }}>
                  <CardContent>
                    <Stack direction="row" justifyContent="left">
                      <Box sx={{ width: 100, height: 50 }}>
                        <Image
                          src={imagePath?.logo}
                          alt="Logo"
                          width={150}
                          height={50}
                        />
                      </Box>
                    </Stack>

                    <Typography
                      variant='body1'
                      className="py-2"
                      sx={{
                        color: (theam) => theam.palette.text.primary
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Dui in ac urna sed dignissim et. Eu venenatis nam gravida sed massa quam suscipit.
                    </Typography>
                    <Typography
                      variant='h4'
                      className="py-2 fw-medium"
                      sx={{ color: (theam) => theam.palette.text.primary }}
                    >
                      Sign In
                    </Typography>
                    <Formik
                      initialValues={{ email: "", password: "" }}
                      onSubmit={(values) => {
                        setLoading(true)
                        dispatch(authLogin(values)).then(({ payload }) => {
                          if (payload?.success) {
                            localStorage.setItem('email', values?.email)
                            setLoading(false)
                            toast.success(payload?.message)
                            router.push('/auth/verify-otp')
                          } else {
                            setLoading(false)
                            toast.error(payload?.message)
                          }
                        }).catch((err) => {
                          console.error(err)
                          toast.error(err?.message)
                          setLoading(false)
                        })
                      }}
                    >
                      {({ handleSubmit, handleChange, values }) => (
                        <Form onSubmit={handleSubmit}>
                          <Stack direction="column" className="my-2">
                            <FormLabel className="mb-1">Enter Email Address</FormLabel>
                            <TextField
                              fullWidth
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              placeholder="Email"
                              slotProps={{
                                input: {
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Box sx={{
                                        backgroundColor: (theam) => theam.palette.background.default,
                                        px: '12px',
                                        borderRadius: '7px',
                                        py: '8px',
                                        border: '1px solid'
                                      }}>
                                        <Iconify icon="solar:user-linear" color='#fff' />
                                      </Box>
                                    </InputAdornment>
                                  ),
                                },
                              }}
                            />
                          </Stack>


                          <Stack direction="column" alignItems="center" className="mt-5">
                            <Button
                              fullWidth
                              variant="contained"
                              type="submit"
                              className="px-5 py-3"
                              sx={{ boxShadow: '0px 10px 3px 0px rgba(216, 213, 234, 1)' }}

                            >
                              SEND OTP
                            </Button>
                          </Stack>

                        </Form>
                      )}
                    </Formik>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Backdrop
              sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Login;
