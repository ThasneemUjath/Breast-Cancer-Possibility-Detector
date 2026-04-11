// src/components/PredictionCard.js
import React from "react";
import { Card, CardContent, Typography, LinearProgress, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function PredictionCard({ title, probability }) {
  const color = probability > 0.5 ? "#f44336" : "#4caf50"; // Red for high, green for low

  return (
    <Grid item xs={12} sm={6} md={4}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card sx={{ minWidth: 200, textAlign: "center", mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">Probability: {(probability*100).toFixed(2)}%</Typography>
              <LinearProgress
                variant="determinate"
                value={probability * 100}
                sx={{
                  mt: 1,
                  backgroundColor: "#ddd",
                  "& .MuiLinearProgress-bar": { backgroundColor: color }
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
