"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { useDispatch } from "react-redux";

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
  Stack,
  Typography
} from "@mui/material";

import { Form, Formik } from "formik";
import OTPInput from "otp-input-react";
import { toast } from "react-toastify";

import { imagePath } from "@/utils/images";
import { authOTP } from "@/redux/slice/auth/session.slice";


const VerifyOTP = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  // local state 
  const [loading, setLoading] = useState(false)

  return (
    <React.Fragment>
      <Box
        className="py-5 px-5"
        sx={{
          background: 'linear-gradient(74deg, #282157, #50449d)',
          height: { sm: "100%" },
        }}
      >
        <Stack direction="row" justifyContent="left">
          <Box sx={{ width: 100, height: 50 }}>
            <Image
              src={imagePath?.logo}
              alt="Logo"
              width={100}
              height={50}
            />
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
                    width: 500,
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
                    src={imagePath?.verifyOTP}
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
                      sx={{ color: (theam) => theam.palette.text.primary }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Dui in ac urna sed dignissim et. Eu venenatis nam gravida sed massa quam suscipit.
                    </Typography>
                    <Typography
                      variant='h4'
                      className="py-2 fw-medium"
                      sx={{ color: (theam) => theam.palette.text.primary }}
                    >
                      Verify OTP
                    </Typography>
                    <Formik
                      initialValues={{ otp: "", email: localStorage.getItem('email') }}

                      onSubmit={(values) => {
                        if (values?.otp.length >= 6) {
                          setLoading(true)
                          dispatch(authOTP(values)).then(({ payload }) => {
                            if (payload?.success) {
                              setLoading(false)
                              toast.success(payload?.message)
                              localStorage.removeItem('email')
                              localStorage.setItem('ATo784~sd!014', payload?.data.token)
                              router.push('/')
                            } else {
                              toast.error(payload?.message)
                              setLoading(false)
                            }
                          }).catch((err) => {
                            console.error(err)
                            toast.error(err?.message)
                            setLoading(false)
                          })
                        }
                      }}
                    >
                      {({ handleSubmit, setFieldValue, values }) => (
                        <Form onSubmit={handleSubmit}>
                          <Stack direction="column" className="my-2">
                            <FormLabel className="mb-1">Enter Email Address</FormLabel>
                            <OTPInput
                              name='otp'
                              value={values?.otp}
                              onChange={(e) => setFieldValue('otp', e)}
                              autoFocus
                              OTPLength={6}
                              otpType="number"
                              disabled={loading}
                              inputStyles={{
                                width: '50%', height: 50,
                                borderRadius: 5,
                                border: '1px solid #969AA8',
                                fontFamily: 'Gilroy, "sans-serif"',
                                fontSize: 22,
                                fontWeight: 'bold'
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
                              Verify
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

export default VerifyOTP;
