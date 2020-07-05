import React from "react";
// import PortCard from "../PortCard/portCard";
import ProjectCard from "../Card";
// import { Row, Col } from "../Grid";
import { Grid } from 'semantic-ui-react'

function PortCards(props) {
  return (
    <Grid container stackable>
      <Grid.Row centered className="rows">
        {props.repositories.map((repo, index) => (

          <Grid.Column key={index} computer={5} table={8} className="columns">
            <ProjectCard fluid repo={repo} />
          </Grid.Column>

        ))}
      </Grid.Row>
    </Grid>
  );
}

export default PortCards;
