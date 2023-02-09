import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material';
import { ChangeEvent } from 'react';

type Props = {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
};

export default function InputCard({ value, isLoading, onChange, onSubmit, onReset }: Props) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value);

  return (
    <>
      <Card variant='outlined' sx={{ height: '100%', display: 'flex', flexFlow: 'column nowrap' }}>
        <CardHeader title='Summarization' subheader='Enter your text below and we will give you a summary' />
        <CardContent sx={{ paddingTop: 0, flex: '1 1 auto' }}>
          <TextField
            value={value}
            onChange={handleChange}
            fullWidth
            placeholder='Enter text...'
            disabled={isLoading}
            multiline
            sx={{
              height: '100%',
              '& .MuiInputBase-root': {
                alignItems: 'baseline',
                height: '100%',
              },
            }}
          />
        </CardContent>
        <CardActions style={{ paddingTop: 0 }}>
          <Box mx={1} mb={1}>
            <Button variant='outlined' sx={{ marginRight: 1 }} onClick={onSubmit} disabled={isLoading}>
              Get Summary
            </Button>
            <Button variant='outlined' color='error' onClick={onReset} disabled={isLoading}>
              Clear
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
