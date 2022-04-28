import React, { useState } from 'react';
import { FormControl, FilledInput, Typography, Box } from '@material-ui/core';
import { makeStyles } from "@mui/styles";
import UploadImage from './UploadImage';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: '.5rem 2rem',
    fontWeight: 'bold',
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toCloud = async (files) => {
      if(files.length > 0){
        const list = [];
        const url = "https://api.cloudinary.com/v1_1/dzwkpezat/image/upload";
        const formData = new FormData();
        try {
          for(let i=0; i < files.length; i++){
            const file = files[i];
            formData.append("file", file);
            formData.append("upload_preset", "jkzsd35e");
  
            await fetch(url, {
              method: "POST",
              body: formData
            })
              .then((response) => {
                return response.text()
              })
              .then((data) => {
                const readOut = JSON.parse(data);
                list.push(readOut.url)
              })
          }
        }catch(error){
          console.error(error)
        }
        return list
      }else{
        return null
      }
    }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const formElements = form.elements;
    const urls = await toCloud(formElements.file.files);
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: urls
    };
    await postMessage(reqBody);
    setLoading(false);
    setText('');
    document.querySelector('input[type=file]').value = '';
    setPreview(false)
  };

  return (
    <Box>
      {loading && <Typography className={classes.text}>Sending...</Typography>}
      <form className={classes.root} onSubmit={handleSubmit}>
        <FormControl fullWidth hiddenLabel>
          <FilledInput
            classes={{ root: classes.input }}
            disableUnderline
            placeholder="Type something..."
            value={text}
            name="text"
            onChange={handleChange}
            endAdornment={<UploadImage
                            preview={preview}
                            setPreview={setPreview}
                          />}
          />
        </FormControl>
      </form>
    </Box>
  );
};

export default Input;
