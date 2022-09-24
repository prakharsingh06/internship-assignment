import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    border: '1px solid #b3b3b3',
    borderBottom : '15px solid #750B0B',
    borderRadius:'10px'
  },
  heading :{
    fontSize : 16,
    fontWeight : 600,
    textAlign : 'center',
    marginTop : '8px'
},
text : {
    color : '#750B0B',
    fontSize : 20,
    fontWeight:'bold',  
    textAlign:'center'          
},
});

const SingleCard= ()=> {
  const classes = useStyles();
  const url = "https://www.thehindu.com/sci-tech/health/qqe11f/article31879293.ece/alternates/LANDSCAPE_615/fabiflujpg"
   
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img src={url} alt="Fabiflu" height="250px" width="425px" style={{margin:'10px'}}/>
        
        <CardContent>
        <Typography className={classes.heading}>
                Favipiravir 400mg (Fabiflu) Tablets
        </Typography>
        <Typography className={classes.text}>
                Rs 1,775 <span style={{color:'grey', fontWeight: '300' }}>/ stripe</span>
            </Typography> 
                
            <Typography className={classes.heading} style={{fontSize: '14px'}}>
                Glenmark Pharmaceutical Limited
            </Typography>
            <Typography style={{fontSize:'14px',color:'grey',textAlign:'center', fontWeight:'bold'}}>
                PARVAT PATIYA, SURAT, GUJARAT
            </Typography>
            
        </CardContent>
        <div style={{borderTop:'1px solid #b3b3b3',display: 'flex',
    alignItems: 'center', justifyContent:'center', height: '40px',
    flexWrap: 'wrap'}}>

        
        <TelegramIcon size="large" style={{color:"#048075"}}/>
        <span style={{fontSize:'20px',color:'#048075',fontWeight:'bold'}}>
                Contact Supplier
         </span>
             
        </div>
      </CardActionArea>
    </Card>
  );
}

export default SingleCard;
