import { memo, RefObject } from 'react';
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

type Props = {
  index: number;
  containerRef: RefObject<HTMLDivElement>;
};

const ListItem = memo(({ index, containerRef }: Props) => {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => {
    const scrollOffset =
      window.pageYOffset - (containerRef.current?.offsetTop ?? 0);
    history.replace({
      pathname: location.pathname,
      state: {
        scrollOffset: scrollOffset,
      },
    });
  };

  return (
    <Link
      component={RouterLink}
      to={`/${index}`}
      onClick={handleClick}
    >
      <Box
        display="flex"
        alignItems="center"
        height={64}
        mr={[0, 0, 3]}
        px={2}
        boxShadow={4}
      >
        <Typography>item index: {index}</Typography>
      </Box>
    </Link>
  );
});

export default ListItem;
