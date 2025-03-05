import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const LawyerCard = ({ lawyer }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{lawyer.name}</Typography>
      <Typography>Expertise: {lawyer.expertise}</Typography>
      <Typography>Fees: ${lawyer.fees}</Typography>
      <Button component={Link} to={`/lawyer/${lawyer._id}`} variant="contained" color="primary">
        View Details
      </Button>
    </CardContent>
  </Card>
);

export default LawyerCard;
