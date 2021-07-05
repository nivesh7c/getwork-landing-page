import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, InputBase,  Divider, Slide,IconButton} from '@material-ui/core';
import Image from 'next/image';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
 
    search_btn:{
    display:'flex',
    padding:"20px", 
    flexDirection:"row", 
    justifyContent:"space-between"
  },

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSearch() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  color="inherit" onClick={handleClickOpen} style={{padding:"0px"}}>
     
      <Image
        src="/svg/search.svg"
        alt="Getwork"
        width="20px"
        height="20px"
      />
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <div className={classes.search_btn}>
         <IconButton type="submit" className={classes.iconButton} aria-label="search">
           <SearchIcon />
         </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'Search Here' }}
      />
      <IconButton type="submit" onClick={handleClose}  className={classes.iconButton} aria-label="search">
        <CloseIcon/>
      </IconButton>
        </div>       

          <Divider/>
      </Dialog>
    </div>
  );
}
