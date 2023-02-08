import { Grid } from '@mui/material';
import InputCard from '../../components/Summarization/InputCard';

export default function Summarization() {
  return (
    <Grid container spacing={2} mt={0}>
      <Grid item xs={12} sm={8}>
        <InputCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <div style={{ backgroundColor: 'red' }}>Settings</div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <div style={{ backgroundColor: 'red' }}>Output</div>
      </Grid>
    </Grid>
  );
}
