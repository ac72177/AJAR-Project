import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import plant1 from "../../img/plant1.png"
import plant2 from "../../img/plant2.png"
import plant3 from "../../img/plant3.png"


const useStyles = makeStyles((theme) => ({
    paper1: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant1})`,
    },
    paper2: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant2})`,
    },
    paper3: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant3})`,
    },

}))

function Plant1({classes}) {
    return (
        <Grid plant xs={20}>
            <Paper className={classes.paper1}> </Paper>
        </Grid>
    )
}

function Plant2({classes}) {
    return (
        <Grid plant xs={20}>
            <Paper className={classes.paper2}> </Paper>
        </Grid>
    )
}

function Plant3({classes}) {
    return (
        <Grid plant xs={20}>
            <Paper className={classes.paper3}> </Paper>
        </Grid>
    )
}

export default function Garden(props) {
    const plans = props.plans;

    const classes = useStyles();

    return (
        <div className={"garden"}>
            <div className={"garden_background"}>
                <Grid container spacing={2.5} >
                    <Plant1 classes = {classes} />
                    <Plant2 classes = {classes} />
                    <Plant3 classes = {classes} />
                    <Plant3 classes = {classes} />
                </Grid>
            </div>
        </div>
    )
}
