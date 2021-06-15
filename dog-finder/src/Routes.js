import React from "react";
import DogDetails from "./DogDetails";
import { Route, Switch, Redirect } from "react-router-dom";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs"></Route>
      {dogs.map((dog) => (
        <Route exact path={`/dogs/${dog.name}`}>
          <DogDetails dog={dog} />
        </Route>
      ))}
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;
