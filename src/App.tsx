import { Virtuoso } from 'react-virtuoso';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Header from './Header';

const APP_BAR_HIGHT = 96;
const FILTERS_HIGHT = 64;
const CONTAINER_PADDING = 24;


const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Header
        hideOnScroll={isMobile}
        appBarHight={APP_BAR_HIGHT}
        filtersHight={FILTERS_HIGHT}
      />
      <Box display="flex" alignItems="flex-start" px={[2, 3]} py={`${CONTAINER_PADDING}px`}>
        <Box flexGrow={0} flexShrink={0} flexBasis={['100%', '100%', '60%']}>
          <Virtuoso
            useWindowScroll
            totalCount={5000}
            itemContent={index => <div>Item {index + 1}</div>}
          />
        </Box>
        <Box
          display={['none', 'none', 'flex']}
          position="sticky"
          flexGrow={0}
          flexShrink={0}
          flexBasis="40%"
          height={`calc(100vh - ${APP_BAR_HIGHT + FILTERS_HIGHT + 2 * CONTAINER_PADDING}px)`}
          top={APP_BAR_HIGHT + FILTERS_HIGHT + CONTAINER_PADDING}
        >
          <Box
            flex={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderColor="primary.light"
            border={1}
          >
            <Typography >Map</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
