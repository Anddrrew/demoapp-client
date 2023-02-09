import { Button, Card, CardContent, CardHeader, Stack } from '@mui/material';
import SettingSlider from './SettingSlider';
import { SettingsSummarization } from '../../../types/summarization';

type Props = {
  values: SettingsSummarization;
  defaultValues: SettingsSummarization;
  setValues: React.Dispatch<React.SetStateAction<SettingsSummarization>>;
};

export default function SettingsCard({ values, defaultValues, setValues }: Props) {
  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleReset = () => setValues(defaultValues);

  return (
    <Card variant='outlined'>
      <CardHeader title={'Settings'} subheader={'Try to change the settings to get a better result'} />
      <CardContent sx={{ paddingTop: 0, paddingBottom: '16px!important' }}>
        <Stack spacing={2}>
          <SettingSlider
            name={'Max length'}
            value={values.maxTokens}
            max={2000}
            onChange={(v) => handleChange('maxTokens', v)}
          />
          <SettingSlider
            name={'Temperature'}
            value={values.temperature}
            step={0.01}
            max={1}
            onChange={(v) => handleChange('temperature', v)}
          />
          <SettingSlider
            name={'Top P'}
            value={values.topP}
            step={0.01}
            max={1}
            onChange={(v) => handleChange('topP', v)}
          />
          <SettingSlider
            name={'Frequency Penalty'}
            value={values.frequencyPenalty}
            step={0.01}
            max={2}
            onChange={(v) => handleChange('frequencyPenalty', v)}
          />
          <SettingSlider
            name={'Presence Penalty'}
            value={values.presencePenalty}
            step={0.01}
            max={2}
            onChange={(v) => handleChange('presencePenalty', v)}
          />
          <Button variant='outlined' onClick={handleReset}>
            Reset
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
