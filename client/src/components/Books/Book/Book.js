import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './style'
import {likeBook,deleteBook} from '../../../actions/index'
import {useDispatch} from 'react-redux'

const Book = ({book,setCurrentId}) => {
  const classes=useStyles();
  const dispatch=useDispatch();

  return (
     <Card className={classes.card}>
      <CardMedia className={classes.media} image={book.image} title={book.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{book.author}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={()=>{setCurrentId(book._id)}}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{book.price}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{book.discription}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(likeBook(book._id))}}><ThumbUpAltIcon fontSize="small" /> Like </Button>
        <Button size="small" color="primary" onClick={() => {dispatch(deleteBook(book._id))}}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  )
}

export default Book