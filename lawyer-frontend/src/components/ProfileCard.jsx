import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProfileCard = ({ name, email, role }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Role: {role}</Typography>
    </CardContent>
  </Card>
);

export default ProfileCard;
