import { Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Item from './Item';
import List from './List';

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
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route path="/:index">
          <Item />
        </Route>
      </Switch>
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
