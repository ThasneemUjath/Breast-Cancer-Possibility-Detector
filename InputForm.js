// src/components/InputForm.js
import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

export default function InputForm({ setPrediction }) {
  const [formData, setFormData] = useState({
    radius_mean: "", texture_mean: "", smoothness_mean: "", compactness_mean: "",
    concavity_mean: "", symmetry_mean: "", fractal_dimension_mean: "", area_mean: "",
    perimeter_mean: "", concave_points_mean: ""
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, parseFloat(v)]));
    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    setPrediction({
     label: result.prediction,
     probability: result.probability
    });

  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Grid container spacing={2}>
        {Object.keys(formData).map(key => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              label={key.replace(/_/g, " ")}
              name={key}
              type="number"
              value={formData[key]}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" fullWidth sx={{ py: 1.5, mt: 2, background: "linear-gradient(135deg,#001f7a,#00f0ff)" }}>
            Predict
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
