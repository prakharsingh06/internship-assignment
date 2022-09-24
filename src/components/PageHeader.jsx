import { Typography, Chip, withStyles } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

const StyledChip = withStyles({
    root: {
      borderRadius:'10px',
      color:'white',
      backgroundColor : '#00A69A',
      margin : '5px 5px 5px 10px',
      maxWidth : '200px',
    
      
    },
    

  })(Chip);

const PageHeader = ()=> {
    return (
        <div style={{display:'flex', margin : '5px 10px'}}>
        <Typography style={{fontSize: '25px',fontWeight: '300'}} >Paracetamol</Typography>
        <Typography style={{marginLeft : '10px', marginTop : '5px', fontSize: '20px'}}> (128 Products) </Typography>
        <StyledChip
        label="Aceclofenac"
        onDelete={()=>console.log("deleted")}
        deleteIcon = {<Cancel style={{color:'white'}}/>}
        />
        <StyledChip
        label="500mg"
        onDelete={()=>console.log("deleted")}
        deleteIcon = {<Cancel style={{color:'white'}}/>}
        />
        <Typography style={{marginLeft:'10px', marginTop:'8px',fontSize:'14px',color:'#750B0B',fontWeight:'bold'}}>Remove All</Typography>
        </div>
    )
}

export default PageHeader;