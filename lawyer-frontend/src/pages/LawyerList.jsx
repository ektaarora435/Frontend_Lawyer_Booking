import React, { useEffect, useState } from "react";
import { LawyerService } from "../api/apiService";
import { Container, Grid, Typography } from "@mui/material";
import LawyerCard from "../components/LawyerCard";

const LawyerList = () => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    LawyerService.getAll()
      .then((res) => setLawyers(res.data))
      .catch((error) => console.error("Error fetching lawyers:", error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lawyer Listings</Typography>
      <Grid container spacing={3}>
        {lawyers.map((lawyer) => (
          <Grid item xs={12} sm={6} md={4} key={lawyer._id}>
            <LawyerCard lawyer={lawyer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LawyerList;
