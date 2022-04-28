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
    padding: '.5rem 2rem',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
  image: {
    width: '7rem',
    height: '5rem',
  },
  images: {
    width: '7rem',
    height: '5rem',
    borderRadius: '10px 10px 0 10px',
    margin: '.5rem 0 0 .5rem',
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
