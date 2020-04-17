import React, { useState } from 'react'
import Fade from 'react-reveal'
import Modal from '@material-ui/core/Modal'

import { makeStyles } from '@material-ui/styles'

import VisibilitySensor from 'react-visibility-sensor'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Box } from '@material-ui/core'

const styles = makeStyles(theme => ({
    
    root: {
        maxHeight: 230,
        width: "100%",
    },
    img : {
        width: "100%"
    },
    imgModal : {
        width: "100%"
    }
}));

export default function(props) {
    const {caption, displayUrl, id} = props
    const classes = styles()
    const [ animate, setAnimate ] = useState(false)
    const [open, setOpen] = React.useState(false);

    function changeHandler(isVisible) {
        setAnimate(isVisible)
        
        if(animate){
            console.log(`notVisible ${id}`)
        }else{
            console.log(`isVisible ${id}`)
        }
    }

    return (
            <>
                <VisibilitySensor onChange={changeHandler}
                    partialVisibility={true}
                    offset={{top:100, bottom:100}}
                >
                    <Fade left when={animate}>
                        <img onClick={() => setOpen(true)} src={displayUrl} className={classes.img} alt={caption} />
                    </Fade>
                </VisibilitySensor>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={() => setOpen(false)}
                    onClick={() => setOpen(false)}
                >
                    <Box height={1} width={1} display="flex" alignItems="center" justifyContent="center" >
                        <TransformWrapper>
                            <TransformComponent>
                                <Fade>
                                    <img src={displayUrl} className={classes.imgModal} alt={caption} />
                                </Fade>
                            </TransformComponent>
                        </TransformWrapper>
                    </Box>
                </Modal>
            </>
            
    )
}

/**
 * <GridList cellHeight={220} className={classes.gridList} cols={cols}>
        {photos.map((tile, index) => (
            <GridListTile id={id+"-GridList"} key={id} className={classes.root} cols={1}>
                <VisibilitySensor onChange={changeHandler} partialVisibility={true} offset={{top:100}}>
                    <Fade left when={animate}>
                        <img src={displayUrl} className={classes.img} alt={caption} />
                    </Fade>
                </VisibilitySensor>
            </GridListTile>
        ))}
    </GridList>
 */