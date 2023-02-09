import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import useSWRMutation from 'swr/mutation';
import SummarizationService from '../../../service/SummarizationService';
import { useSnackbar } from 'notistack';

type Props = {
  onSuccess: (data: object) => void;
};

const fetcher = (url: string, { arg }: { arg: string }) => SummarizationService.getSummary(arg);

export default function InputCard({ onSuccess }: Props) {
  const [value, setValue] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const { trigger, data, error, isMutating, reset } = useSWRMutation('/summarization', fetcher);

  const handleSubmit = () => trigger(value);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value);
  const handleReset = () => {
    reset();
    setValue('');
  };

  useEffect(() => {
    if (data) onSuccess(data);
  }, [data]);

  useEffect(() => {
    if (error) enqueueSnackbar(error.message, { variant: 'error' });
  }, [error]);

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
            disabled={isMutating}
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
            <Button variant='outlined' sx={{ marginRight: 1 }} onClick={handleSubmit} disabled={isMutating}>
              Get Summary
            </Button>
            <Button variant='outlined' color='error' onClick={handleReset} disabled={isMutating}>
              Clear
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
