import { Breadcrumbs, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
const BreadcrumbsNav = ()=> {
    return (
        <Breadcrumbs style={{margin : '5px 10px'}} separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Typography color="inherit" href="#">
          Medical Darpan
        </Typography>
        <Typography color="inherit" href="#">
          Search
        </Typography>
        <Typography style={{fontWeight: 'bold'}}color="textPrimary">Fabiflu</Typography>
      </Breadcrumbs>
    );
}

export default BreadcrumbsNav;