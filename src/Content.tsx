import { Virtuoso } from 'react-virtuoso';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ContentItem from './ContentItem';

type Props = {
  appBarHight: number;
  filtersHight: number;
  containerPadding: number;
}

const Content = ({ appBarHight, filtersHight, containerPadding }: Props) => (
  <Box
    display="flex"
    alignItems="flex-start"
    px={[2, 3]}
    py={`${containerPadding}px`}
  >
    <Box flexGrow={0} flexShrink={0} flexBasis={['100%', '100%', '60%']}>
      <Virtuoso
        useWindowScroll
        totalCount={5000}
        itemContent={index => <ContentItem index={index} />}
      />
    </Box>
    <Box
      display={['none', 'none', 'flex']}
      position="sticky"
      flexGrow={0}
      flexShrink={0}
      flexBasis="40%"
      height={`calc(100vh - ${appBarHight + filtersHight + 2 * containerPadding}px)`}
      top={appBarHight + filtersHight + containerPadding}
    >
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="primary.light"
      >
        <Typography>Map</Typography>
      </Box>
    </Box>
  </Box>
);

export default Content;
