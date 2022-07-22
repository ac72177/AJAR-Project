import React from 'react';
import Grid from "@material-ui/core/Grid";
import plant1 from "../../img/plant1.png";
import plant2 from "../../img/plant2.png";
import plant3 from "../../img/plant3.png";
import plant4 from "../../img/plant4.png";
import plant5 from "../../img/plant5.png";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    plant5: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant5})`,
        color: "white",
    },
    plant4: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant4})`,
        fontcolor: "white",
    },
    plant3: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant3})`,
        color: "white",
    },
    plant2: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant2})`,
        fontcolor: "white",
    },
    plant1: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant1})`,
        fontcolor: "white",
    },
}))
function Plant1({classes}) {
    return (
        <Grid xs={1}>
            <Paper className={classes.plant1}> </Paper>
        </Grid>
    )
}
function Plant2({classes}) {
    return (
        <Grid xs={1}>
            <Paper className={classes.plant2}> </Paper>
        </Grid>
    )
}

function Plant3({classes}) {
    return (
        <Grid xs={1}>
            <Paper className={classes.plant3}> </Paper>
        </Grid>
    )
}
function Plant4({classes}) {
    return (
        <Grid xs={1}>
            <Paper className={classes.plant4}> </Paper>
        </Grid>
    )
}

function Plant5({classes}) {
    return (
        <Grid xs={1}>
            <Paper className={classes.plant5}> </Paper>
        </Grid>
    )
}

export default function Garden(props) {
    const plans = props.plans;
    console.log(plans);

    const notCompletedPlans = plans.filter(function (el) {
        return el.isComplete === false;
    });

    const completedPlans = plans.filter(function (el) {
        return el.isComplete === true;
    });

    const classes = useStyles();

    return (
        // <div className={"garden"}>
            <Grid container direction="row" className={"garden_background"}>
                {/*<div className={"garden_background"}>*/}
                    {notCompletedPlans.map(plan => (
                        <Grid key={plan.id} >
                            <Plant1 classes={classes} />
                            <p> {plan.name}</p>
                        </Grid>
                    ))}
                    {completedPlans.map(plan => (
                        <Grid key={plan.id} >
                            <Plant3 classes={classes} />
                            <p color={"white"}> {plan.name}</p>
                        </Grid>
                    ))}
                {/*</div>*/}

            </Grid>
        // </div>
    )

}