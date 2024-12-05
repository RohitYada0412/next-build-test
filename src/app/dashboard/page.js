"use client";

import React from "react";
import withAuth from "@/components/withAuth";
import { Box, Card, CardContent, Stack, Typography, Grid2 as Grid, Paper, Table, TableHead, TableRow, TableContainer, TableBody, TableCell, TablePagination } from "@mui/material";
import Iconify from "@/components/common/iconify";


const Dashboard = () => {
	return (
		<React.Fragment>
			<Box component='section' className="my-5">
				<Grid container spacing={8}>
					<Grid size={{ xs: 12, md: 6, }}>
						<Card>
							<CardContent>
								<Box>
									<Stack
										direction="row"
										alignItems="center"
										gap={2}
										className="my-2"
									>
										<Box
											sx={{
												backgroundColor: (theme) => theme.palette.background.default,
												px: 5,
												py: 5,
												borderRadius: "7px",
											}}
										>
											<Iconify icon='material-symbols:book-3' color="#fff" width={100} />
										</Box>
										<Box>
											<Typography variant="h2" className="fw-medium">
												5000
											</Typography>
											<Typography variant="h4" className="fw-medium">
												Total Words
											</Typography>
											<Typography variant='subtitle2' className="fw-medium">
												Lorem ipsun dolor payment
											</Typography>
										</Box>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>
					<Grid size={{ xs: 12, md: 6, }}>
						<Card>
							<CardContent>
								<Box>
									<Stack
										direction="row"
										alignItems="center"
										gap={2}
										className="my-2"
									>
										<Box
											sx={{
												backgroundColor: (theme) => theme.palette.background.default,
												px: 5,
												py: 5,
												borderRadius: "7px",
											}}
										>
											<Iconify icon='solar:user-linear' color="#fff" width={100} />
										</Box>
										<Box>
											<Typography variant="h2" className="fw-medium">
												5000
											</Typography>
											<Typography variant="h4" className="fw-medium">
												User Count
											</Typography>
											<Typography variant='subtitle2' className="fw-medium">
												Lorem ipsun dolor payment
											</Typography>
										</Box>
									</Stack>
								</Box>
							</CardContent>
						</Card>
					</Grid>

					<Grid size={{ xs: 12 }}>
						<Card>
							<CardContent>
								<Typography variant="h4" className="fw-medium">Top Users</Typography>

								<Paper sx={{ width: '100%', overflow: 'hidden' }}>
									<TableContainer sx={{ maxHeight: 440 }}>
										<Table stickyHeader aria-label="sticky table">
											<TableHead sx={{ background: 'transparent' }}>
												<TableRow sx={{ background: 'transparent' }}>

													<TableCell >
														Rank
													</TableCell>
													<TableCell >
														Name
													</TableCell>
													<TableCell >
														Profile
													</TableCell>
													<TableCell >
														Status
													</TableCell>
													<TableCell >
														Words Learned
													</TableCell>
													<TableCell >
														Plan Took
													</TableCell>

												</TableRow>
											</TableHead>
											<TableBody sx={{ mb: 1 }}>
												<TableRow sx={{ background: 'transparent', mb: 2 }}>
													<TableCell >
														Rank
													</TableCell>
													<TableCell >
														Name
													</TableCell>
													<TableCell >
														Profile
													</TableCell>
													<TableCell >
														Status
													</TableCell>
													<TableCell >
														Words Learned
													</TableCell>
													<TableCell >
														Plan Took
													</TableCell>

												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
									<TablePagination
										rowsPerPageOptions={[10, 25, 100]}
										component="div"
										count={10}
										rowsPerPage={10}
										page={1}
										// onPageChange={handleChangePage}
										// onRowsPerPageChange={handleChangeRowsPerPage}
									/>
								</Paper>




							</CardContent>
						</Card>
					</Grid>

				</Grid>
			</Box>
		</React.Fragment>
	)
}
export default withAuth(Dashboard)