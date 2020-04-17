import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Router from '../routes'
import Bar from '../components/Bar'
//styles
import {Container, GlobalStyle} from './styles'
import { ThemeProvider, responsiveFontSizes  } from '@material-ui/core/styles';
import theme from '../theme'

export default function UI(){

  return (
    <>
      <CssBaseline/>
      <GlobalStyle/> 
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <Container container direction="row" justify="center">
          <Grid id="center-container" item xs={12} sm={10}>
            <Router/>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}