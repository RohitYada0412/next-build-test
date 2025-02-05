"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from 'next/navigation'

import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import Iconify from "./common/iconify";
import { imagePath } from "@/utils/images";
import { sideMenu } from "@/utils/SiderBarMenu";
import { removeItemFromLocalStorage } from "@/utils/service";

const SideBar = ({ setSideBarOpen, siderBarOpen }) => {
  const router = useRouter()
  const pathname = usePathname()

  const logout = () => {
    removeItemFromLocalStorage('ATo784~sd!014')
    router.push('/auth/login')
  }


  return (
    <React.Fragment>
      {siderBarOpen && (
        <Box component="section" className="h-100" sx={{ width: 350 }}>
          <Card className="h-100" sx={{ overflow: 'auto' }}>
            <CardContent >
              <Box className="mb-3">
                <Image src={imagePath?.logo} alt="Logo" width='100%' height='100%' />
              </Box>
              <Divider />
              <Box>
                {sideMenu?.map((menu, i) => (
                  <Card key={i} className="px-2 mt-3" sx={{
                    cursor: "pointer",
                    backgroundColor: (theme) => pathname === menu.pathname && theme.palette.primary.main,
                    color: pathname === menu.pathname ? 'common.white' : 'common.black'
                  }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap={1}
                      className="my-3 px-2"
                    >
                      <Iconify icon={menu?.image} />
                      <Typography variant="h5" className="fw-medium">
                        {menu?.name || "Dashboard"}
                      </Typography>
                    </Stack>
                  </Card>
                ))}
              </Box>
            </CardContent>
            <Divider />
            <Card className="px-2 mx-4 mt-3" sx={{ cursor: "pointer", marginTop: "auto", mb: 3, }}
              onClick={logout}
            >
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                className="my-2"
              >
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.background.default,
                    px: "10px",
                    py: 0.6,
                    borderRadius: "7px",
                  }}
                >
                  <Iconify icon="clarity:logout-solid" color="#fff" />
                </Box>
                <Typography variant="body1" className="fw-bold">
                  Log Out
                </Typography>
              </Stack>
            </Card>
          </Card>
        </Box>
      )}
    </React.Fragment>
  );
};

export default SideBar;
