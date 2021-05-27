import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Content from './Content';
import Header from './Header';

const APP_BAR_HIGHT = 96;
const FILTERS_HIGHT = 64;
const CONTAINER_PADDING = 24;

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Router>
      <Header
        hideOnScroll={isMobile}
        appBarHight={APP_BAR_HIGHT}
        filtersHight={FILTERS_HIGHT}
      />
      <Content
        appBarHight={APP_BAR_HIGHT}
        filtersHight={FILTERS_HIGHT}
        containerPadding={CONTAINER_PADDING}
      />
    </Router>
  );
};

export default App;
