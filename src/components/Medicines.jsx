import SingleCard from "./SingleCard";
import { Grid } from "@material-ui/core";

const Medicines = ()=> {
    return (
        <>
        <Grid  container>
            <Grid item xs={4}>
                <SingleCard/>
            </Grid>
            <Grid item xs={4}>
                <SingleCard/>
            </Grid>
            <Grid item xs={4}>
                <SingleCard/>
                
            </Grid>
        </Grid>
        <Grid style={{marginTop:'10px'}} container>
        <Grid item xs={4}>
            <SingleCard/>
        </Grid>
        <Grid item xs={4}>
            <SingleCard/>
        </Grid>
        <Grid item xs={4}>
            <SingleCard/>
        </Grid>
    </Grid>
    </>
        
    );
}

export default Medicines;