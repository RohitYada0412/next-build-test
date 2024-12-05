import React from "react"

import { Avatar, Box, Card, CardContent, Stack, Typography } from "@mui/material"
import Iconify from "./common/iconify"
import { imagePath } from "@/utils/images"

const Header = ({ setSideBarOpen, siderBarOpen }) => {
  return (
    <React.Fragment>

      <Box component='section'>
        <Card>
          <CardContent>
            <Stack direction='row' justifyContent='space-between' alignItems='center' gap={2}>
              <Box className='d-flex align-items-center' gap={1}>
                {!siderBarOpen &&
                  <Box onClick={() => setSideBarOpen(!siderBarOpen)}>
                    <Iconify icon="material-symbols:menu" color='#fff' />
                  </Box>
                }
                <Typography variant='h6'>Hello, Moss</Typography>
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