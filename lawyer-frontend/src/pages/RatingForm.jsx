import React, { useState } from "react";
import { LawyerService } from "../api/apiService";
import { useParams } from "react-router-dom";
import { Rating, Button, TextField, Box } from "@mui/material";

const RatingForm = () => {
  const { lawyerId } = useParams();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    LawyerService.submitRating(lawyerId, { rating, review })
      .then(() => alert("Rating submitted!"))
      .catch((error) => console.error("Error submitting rating:", error));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
      <TextField
        label="Write a review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit Rating
      </Button>
    </Box>
  );
};

export default RatingForm;
