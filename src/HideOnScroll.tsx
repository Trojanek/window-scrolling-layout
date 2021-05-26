import { ReactElement } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

type Props = {
  threshold?: number;
  disable?: boolean;
  children: ReactElement;
};

const HideOnScroll = ({ threshold = 100, disable = false, children }: Props) => {
  const scrollTrigger = useScrollTrigger({ threshold });
  const slideIn = disable || !scrollTrigger;

  return (
    <Slide appear={false} direction="down" in={slideIn}>
      {children}
    </Slide>
  );
}

export default HideOnScroll;
