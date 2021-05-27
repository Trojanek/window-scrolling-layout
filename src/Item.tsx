import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Item = () => {
  const { index } = useParams<{ index: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box height={`calc(100vh)`}>
      <Typography>index: {index}</Typography>
    </Box>
  );
};

export default Item;
