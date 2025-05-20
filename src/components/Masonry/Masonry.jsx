import { useState, useEffect, useMemo, useRef } from 'react';
import { useTransition, a } from '@react-spring/web';
import './Masonry.css';

function Masonry({ data }) {
  const [columns, setColumns] = useState(2);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia('(min-width: 1500px)').matches) {
        setColumns(5);
      } else if (window.matchMedia('(min-width: 1000px)').matches) {
        setColumns(4);
      } else if (window.matchMedia('(min-width: 600px)').matches) {
        setColumns(3);
      } else {
        setColumns(1); // Breakpoint for mobile devices
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const ref = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0);
    let gridItems = data.map((child) => {
      const column = heights.indexOf(Math.min(...heights));
      const x = (width / columns) * column;
      const y = (heights[column] += child.height / 2) - child.height / 2;
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, data, width]);

  const transitions = useTransition(gridItems, {
    keys: (item) => item.id, // Use a unique key based on the id
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  const handleImageClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  // Render the grid
  return (
    <>
      <div ref={ref} className='masonry' style={{ height: Math.max(...heights) }}>
        {transitions((style, item) => (
          <a.div 
            key={item.id} 
            style={style}
            onClick={() => handleImageClick(item)}
            className="masonry-item"
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                cursor: 'pointer',
              }}
            />
          </a.div>
        ))}
      </div>

      {/* Full-screen modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>×</button>
            <img 
              src={selectedItem.image} 
              alt="Full screen" 
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Masonry;