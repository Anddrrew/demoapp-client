import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import { useSnackbar } from 'notistack';
import SummarizationService from '../../service/SummarizationService';
import { InputCard, OutputCard, SettingsCard } from '../../components/Summarization';
import { SummarizationInput, SummarizationOutput } from '../../types/summarization';

const fetcher = (url: string, { arg }: { arg: SummarizationInput }) => SummarizationService.getSummary(arg);

const defaultSettings = {
  maxTokens: 60,
  temperature: 0.7,
  topP: 1.0,
  frequencyPenalty: 0.0,
  presencePenalty: 1,
};

export default function Summarization() {
  const [input, setInput] = useState('');
  const [settings, setSettings] = useState(defaultSettings);
  const [output, setOutput] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const { trigger, data, error, isMutating, reset } = useSWRMutation<SummarizationOutput, Error>(
    'summarization',
    fetcher
  );

  const handleSubmit = () =>
    trigger({
      text: input,
      ...settings,
    });

  const handleReset = () => {
    reset();
    setInput('');
  };

  useEffect(() => {
    if (data) setOutput(data.summary);
  }, [data]);

  useEffect(() => {
    if (error) enqueueSnackbar(error.message, { variant: 'error' });
  }, [error]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <InputCard
          value={input}
          isLoading={isMutating}
          onChange={setInput}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SettingsCard values={settings} defaultValues={defaultSettings} setValues={setSettings} />
      </Grid>
      <Grid item xs={12} md={8}>
        <OutputCard title='Summary' placeholder='Your result will be here' text={output} />
      </Grid>
    </Grid>
  );
}
