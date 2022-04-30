import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    height: '5rem',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0'
  },
  images: {
    width: '7rem',
    height: '5rem',
    borderRadius: '10px 10px 0 10px',
    margin: '.5rem 0 0 .5rem',
  },
}))

const HandleImages = ({ attachments, text, classes }) => {
  const styles = useStyles();
  const regex = /\/\w{4,}\./g;
    if(attachments && text){
      return attachments.length < 2 ? (
        <Box className={classes.bubble}>
          <Box 
            component="img"
            alt=""
            src={attachments[0]}
            className={styles.image}
          />
        <Typography className={classes.text}>{text}</Typography>
        </Box>
      ) : (
        <Box>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
          {attachments.map(e => {
            return(
              <Box 
                component="img"
                alt=""
                src={e}
                className={styles.images}
                key={e.match(regex).toString().slice(1, -1)}
              />
            )
          })}
        </Box>
      );
    }else{
      return attachments.length < 2 ? (
        <Box 
          component="img"
          alt=""
          src={attachments[0]}
          className={styles.image}
        />
      ) : (
        <Grid container direction="row" justifyContent="flex-end">
          {attachments.map(e => {
              return(
                <Box 
                  component="img"
                  alt=""
                  src={e}
                  className={styles.images}
                  key={e.match(regex).toString().slice(1, -1)}
                />
              )
            })
          }
        </Grid>
      );
    }
  }

export default HandleImages;