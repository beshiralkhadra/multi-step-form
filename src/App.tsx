import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import NotMatch from './shareableComponents/404Page/404Page';
import MultiStepForm from './screens/MultiStepForm';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
