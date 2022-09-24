import { TextField, makeStyles,Button, InputAdornment,FormGroup, withStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles({
    textField : {
        width : "30%",
        
        margin : '5px 0px 5px 10px'
    }
})

const StyledTextField = withStyles({
    root: {
      "& fieldset": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        
      },
      
      '& .MuiOutlinedInput-root': {
        
        '&.Mui-focused fieldset': {
          borderColor: 'grey',
        },
    }}
  })(TextField);
  
  const StyledButton = withStyles({
    root: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      textTransform: "none",
      backgroundColor : '#00A69A',
      margin : '5px 0px 5px 0px',
      width : '100px',
      "&:hover": {
        backgroundColor: '#00A69A'
      }
      
    }
  })(Button);

const SearchBar = () => {
    const classes = useStyles();
    return (
        
        <FormGroup row>
        <StyledTextField InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
        }} variant="outlined" className={classes.textField} placeholder="Search" size="small" />
        <StyledButton size="small" variant="contained" color="primary" disableElevation>
            Search
        </StyledButton>
        </FormGroup>
    );
}

export default SearchBar;