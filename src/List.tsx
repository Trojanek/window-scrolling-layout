import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import ListItem from './ListItem';

type Location = {
  scrollOffset?: number;
};

const List = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation<Location>();
  const scrollOffset = location.state?.scrollOffset ?? 0;

  return (
    <div ref={containerRef}>
      <Virtuoso
        useWindowScroll
        initialScrollTop={scrollOffset}
        totalCount={5000}
        itemContent={index =>
          <ListItem
            index={index}
            containerRef={containerRef}
          />
        }
      />
    </div>
  );
};

export default List;
