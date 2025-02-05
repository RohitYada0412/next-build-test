"use client";

import { Box, Container } from "@mui/material";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";


import { useSelector } from "react-redux";
import SideBar from "./Sidebar";
import Header from "./Header";

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

    return (
      <React.Fragment>
        <Box className='d-flex h-100 w-100' sx={{p:{xs:4,}}}>
          <SideBar setSideBarOpen={setSideBarOpen} siderBarOpen={siderBarOpen} />
          <Box className='ms-3 w-100'>
            <Header setSideBarOpen={setSideBarOpen} siderBarOpen={siderBarOpen} />
            <Component {...props} />
          </Box>
        </Box>
      </React.Fragment>
    )

  }

}

export default withAuth