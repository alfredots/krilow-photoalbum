import React, { useEffect, useState } from 'react'
import { Box, TextField, Button } from '@material-ui/core'
import { fetchInstagramPhotos } from '../../services/instagramFetch'
import { makeStyles } from '@material-ui/styles'
import Bar from '../Bar'
import GridListTile from '@material-ui/core/GridListTile'
import GridList from '@material-ui/core/GridList'
import theme from '../../theme'
import PhotoItem from '../PhotoItem'
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

export default function () {
    const classes = styles()
    const [photos, setPhotos ] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const [cols, setCols] = useState(1)
    const [username, setUser] = useState('')

    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const searchUser = async () => {
        try{
            console.log(username)
            setPhotos(await fetchInstagramPhotos(`https://www.instagram.com/${username}`))
            setLoaded(true)
            handleClose()
        } catch(e) {
            console.error('Fetching Instagram photos failed', e)
        }
    }
    
    useEffect(() => {
        const changeColumns = () => {
            let width = window.innerWidth
            console.log(width)
            if(theme.breakpoints.values.sm < width)
                setCols(2)
            if(theme.breakpoints.values.md < width)
                setCols(3)
        }
        window.onresize = changeColumns
        changeColumns()
    }, [])
    

    useEffect(() => {
        async function loadPhotos() {
            try{
                setPhotos(await fetchInstagramPhotos("https://www.instagram.com/krilow_wallpapers"))
                setLoaded(true)
            } catch(e) {
                console.error('Fetching Instagram photos failed', e)
            }
        }
        loadPhotos()
    }, [])

    if(isLoaded){
        return (
            <>
                <Bar handleOpen={handleOpen}/>
                <Box id="caixa-principal" width={1} marginTop={4} className={classes.root}>
                    <GridList cellHeight={220} className={classes.gridList} cols={cols}>
                        {photos.map((tile, index) => (
                           <GridListTile id={index+"-GridList"} key={index} className={classes.root} cols={1}>
                                <PhotoItem id={index} {...tile}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </Box> 
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Pesquise seu usuário</h2>
                        <p id="simple-modal-description">
                            Caso seu instagram seja fechado não será possível realizar esta função.
                        </p>
                        <TextField onChange={e => setUser(e.target.value)}></TextField>
                        <Button variant="contained" color="primary" onClick={() => searchUser()}>Pesquisar</Button>
                    </div>
                </Modal>
            </>
        )
    }else{
        return(
            <div>carregando...</div>
        )
    }
}
