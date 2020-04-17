import styled, { createGlobalStyle } from 'styled-components'
import Grid from '@material-ui/core/Grid';

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }

    body{
        background: linear-gradient(45deg, #C774E8 30%, #8795e8 90%);
    }
`

export const Container = styled(Grid)`
    
`