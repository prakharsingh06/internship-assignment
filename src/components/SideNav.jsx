import { Typography, Box, Chip, withStyles } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

const StyledChip = withStyles({
    root: {
      borderRadius:'10px',
      color:'white',
      backgroundColor : '#00A69A',
      margin : '5px',
      width : '90%',
      height:'30px',
      
      
    },
    

  })(Chip);


const SideNav = ()=>{
    return (
        <>
       <Box style={{width:'90%',backgroundColor:'white'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Related Category</Typography>
        </Box>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Paracetamol Tablets</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Paracetamol Syrup</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Paracetamol Powder</Typography>
        <StyledChip
        label="Aceclofenac"
        deleteIcon={<Cancel style={{color:'white'}}/>}
        onDelete={()=>console.log("Deleted")}
        />
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Magaladrate Simethicone Oral Suspension</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Mefenamic Paracetamol Syrup</Typography>
        </Box>
        <Box style={{width:'90%', backgroundColor:'white', marginTop:'20px'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Related Brands</Typography>
        </Box>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Cipmol Paracetamol</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Pandal Paracetamol Tablets</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Combiflam</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Crocin Tablets</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Calpol Paracetamol Tablets</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Sumo Tablet</Typography> 

       </Box>
       <Box style={{width:'90%', backgroundColor:'white', marginTop:'20px'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Business Type</Typography>
        </Box>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Wholeseller</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Retailer</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Manufacturer</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Exporter</Typography>
        
       </Box>
       <Box style={{width:'90%', backgroundColor:'white', marginTop:'20px'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Strength</Typography>
        </Box>
        <StyledChip
        label="500 mg"
        deleteIcon={<Cancel style={{color:'white'}}/>}
        onDelete={()=>console.log("Deleted")}
        />
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>650 mg</Typography>
        </Box>
        <Box style={{width:'90%', backgroundColor:'white', marginTop:'20px'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Manufacturer</Typography>
        </Box>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Intas Pharmaceutical Ltd.</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Alkem Laboratories Ltd.</Typography>
        </Box>
        <Box style={{width:'90%', backgroundColor:'white', marginTop:'20px'}}>
        <Box style={{backgroundColor:'#D9D9D9', height:'40px',width:'100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Typography style={{fontWeight:'600',fontSize:'14px'}}>Prescription / Non-Prescription</Typography>
        </Box>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Intas Pharmaceutical Ltd.</Typography>
        <Typography style={{fontWeight:'600', margin:'10px', fontSize:'12px'}}>Alkem Laboratories Ltd.</Typography>
        </Box>
       </>
    )
}

export default SideNav;