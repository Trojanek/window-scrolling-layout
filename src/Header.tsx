import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HideOnScroll from './HideOnScroll';

type Props = {
  hideOnScroll?: boolean;
  appBarHight: number;
  filtersHight: number;
};

const Header = ({ hideOnScroll = false, appBarHight, filtersHight }: Props) => (
  <>
    <HideOnScroll threshold={appBarHight} disable={!hideOnScroll}>
      <AppBar color="inherit" position="sticky">
        <Toolbar>
        <Box display="flex" alignItems="center" height={appBarHight}>
          <Link
            component={RouterLink}
            to="/"
            variant="h6"
          >
            Go to Home
          </Link>
        </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
    <Box
      height={filtersHight}
      display="flex"
      top={hideOnScroll ? 0 : appBarHight}
      left="0"
      right="0"
      px={[2, 3]}
      boxShadow={4}
      alignItems="center"
      position="sticky"
      bgcolor="background.paper"
      zIndex={1}
    >
      <Typography>Tabs</Typography>
    </Box>
  </>
);

export default Header;
