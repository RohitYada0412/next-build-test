"use client";

import React from "react";
import withAuth from "@/components/withAuth";
import { Box, Card, CardContent, Stack, Typography, Grid2 as Grid, Paper, Table, TableHead, TableRow, TableContainer, TableBody, TableCell, TablePagination } from "@mui/material";
import Iconify from "@/components/common/iconify";
import { DashboardTables } from "@/components/tabels";


const Dashboard = () => {
	return (
		<React.Fragment>
			<Box component='section' className="my-5">
				<Grid container spacing={8}>
					{[1, 1, 1, 1].map((_item, i) => (
						<Grid size={{ xs: 12, sm: 6, lg: 3, }} key={i}>
							<Card>
								<CardContent>
									<Box>
										<Stack direction="row" alignItems="center">
											<Iconify icon='material-symbols:book-3' width={50} />
											<Box>
												<Typography variant="h4" className="fw-medium">
													Total Words
												</Typography>

												<Typography variant="h3" className="fw-bold">
													5000
												</Typography>
											</Box>
										</Stack>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
					<Grid size={{ xs: 12 }}>
						<DashboardTables />
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	)
}
export default withAuth(Dashboard)