import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, Box, Grid } from '@material-ui/core';
import Icon from '../../images/file-upload-icon.png';

const useStyles = makeStyles(() => ({
    fileButton: {
        content: '',
        backgroundColor: 'transparent'
    },
    fileInput: {
        opacity: 0, 
        height: 0,
        width: 0
    },
    icon: {
        height: '1.5rem',
        width: '1.5rem', 
        '&:hover': {
            filter: 'drop-shadow(0 0 0.75rem gray)'
        }
    },
    thumbnail: {
        position: 'relative',
        top: '.2rem',
        width: '3rem',
        height: '3rem',
        objectFit: 'cover',
        marginRight: '.25rem',
        borderRadius: '6px',
        filter: 'drop-shadow(0 0 0.1rem black)'
    }
}))

const UploadImage = (props) => {
    const styles = useStyles();
    const regex = /\w{5,}$/g;
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
            setImageDisplay(imageArray)
        }
    }, [input, props.preview])

    return (
        <Grid container direction="row" justifyContent="flex-end">
            {imageDisplay &&
                <Grid item>
                    {imageDisplay.map(e => {
                        return (
                            <img 
                                key={e.match(regex).toString()}
                                src={e}
                                className={styles.thumbnail}
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
                    className={styles.fileButton}
                >
                    <Box 
                        component="img"
                        alt="Upload"
                        src={Icon}
                        className={styles.icon}
                    />
                    <input type="file" className={styles.fileInput} name="file" onInput={loadPreview} multiple />
                    
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default UploadImage;