import React, { useEffect, useState } from "react";
import { LawyerService } from "../api/apiService";
import { useParams } from "react-router-dom";
import { Container, Card, CardContent, Typography, Rating } from "@mui/material";

const LawyerDetail = () => {
  const { lawyerId } = useParams();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    LawyerService.getById(lawyerId)
      .then((res) => setLawyer(res.data))
      .catch((error) => console.error("Error fetching lawyer:", error));
  }, [lawyerId]);

  return (
    <Container maxWidth="sm">
      {lawyer ? (
        <Card>
          <CardContent>
            <Typography variant="h4">{lawyer.name}</Typography>
            <Typography>Expertise: {lawyer.expertise}</Typography>
            <Typography>Fees: ${lawyer.fees}</Typography>
            <Rating value={lawyer.rating} readOnly />
            <Typography>Experience: {lawyer.experience} years</Typography>
          </CardContent>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default LawyerDetail;
