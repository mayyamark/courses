import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  Children,
  cloneElement
} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const CustomTooltip = ({ children, ...rest }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const childRef = useRef(null);

  const checkDimensions = useCallback(() => {
    const { offsetWidth, scrollWidth } = childRef.current;
    setIsOverflowing(scrollWidth > offsetWidth);
  }, []);

  useEffect(() => {
    checkDimensions();
  });

  useEffect(() => {
    window.addEventListener("resize", checkDimensions);
    
    return () => window.removeEventListener("resize", checkDimensions);
  }, [checkDimensions]);

  const childrenComponent = Children.only(
    cloneElement(children, { ref: childRef, noWrap: true })
  );

  return isOverflowing ? (
    <Tooltip {...rest}>{childrenComponent}</Tooltip>
  ) : (
    childrenComponent
  );
};

const Demo = () => {
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
        <CustomTooltip title="Title">
        <Typography variant="h5">Heading Heading Heading</Typography>
        </CustomTooltip>
    </div>
    <hr />
    <div
        style={{
        border: "1px solid black"
        }}
    >
        <CustomTooltip title="Title">
        <Typography variant="h5">Heading Heading Heading</Typography>
        </CustomTooltip>
    </div>
    </>
  );
};

export default Demo;