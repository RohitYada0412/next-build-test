"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { Box, Grid2 as Grid } from "@mui/material";

import Header from "./Header";
import SideBar from "./Sidebar";
import { useSelector } from "react-redux";

const withAuth = (Component) => {

  return function WithAuth(props) {
    // custom hook

    const { isAdminLogin } = useSelector((state) => state.auth)

    //  Local state
    const [siderBarOpen, setSideBarOpen] = useState(true)



    useEffect(() => {
      if (!isAdminLogin) {
        redirect('/auth/login')
      }
    }, [isAdminLogin])

    // useEffect(() => {
    //   if (width <= 900) {
    //     setSideBarOpen(false)
    //   }
    // }, [width])



    return (
      <React.Fragment>
        {/* <StyledRoot> */}
        <Box component='section' sx={{
          background: 'linear-gradient(74deg, #282157, #50449d)',
          height: { lg: '100%' },
          overflow: "auto",

        }}>
          <Grid container spacing={2} sx={{ py: 5, px: 5 }}>
            <Grid size={{ sm: 4, md: 3, lg: 2 }}>
              <SideBar setSideBarOpen={setSideBarOpen} siderBarOpen={siderBarOpen} />
            </Grid>
            <Grid size={{ sm: siderBarOpen ? 8 : 12, md: 9, lg: 10 }} >
              <Header setSideBarOpen={setSideBarOpen} siderBarOpen={siderBarOpen} />
              <Component {...props} />
            </Grid>
          </Grid>
        </Box>
        {/* </StyledRoot> */}
      </React.Fragment>
    )

  }

}

export default withAuth