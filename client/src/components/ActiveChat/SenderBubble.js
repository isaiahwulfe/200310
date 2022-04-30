import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@material-ui/core';
import HandleImages from './HandleImages';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    fontWeight: 'bold',
    textAlign: 'center', 
    padding: '0 2rem .25rem 2rem',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.date}>{time}</Typography>
      {attachments ? <HandleImages 
                        attachments={attachments}
                        text={text}
                        classes={classes}
                     /> : (
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SenderBubble;
