import { AppBar,Toolbar,Typography, IconButton,makeStyles, Button } from "@material-ui/core";
import CropDinIcon from '@material-ui/icons/CropDin';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow : 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    customBg : {
        backgroundColor : '#750B0B'
    },
    title : {
        flexGrow : 1
    }
}))

const Header = ()=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar classes={{root : classes.customBg}} position="static">  
  <Toolbar variant="dense">
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <CropDinIcon style={{backgroundColor:'white'}} />
    </IconButton>
    <Typography  variant="h5" color="inherit">
      Medical Darpan
    </Typography>
    


    <div className={classes.title} style={{marginLeft : '100px', display:'flex'}}>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            Home
        </Typography>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            Products
        </Typography>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            Distributors
        </Typography>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            Manufacturers
        </Typography>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            About Us
        </Typography>
        <Typography style={{fontWeight: '100', margin:'5px 20px'}} variant="h6" color="inherit">
            Blog 
        </Typography>
    </div>
    
        <Button style={{textTransform:'none'}} color="inherit">
            <Typography style={{fontWeight: '100', margin:'5px'}} variant="h6" color="inherit">
                Login
            </Typography>
        </Button>

        <IconButton style={{marginLeft:'10px'}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <AccountCircleOutlinedIcon fontSize="large" />
    </IconButton>
    
    
  </Toolbar>
</AppBar>
</div>
    )
}

export default Header;