import React, { useState, useEffect } from "react";
import { IconButton, Box, Grid } from '@material-ui/core';
import './UploadImage.css';
import Icon from '../../images/file-upload-icon.png';

const UploadImage = (props) => {
    const [imageDisplay, setImageDisplay] = useState();
    const [input, setInput] = useState(); 

    const loadPreview = () => {
        setInput(document.querySelector('input[type=file]'));
        props.setPreview(true)
    }

    useEffect(() => {
        if(input){
            const images = input.files;
            const imageArray = [];
            if(images.length > 0){
                for(const file of images){
                    imageArray.push(URL.createObjectURL(file))
                }
            }; 
            setImageDisplay(imageArray);
        }
    }, [input, props.preview])

    return (
        <Grid container direction="row" justifyContent="flex-end">
            {imageDisplay &&
                <Grid item>
                    {imageDisplay.map(e => {
                        return (
                            <img 
                                key={imageDisplay.indexOf(e)}
                                src={e}
                                className="thumbnail"
                                alt="thumbnail"
                            />
                        )
                    })}
                </Grid>
            }

            <Grid item>
                <IconButton
                    variant="contained"
                    component="label"
                    id="file-button"
                >
                    <Box 
                        component="img"
                        alt="Upload"
                        src={Icon}
                        className="icon"
                    />
                    <input type="file" id="file-input" name="file" onInput={loadPreview} multiple />
                    
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default UploadImage;