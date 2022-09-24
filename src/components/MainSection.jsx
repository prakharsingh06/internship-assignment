import { Grid } from "@material-ui/core";
import Medicines from "./Medicines";
import SideNav from "./SideNav";

const MainSection = ()=> {
    return (
        <Grid style={{margin:'5px 10px'}} container>
            <Grid item xs={2}>
                <SideNav/>
            </Grid>
            <Grid item xs={10}>
                <Medicines/>
            </Grid>
        </Grid>
    );
}

export default MainSection;