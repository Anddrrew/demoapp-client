import { Grid } from '@mui/material';
import InputCard from '../../components/Summarization/InputCard';
import OutputCard from '../../components/Summarization/OutputCard';
import { useState } from 'react';
import SettingsCard from '../../components/Summarization/SettingsCard';

export default function Summarization() {
  const [text, setText] = useState('');

  return (
    <Grid container spacing={2} mt={0}>
      <Grid item xs={12} sm={8}>
        <InputCard onSuccess={(data) => setText(JSON.stringify(data, null, 2))} />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SettingsCard />
      </Grid>
      <Grid item xs={12} sm={8}>
        <OutputCard title='Summary' placeholder='Your result will be here' text={text} />
      </Grid>
    </Grid>
  );
}
