import React from 'react';
import { useRanger } from '@tanstack/react-ranger';

const MyRanger = ({ min = 1, max = 100, onChange }) => {
  const rangerRef = React.useRef(null);
  const [values, setValues] = React.useState([min, max]);

  const rangerInstance = useRanger({
    getRangerElement: () => rangerRef.current,
    values,
    min,
    max,
    stepSize: 1,
    onChange: (instance) => {
      setValues(instance.sortedValues);
      if (typeof onChange === 'function') {
        onChange(instance.sortedValues);
      }
    },
  });

  React.useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(values);
    }
  }, [values, onChange]);

  return (
    <div>
      <div
        ref={rangerRef}
        style={{
          position: 'relative',
          userSelect: 'none',
          height: '6px',
          background: '#a3a3a3',
          borderRadius: '3px',
        }}
      >
        {rangerInstance.handles().map(
          (
            { value, onKeyDownHandler, onMouseDownHandler, onTouchStart, isActive },
            i
          ) => (
            <button
              key={i}
              onKeyDown={onKeyDownHandler}
              onMouseDown={onMouseDownHandler}
              onTouchStart={onTouchStart}
              role="slider"
              aria-valuemin={rangerInstance.options.min}
              aria-valuemax={rangerInstance.options.max}
              aria-valuenow={value}
              style={{
                position: 'absolute',
                top: '50%',
                left: `${rangerInstance.getPercentageForValue(value)}%`,
                zIndex: isActive ? '1' : '0',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                outline: 'none',
                borderRadius: '100%',
                background: '#0d6efd',
                border: 'solid 2px #0d6efd',
              }}
            />
          )
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
        <span>{values[0]}€</span>
        <span>{values[1]}€</span>
      </div>
    </div>
  );
};

export default MyRanger;
