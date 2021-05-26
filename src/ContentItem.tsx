import { memo } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

type Props = {
  index: number;
}

const ContentItem = memo(({ index }: Props) => (
  <Box
    display="flex"
    alignItems="center"
    height={100}
    border={1}
    borderColor="divider"
    mr={[0, 0, 3]}
    mb={2}
    px={2}
  >
    <Typography>item index: {index}</Typography>
  </Box>
));

export default ContentItem;
