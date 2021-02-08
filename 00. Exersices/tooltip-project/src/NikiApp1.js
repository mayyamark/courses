import React, {
  useRef,
  useState,
  useEffect,
  Children,
  cloneElement
} from "react";
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

const CustomTooltip = ({ children, ...rest }) => {
  const typoRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const { offsetWidth, scrollWidth } = typoRef.current;

    setIsOverflowing(scrollWidth > offsetWidth);
  });

  const childrenAsComponent = Children.only(
    cloneElement(children, { ref: typoRef, noWrap: true })
  );

  return isOverflowing ? (
    <Tooltip {...rest}>{childrenAsComponent}</Tooltip>
  ) : (
    childrenAsComponent
  );
};

const App = ({ arr }) => {
  const [isRed, setIsRed] = useState(true);
  const classes = useStyles();
  return (<>
    {arr.map((el, index) => (<Box
      key={index}
      p={2}
      boxShadow={2}
      borderTop={3}
      borderColor="#346C9F"
      height="150px"
      width={index === 0 ? '30px' : '100%'}
      style={{
        border: `5px solid ${isRed ? "red" : "blue"}`,
        width: isRed ? "200px" : "900px"
      }}
      className={classes.container}
      onClick={() => {
        setIsRed(!isRed);
      }}
    >
      <CustomTooltip
        title="Add"
      >
        <Typography
          variant="h5"
          className={classes.title}
        >
          {el}
        </Typography>
      </CustomTooltip>
    </Box>))}
    </>
  );
};

export default App;

