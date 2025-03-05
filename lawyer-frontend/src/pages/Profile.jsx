import React, { useEffect, useState } from "react";
import { AuthService } from "../api/apiService";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    AuthService.getUser(userId)
      .then((res) => setProfile(res.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, [userId]);

  return (
    <Container maxWidth="sm">
      {profile ? <ProfileCard {...profile} /> : <p>Loading profile...</p>}
    </Container>
  );
};

export default Profile;
