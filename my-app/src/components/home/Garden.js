import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import plant3 from "../../img/plant3.png"


const useStyles = makeStyles((theme) => ({
        paper: {
            backgroundColor: "transparent",
            padding: theme.spacing(4),
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${plant3})`,
        }
}))

function GridItem({classes}) {
    return (
        <Grid plant xs={20}>
            <Paper className={classes.paper}> </Paper>
        </Grid>
    )
}

export default function Garden() {
    const classes = useStyles();

    return (
        <div className={"garden"}>
            <div className={"garden_background"}>
                <Grid container spacing={2.5} >
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
