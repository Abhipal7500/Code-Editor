import React from 'react'
import{AppBar,Toolbar,styled} from '@mui/material'

const Container=styled(AppBar)`
background:#060606;
height:8vh;
`

export default function Header() {
  return (
    <div>
      <Container position='statics'>
        <Toolbar>
           <img src="" alt="logo" style={{width:40}}/>
        </Toolbar>
      </Container>
    </div>
  )
}
 