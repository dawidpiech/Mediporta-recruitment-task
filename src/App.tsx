import React from "react";
import { Container, Typography } from "@mui/material";
import UserInterface from "./view/UserInterface";

const App: React.FC = () => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Typography variant="h4" gutterBottom>
        StackOverflow Tags Browser
      </Typography>
      <UserInterface />
    </Container>
  );
};

export default App;
