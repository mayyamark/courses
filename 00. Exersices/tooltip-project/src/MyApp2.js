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

  const childRefs = React.useRef([]);
  const [widths, setWidths] = React.useState({});

  React.useEffect(() => {
    childRefs.current = childRefs.current.slice(0, arr.length);
    
    const widthsControll = childRefs.current.map((el) => {
      return {
        offsetWidth: el.offsetWidth,
        scrollWidth: el.scrollWidth
      }
    });

    setWidths(widthsControll);
  }, [arr]);


  return (<>
    {arr.map((el, index) => (<Box
      key={index}
      p={2}
      boxShadow={2}
      borderTop={3}
      borderColor="#346C9F"
      height="150px"
      width={index === 0 ? '30px' : '100%'}
      className={classes.container}
    >
      <CustomTooltip
        childOffsetWidth={widths.length > 0 ? widths[index].offsetWidth : 0}
        childScrollWidth={widths.length > 0 ? widths[index].scrollWidth : 0}
        title="Add"
      >
        <Typography
          ref={(el2) => {
            childRefs.current[index] = el2;
            }
          }
          variant="h5"
          className={classes.title}
        >
          {el}
        </Typography>
      </CustomTooltip>
    </Box>))}
    </>
  );
}