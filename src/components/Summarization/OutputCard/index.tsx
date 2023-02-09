import { Card, CardContent, CardHeader } from '@mui/material';

type Props = {
  title: string;
  placeholder: string;
  text: string;
};

export default function OutputCard({ title, text, placeholder }: Props) {
  return (
    <>
      <Card variant='outlined'>
        <CardHeader title={title} />
        <CardContent style={{ paddingTop: 0 }}>{text || placeholder}</CardContent>
      </Card>
    </>
  );
}
