import './style.js';
import Form from './components/Form/Form';
import Books from './components/Books/Books.js';
import useStyle from './style';
import {Grid,Grow,Container,Typography,AppBar} from '@material-ui/core'
import bookStore from './assets/bookStore-icon.jpg'
import {getBooks} from './actions/index'
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
function App() {
  const classes=useStyle();
  const dispatch=useDispatch()
  const [currentId,setCurrentId]=useState(0)

  useEffect(()=>{
    dispatch(getBooks())

  },[currentId,dispatch])


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Anees Digital Library</Typography>
        {/* <div><img className={classes.image} src={bookStore} alt="icon" height="60" /></div> */}
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Books setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    )}

export default App;
