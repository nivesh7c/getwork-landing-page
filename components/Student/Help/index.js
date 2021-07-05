import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography,Button,Tooltip,Fab,Hidden } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Image from 'next/image';
import Zoom from '@material-ui/core/Zoom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
 // color: theme.palette.text.secondary,
 backgroundColor:"none",
 border:"none",
 boxShadow:"none"
  },
  img:{
      borderRadius:"50%"
  }
}));

const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      padding:"10px",
      boxShadow: "none",
      borderRadius:"30px",
      fontSize: 12,
    
    },
  }))(Tooltip);
export default function Help() {
  const classes = useStyles();
  const [tooltipIsOpen, setTooltipIsOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Hidden smUp>
    <LightTooltip   open={tooltipIsOpen}
     
     TransitionComponent={Zoom}  title="I can help you in Interviews" placement="right-start" arrow>
     <Fab color="primary" className={classes.fab}>
      <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
      </Fab>
    </LightTooltip>
    </Hidden>
      <Grid container spacing={3}>
   
        <Grid item xs>
        <Hidden smDown>
          <div style={{height: '254px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',}}>

          <div>
      <LightTooltip   open={tooltipIsOpen}
     
      TransitionComponent={Zoom}  title="I can help you in Interviews" placement="right-start" arrow>
      <Fab color="primary" className={classes.fab}>
       <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
       </Fab>
     </LightTooltip>
    
   
</div>
<div style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'flex-end',}}>
      <LightTooltip   open={tooltipIsOpen}
      
       TransitionComponent={Zoom}  title="I can help you in Interviews" placement="left-start" arrow>
      <Fab color="primary" className={classes.fab}>
       <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
       </Fab>
     </LightTooltip>
    
    </div>
          </div>
          </Hidden>
        </Grid>
     
        <Grid item xs={6}>
          <div style={{display: 'flex',
flexDirection: 'column',
alignItems: 'center',}}>
          <Typography variant="h2" >Need help in Job Application?</Typography>
          <br/>
          <Typography variant="body2"> Whatever settling goodness too and honoured she building answered her. Strongly thoughts</Typography>
          <br/>
          <Button variant="contained" color="primary" size="small" style={{boxShadow:"none",padding:"10px"}} ><Typography variant="h6" color="inherit"> Contact our expert</Typography></Button>
         </div>
         
        </Grid>
        <Grid item xs>
        <Hidden smDown>
        <div style={{height: '254px',
display: 'flex',
flexDirection: 'column',
justifyContent: 'space-between',

}}>

          <div style={{display: 'flex',
flexDirection: 'row',justifyContent: 'flex-end',}}>
      <LightTooltip   open={tooltipIsOpen}
         TransitionComponent={Zoom}  title="I can help you in Interviews" placement="right-start" arrow>
      <Fab color="primary" className={classes.fab}>
       <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
       </Fab>
     </LightTooltip>
    
   
</div>
<div style={{display: 'flex',
flexDirection: 'row',
justifyContent: 'flex-start',}}>
      <LightTooltip   open={tooltipIsOpen}
    TransitionComponent={Zoom}  title="I can help you in Interviews" placement="left-start" arrow>
      <Fab color="primary" className={classes.fab}>
       <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
       </Fab>
     </LightTooltip>
    
    </div>
          </div>
          </Hidden>
        </Grid>
      </Grid>
      <Hidden smUp>
    <LightTooltip   open={tooltipIsOpen}
     
     TransitionComponent={Zoom}  title="I can help you in Interviews" placement="right-start" arrow>
     <Fab color="primary" className={classes.fab}>
      <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
      </Fab>
    </LightTooltip>
    </Hidden>
      <Hidden smUp>
      <div style={{display: 'flex',
flexDirection: 'row',justifyContent: 'flex-end',marginTop:"5px"}}>
      <LightTooltip   open={tooltipIsOpen}
         TransitionComponent={Zoom}  title="I can help you in Interviews" placement="right-start" arrow>
      <Fab color="primary" className={classes.fab}>
       <Image src="/png/men.png" height="140px" className={classes.img} width="140px" />
       </Fab>
     </LightTooltip>
  
   
</div>
</Hidden>
    </div>
  );
}
