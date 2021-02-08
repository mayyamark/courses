import React, { useState, useRef, useCallback, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { debounce } from 'lodash';

// const debounce = (func, delay) => {
//   let inDebounce;
//   return function() {
//     const context = this;
//     const args = arguments;
//     clearTimeout(inDebounce);
//     inDebounce = setTimeout(() => func.apply(context, args), delay);
//   }
// }

// const throttle = (func, limit) => {
//   let inThrottle
//   return function() {
//     const args = arguments
//     const context = this
//     if (!inThrottle) {
//       func.apply(context, args)
//       inThrottle = true
//       setTimeout(() => inThrottle = false, limit)
//     }
//   }
// }

const TextWithTooltip = ({ children, tooltipProps, ...textProps }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const childRef = useRef(null);

  const checkDimensions = useCallback(() => {
    const { scrollWidth, offsetWidth } = childRef.current;
    setIsOverflowing(scrollWidth > offsetWidth);
  }, []);

  useEffect(() => {
    checkDimensions();
  });
  useEffect(() => {
    const debouncedCheckDimensions = debounce(checkDimensions, 300);
    window.addEventListener("resize", debouncedCheckDimensions);

    return () => window.removeEventListener("resize", debouncedCheckDimensions);
  }, [checkDimensions]);

  const text = React.useMemo(
    () => (
      <Typography ref={childRef} noWrap {...textProps}>
        {children}
      </Typography>
    ),
    [textProps, children]
  );

  return isOverflowing ? (
    <Tooltip title={children} {...tooltipProps}>
      {text}
    </Tooltip>
  ) : (
    text
  );
};

const App = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        RESIZE
      </button>
      <hr />
      <div
        style={{
          border: "1px solid black",
          width: isActive ? "200px" : "300px"
        }}
      >
        <TextWithTooltip variant="h5">Heading Heading Heading</TextWithTooltip>
      </div>
      <hr />
      <div
        style={{
          border: "1px solid black"
        }}
      >
        <TextWithTooltip variant="h5" tooltipProps={{ placement: 'top' }} >Heading Heading Heading</TextWithTooltip>
      </div>
    </>
  );
};

export default App;
