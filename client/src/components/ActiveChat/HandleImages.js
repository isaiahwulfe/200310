import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

const HandleImages = ({ attachments, text, classes }) => {
    if(attachments && text){
      return attachments.length < 2 ? (
        <Box className={classes.bubble}>
          <Box 
            component="img"
            alt="Your Image"
            src={attachments[0]}
            className={classes.image}
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
                alt="Your Image"
                src={e}
                className={classes.images}
                key={attachments.indexOf(e)}
              />
            )
          })}
        </Box>
      );
    }else{
      return attachments.length < 2 ? (
        <Box 
          component="img"
          alt="Your Image"
          src={attachments[0]}
          className={classes.image}
        />
      ) : (
        <Grid container direction="row" justifyContent="flex-end">
          {attachments.map(e => {
              return(
                <Box 
                  component="img"
                  alt="Your Image"
                  src={e}
                  className={classes.images}
                  key={attachments.indexOf(e)}
                />
              )
            })
          }
        </Grid>
      );
    }
  }

export default HandleImages;