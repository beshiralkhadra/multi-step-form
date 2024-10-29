import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
} from '@mui/material';
import StepOne from './step1/StepOne';
import StepTwo from './step2/StepTwo';
import StepThree from './step3/StepThree';
import useFormLocalStorage from '../hooks/useLocalStorage';
import { FormData } from '../utils/types';

const steps = ['Personal Info', 'Contact Info', 'Review & Submit'];

const MultiStepForm: React.FC = () => {
  const [formData, updateFormData, clearFormData, activeStep, setActiveStep] =
    useFormLocalStorage<FormData>('multiStepForm', { name: '', email: '' });

  const handleNext = (data: Partial<FormData>) => {
    updateFormData(data);
    setActiveStep((prev: any) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleRestart = () => {
    clearFormData();
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <StepOne onNext={handleNext} initialData={formData} />;
      case 1:
        return (
          <StepTwo
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        );
      case 2:
        return (
          <StepThree
            data={formData}
            onBack={handleBack}
            onRestart={handleRestart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
        bgcolor: 'background.default',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 600,
          width: '100%',
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 2, color: 'primary.dark' }}
        >
          Multi-Step Form
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 3, flexWrap: 'wrap' }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStep()}
      </Paper>
    </Box>
  );
};

export default MultiStepForm;
