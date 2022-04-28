import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  FormHelperText
} from '@material-ui/core';
import {ReactComponent as Bubble} from '../images/bubble.svg';

const SignupLogin = (props) => {
  const [align, setAlign] = useState(window.innerWidth > 900 ? 'flex-end' : 'center');
  const screenSize = () => window.innerWidth > 900 ? setAlign('flex-end') : setAlign('center');
  window.addEventListener('resize', screenSize);

    return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={0}
    >

      <Grid item md={4}>
        <Box className='hero-image'>
          <Bubble className="shape" />
          <Box className="hero-text-container">
            <Typography variant="h5" align="center" className="hero-text">
              Converse with anyone
            </Typography>
            <Typography variant="h5" align="center" className="hero-text">
              with any language
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Grid 
          container
          direction="row"
          justifyContent={align}
          >
          <Grid item>
            <Typography color="secondary" id="alt-message">{props.headerTag}</Typography>
          </Grid>
          <Grid item id="alt-button-container">
            <Link href={props.href} to={props.href} className="button-link">
              <Button variant="contained" id="alt-button">{props.headerAction}</Button>
            </Link>
          </Grid>
        </Grid>
        <form onSubmit={props.handleRegister}>
          <Grid 
            container
            direction="column"
            className="form-container"
            rowSpacing={5}
            >
              <Grid item className="input-text">
                <Typography variant="h4" id="header-message">{props.formHeader}</Typography>
              </Grid>
              {props.userName && 
                  <Grid item>
                    <TextField
                        variant="standard"
                        aria-label="username"
                        label="Username"
                        name="username"
                        type="text"
                        className="input-text"
                        inputProps={{
                            style: {
                                fontWeight: "bold"
                            }
                        }}
                        InputLabelProps={{ required: false }}
                        required
                    />
                  </Grid>
              }
              {props.email && 
                <Grid item>
                    <TextField
                    variant="standard"
                    label="E-mail address"
                    aria-label="e-mail address"
                    type="email"
                    name="email"
                    className="input-text"
                    inputProps={{
                        style: {
                            fontWeight: "bold"
                        }
                    }}
                    InputLabelProps={{ required: false }}
                    required
                    />
                </Grid>
              }
              {props.pass1 && 
                  <Grid item>
                    <FormControl error={!!props.formErrorMessage} className="input-text">
                        <TextField
                        variant="standard"
                        aria-label="password"
                        label="Password"
                        type="password"
                        inputProps={{ 
                            minLength: 6, 
                            style: {
                                fontWeight: "bold"
                            }
                        }}
                        name="password"
                        InputLabelProps={{ required: false }}
                        required
                        />
                        <FormHelperText>
                        {props.formErrorMessage}
                        </FormHelperText>
                    </FormControl>
                    </Grid>
              }
              {props.pass2 && 
                <Grid item>
                  <FormControl error={!!props.formErrorMessage} className="input-text">
                    <TextField
                        variant="standard"
                        label="Confirm Password"
                        aria-label="confirm password"
                        type="password"
                        inputProps={{ 
                            minLength: 6, 
                            style: {
                                fontWeight: "bold"
                            }
                        }}
                        InputLabelProps={{ required: false }}
                        name="confirmPassword"
                        required
                    />
                    <FormHelperText>
                        {props.formErrorMessage}
                    </FormHelperText>
                    </FormControl>
                </Grid>
              }
              <Button type="submit" variant="contained" size="large" color="primary" id="main-button">
                {props.formAction}
              </Button>
          </Grid>
        </form>  
      </Grid>
    </Grid>
    )
}

export default SignupLogin;