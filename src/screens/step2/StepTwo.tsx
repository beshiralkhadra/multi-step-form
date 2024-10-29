import React from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StepProps } from '../../utils/types';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const StepTwo: React.FC<StepProps> = ({ onNext, onBack, initialData }) => (
  <Formik
    initialValues={{ email: initialData.email || '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => onNext(values)}
  >
    {() => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="email" />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" onClick={onBack} fullWidth>
              Back
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" fullWidth>
              Next
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default StepTwo;
