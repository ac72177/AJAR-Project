import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import plant3 from "../../img/plant3.png"
import {blue} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3.5),
        backgroundImage: `url(${plant3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
}))
function GridItem({classes}) {
    return (
        <Grid item xs={15}>
            <Paper className={classes.paper}>item</Paper>
        </Grid>

    )
}

export default function Garden() {
    const classes = useStyles();

    return (
        <div>
            <div className={"garden_view"}>
                <Grid container spacing={1} >
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                    <GridItem classes = {classes} />
                </Grid>
            </div>
        </div>
    )
}

