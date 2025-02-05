"use client";

import React, { useState } from "react";
import Image from "next/image";
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

// import { imagePath } from "@/utils/images";
import Iconify from "@/components/common/iconify";

import { authLogin } from "@/redux/slice/auth/session.slice";
import { toast } from "react-toastify";
import { imagePath } from "@/utils/images";

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  // Local State 

  const [loading, setLoading] = useState(false)

  return (
    <React.Fragment>
      <Box
        className="py-5"
        component="section"
        sx={{
          height: "100vh",
          display: 'flex',
          alignItems: 'center',
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box sx={{ width: 800, height: 800, position: "absolute", backgroundColor: "#3A94E763", zIndex: 1, borderRadius: "100%", left: "10%", filter: "blur(200px)" }} />
        <Box sx={{ width: 800, height: 800, position: "absolute", backgroundColor: "#3A94E763", zIndex: 1, borderRadius: "100%", right: "-50%", top: "50%", transform: "translate(-50%,-50%)", filter: "blur(250px)" }} />
        <Container maxWidth="xl" sx={{ zIndex: 12 }}>
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
                  src={imagePath?.loginImage}
                  alt=""
                  width={500}
                  height={500}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <Card sx={{ padding: 4, width: '100%' }}>
                <CardContent>
                  <Stack direction="row" justifyContent="left">
                    <Image
                      src={imagePath?.logo}
                      alt="Logo"
                      width='100%'
                      height={'100%'}
                    />
                  </Stack>

                  <Typography variant='body1' className="py-2">
                    Lorem ipsum dolor sit amet consectetur. Dui in ac urna sed dignissim et. Eu venenatis nam gravida sed massa quam suscipit.
                  </Typography>
                  <Typography variant='h4' className="py-2 fw-medium">
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
                          <FormLabel className="mb-1" sx={{
                            color: 'common.black'
                          }}>Enter Email Address</FormLabel>
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
                                    <Box className='px-2'>
                                      <Iconify icon="solar:user-linear" color='#000' />

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
                            color="secondary"
                            size='large'
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
    </React.Fragment>
  );
};

export default Login;
