import React from 'react';
import Grid from "@material-ui/core/Grid";
import plant1 from "../../img/plant1.png";
import plant3 from "../../img/plant3.png";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    plant3: {
        backgroundColor: "transparent",
        padding: theme.spacing(5),
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${plant3})`,
        color: "white",
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
        <Grid className={"plant"} xs={10}>
            <Paper className={classes.plant1}> </Paper>
        </Grid>
    )
}
function Plant3({classes}) {
    return (
        <Grid plant xs={10}>
            <Paper className={classes.plant3}> </Paper>
        </Grid>
    )
}

export default function Garden(props) {
    const plans = props.plan;
    console.log(plans);
    // const plans = [{id: 1, title: "plan 1", isComplete: false},{id: 2, title:"plan 2", isComplete: true}, {id: 3, title:"plan 3", isComplete: true}];

    const notCompletedPlans = plans.filter(function (el) {
        return el.isComplete === false;
    });

    const completedPlans = plans.filter(function (el) {
        return el.isComplete === true;
    });

    const classes = useStyles();

    return (
        <div className={"garden"}>
            <Grid container spacing={2.5} className={"garden_background"}>
                {notCompletedPlans.map(plan => (
                    <Grid key={plan.id} item>
                        <Plant1 classes={classes} />
                        <p> {plan.title}</p>
                    </Grid>
                ))}
                {completedPlans.map(plan => (
                    <Grid key={plan.id} item>
                        <Plant3 classes={classes} />
                        <p> {plan.title}</p>
                    </Grid>
                ))}
            </Grid>
        </div>
    )

}