import React, { Suspense } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../redux/";

export default () => {
  return (
    <Router history={history}>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/" component={() => <>Template</>} />
        </Switch>
      </Suspense>
    </Router>
  );
};
