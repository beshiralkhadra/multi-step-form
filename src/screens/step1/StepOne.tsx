import React from 'react';
import { Grid, Button, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StepProps } from '../../utils/types';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
});

const StepOne: React.FC<StepProps> = ({ onNext, initialData }) => (
  <Formik
    initialValues={{ name: initialData.name || '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => onNext(values)}
  >
    {() => (
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              as={TextField}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              helperText={<ErrorMessage name="name" />}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'right' }}>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Grid>
        </Grid>
      </Form>
    )}
  </Formik>
);

export default StepOne;
