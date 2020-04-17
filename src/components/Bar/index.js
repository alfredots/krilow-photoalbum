import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
}));



  

export default function index(props) {
    const classes = styles()
    const { handleOpen } = props

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Krilow Photos
                    </Typography>
                    <Button color="inherit" onClick={() => handleOpen()}>Pesquisar</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
