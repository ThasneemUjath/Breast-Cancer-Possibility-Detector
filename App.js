import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import PredictionCard from "./components/PredictionCard";
import { Container, Typography, Grid } from "@mui/material";

function App() {
  const [prediction, setPrediction] = useState("");

  const probability = prediction ? prediction.probability : 0;

  return (
    <>
      <Header />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>Breast Cancer Prediction</Typography>
        <InputForm setPrediction={setPrediction} />
        {prediction && (
          <Grid container spacing={2} sx={{ mt: 2 }}>
           <PredictionCard 
             title={prediction.label} 
             probability={prediction.probability}
          />
            </Grid>
        )}

      </Container>
    </>
  );
}

export default App;
