import React, { useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Paper,
  Alert,
  AlertTitle,
  Box,
} from '@mui/material';
import { FormData } from '../../utils/types';

interface StepThreeProps {
  data: FormData;
  onBack: () => void;
  onRestart: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ data, onBack, onRestart }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          <AlertTitle>Success</AlertTitle>
          Your form has been submitted successfully!
        </Alert>
        <Button variant="contained" onClick={onRestart}>
          Start Again
        </Button>
      </Box>
    );
  }

  return (
    <Paper
      elevation={2}
      sx={{ padding: 4, borderRadius: 2, maxWidth: 400, margin: '0 auto' }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Review Your Information
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <Typography>Name: {data.name}</Typography>
        <Typography>Email: {data.email}</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Button variant="outlined" onClick={onBack} fullWidth>
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmit}
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StepThree;
