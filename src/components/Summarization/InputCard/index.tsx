import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { ChangeEvent } from 'react';
import { useSnackbar } from 'notistack';

const MAX_LENGTH = 3000;

type Props = {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onReset: () => void;
};

export default function InputCard({ value, isLoading, onChange, onSubmit, onReset }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value);
  const handleSubmit = () => {
    if (value.length) onSubmit();
    else enqueueSnackbar('Enter your text into form', { variant: 'warning' });
  };

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
            <LoadingButton
              variant='outlined'
              sx={{ marginRight: 1 }}
              onClick={handleSubmit}
              loading={isLoading}
              disabled={value.length > MAX_LENGTH}
            >
              Get Summary
            </LoadingButton>
            <Button variant='outlined' color='error' onClick={onReset} disabled={isLoading}>
              Clear
            </Button>
          </Box>
          <Typography ml='auto' mr={1} color={value.length > MAX_LENGTH ? 'red' : ''}>
            {value.length}/{MAX_LENGTH}
          </Typography>
        </CardActions>
      </Card>
    </>
  );
}
