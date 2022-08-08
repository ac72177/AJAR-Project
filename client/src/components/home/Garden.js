import React from "react";
import Grid from "@material-ui/core/Grid";
import plant1 from "../../img/plant1.png";
import plant2 from "../../img/plant2.png";
import plant3 from "../../img/plant3.png";
import plant4 from "../../img/plant4.png";
import plant5 from "../../img/plant5.png";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  plant5: {
    backgroundColor: "transparent",
    padding: theme.spacing(5),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${plant5})`,
    color: "white",
  },
  plant4: {
    backgroundColor: "transparent",
    padding: theme.spacing(5),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${plant4})`,
    fontcolor: "white",
  },
  plant3: {
    backgroundColor: "transparent",
    padding: theme.spacing(5),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${plant3})`,
    color: "white",
  },
  plant2: {
    backgroundColor: "transparent",
    padding: theme.spacing(5),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${plant2})`,
    fontcolor: "white",
  },
  plant1: {
    backgroundColor: "transparent",
    padding: theme.spacing(5),
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${plant1})`,
    fontcolor: "white",
  },
}));
function Plant1({ classes }) {
  return (
    <Grid>
      <Paper className={classes.plant1}> </Paper>
    </Grid>
  );
}
function Plant2({ classes }) {
  return (
    <Grid>
      <Paper className={classes.plant2}> </Paper>
    </Grid>
  );
}

function Plant3({ classes }) {
  return (
    <Grid>
      <Paper className={classes.plant3}> </Paper>
    </Grid>
  );
}
function Plant4({ classes }) {
  return (
    <Grid>
      <Paper className={classes.plant4}> </Paper>
    </Grid>
  );
}

function Plant5({ classes }) {
  return (
    <Grid>
      <Paper className={classes.plant5}> </Paper>
    </Grid>
  );
}

export default function Garden(props) {
  const plans = props.plans;

  const progress = (currPlan) => {
    var completed = 0;
    var incomplete = 0;

    for (let i = 0; i < currPlan.plans.length; i++) {
      if (currPlan.plans[i].isComplete === true) {
        completed++;
      } else {
        incomplete++;
      }
    }
    let percentage = completed / (completed + incomplete);
    return percentage * 100;
  };

  const plant1 = plans.filter(function (el) {
    return progress(el) <= 20;
  });

  const plant2 = plans.filter(function (el) {
    return progress(el) > 20 && progress(el) <= 40;
  });
  const plant3 = plans.filter(function (el) {
    return progress(el) > 40 && progress(el) <= 60;
  });
  const plant4 = plans.filter(function (el) {
    return progress(el) > 60 && progress(el) <= 80;
  });
  const plant5 = plans.filter(function (el) {
    return progress(el) > 80;
  });

  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid container direction="row" className={"garden_background fade-in"}>
      {plant1.map((plan) => (
        <Grid
          key={plan}
          id={plan.id}
          onClick={() => {
            navigate("/plans/" + plan._id);
          }}
        >
          <Plant1 classes={classes} />
          <p> {plan.name}</p>
        </Grid>
      ))}
      {plant2.map((plan) => (
        <Grid
          key={plan}
          id={plan.id}
          onClick={() => {
            navigate("/plans/" + plan._id);
          }}
        >
          <Plant2 classes={classes} />
          <p> {plan.name}</p>
        </Grid>
      ))}
      {plant3.map((plan) => (
        <Grid
          key={plan}
          id={plan.id}
          onClick={() => {
            navigate("/plans/" + plan._id);
          }}
        >
          <Plant3 classes={classes} />
          <p> {plan.name}</p>
        </Grid>
      ))}
      {plant4.map((plan) => (
        <Grid
          key={plan}
          id={plan.id}
          onClick={() => {
            navigate("/plans/" + plan._id);
          }}
        >
          <Plant4 classes={classes} />
          <p> {plan.name}</p>
        </Grid>
      ))}
      {plant5.map((plan) => (
        <Grid
          key={plan}
          id={plan.id}
          onClick={() => {
            navigate("/plans/" + plan._id);
          }}
        >
          <Plant5 classes={classes} />
          <p> {plan.name}</p>
        </Grid>
      ))}
    </Grid>
  );
}
