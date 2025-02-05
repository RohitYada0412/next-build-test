import React from "react"

import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material"
import Iconify from "./common/iconify"
import { imagePath } from "@/utils/images"
import Image from "next/image"

const Header = ({ setSideBarOpen, siderBarOpen }) => {
  return (
    <React.Fragment>

      <Box component='section' className="w-100">
        <Card className="w-100">
          <CardContent>
            <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
              <Box className='d-flex align-items-center' gap={1}>
                {!siderBarOpen &&
                  <Box onClick={() => setSideBarOpen(!siderBarOpen)}>
                    <Iconify icon="material-symbols:menu" color='#fff' />
                  </Box>
                }
                <Stack direction='row' alignItems='center'>
                  <Typography variant='h4' color="#4D4D4F">Hello, Moss</Typography>
                  <Box className="mb-3">
                    {/* <Image src={imagePath?.logo} alt="Logo" width='100%' height='100%' /> */}
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Avatar alt="Remy Sharp" src={imagePath?.logo} />

              </Box>
            </Stack>

          </CardContent>
        </Card>

      </Box>
    </React.Fragment>
  )
}

export default Header