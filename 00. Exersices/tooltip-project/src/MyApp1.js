import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    '&:hover': {
    backgroundColor: 'gray',
    color: '#FFF',
    },
    '@media (max-width: 330px)': {
    width: '250px'
    }
  },
  title: {
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: '600',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
}));

const CustomTooltip = ({
  children,
  childOffsetWidth,
  childScrollWidth,
  ...rest
}) => {
  console.log(childScrollWidth, childOffsetWidth)
  return (
    <>
      {(childScrollWidth > childOffsetWidth) ? (
        <Tooltip {...rest}>{children}</Tooltip>
      ) : <>{children}</>}
    </>
  );
};

export default function App({ arr }) {
  const classes = useStyles();

  const childRef = React.useRef();
  const [refVisible, setRefVisible] = React.useState(false);
  const [width, setWidth] = React.useState({});

  React.useEffect(() => {
    if (refVisible) {
      setWidth({
        offsetWidth: childRef.current.offsetWidth,
        scrollWidth: childRef.current.scrollWidth
      });
    }
  }, [refVisible]);


  return (
    <Box
      p={2}
      boxShadow={2}
      borderTop={3}
      borderColor="#346C9F"
      height="150px"
      width="100%"
      className={classes.container}
    >
      <CustomTooltip
        childOffsetWidth={width.offsetWidth}
        childScrollWidth={width.scrollWidth}
        title="Add"
      >
        <Typography
          ref={(el) => {
            childRef.current = el;
            setRefVisible(!!el);
          }}
          variant="h5"
          className={classes.title}
        >
          h5. Heading
        </Typography>
      </CustomTooltip>
    </Box>  
  );
}