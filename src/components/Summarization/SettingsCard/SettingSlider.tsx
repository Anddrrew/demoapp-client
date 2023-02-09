import { Box, Slider, Stack, Typography } from '@mui/material';

type SliderProps = {
  name: string;
  value: number;
  min?: number;
  step?: number;
  max: number;
  onChange: (value: number) => void;
};

export default function SettingSlider({ name, value, min = 0, step = 1, max, onChange }: SliderProps) {
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography>{name}</Typography>
        <Typography>{value}</Typography>
      </Stack>
      <Slider value={value} step={step} min={min} max={max} onChange={(_, value) => onChange(value as number)} />
    </Box>
  );
}
