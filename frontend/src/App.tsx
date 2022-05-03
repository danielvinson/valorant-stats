import { BoomerSeason3Challenger } from "./screens/BoomerSeason3Challenger";
import { BoomerSeason3Championship } from "./screens/BoomerSeason3Champs";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./screens/Home";
import { MatchDetail } from "./screens/MatchDetail";
import { MatchHistory } from "./screens/MatchHistory";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const ROUTES = {
  boomerSeason3challenger: {
    key: "boomerSeason3challenger",
    name: "BoomerSeason3Challenger",
    path: "/boomerants/season3/challenger",
  },
  boomerSeason3champs: {
    key: "boomerSeason3champs",
    name: "BoomerSeason3Championship",
    path: "/boomerants/season3/championship",
  },
  detail: { key: "detail", name: "Match", path: "/match/:actId/:matchId" },
  history: {
    key: "history",
    name: "History",
    path: "/matchHistory/:playerName/:playerTag",
  },
  home: { key: "home", name: "Home", path: "/" },
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.boomerSeason3champs.path}>
          <DefaultLayout activeRoute="boomerSeason3champs">
            <BoomerSeason3Championship />
          </DefaultLayout>
        </Route>
        <Route path={ROUTES.boomerSeason3challenger.path}>
          <DefaultLayout activeRoute="boomerSeason3challenger">
            <BoomerSeason3Challenger />
          </DefaultLayout>
        </Route>
        <Route path={ROUTES.detail.path}>
          <DefaultLayout activeRoute="detail">
            <MatchDetail />
          </DefaultLayout>
        </Route>
        <Route path={ROUTES.history.path}>
          <DefaultLayout activeRoute="history">
            <MatchHistory />
          </DefaultLayout>
        </Route>
        <Route path={ROUTES.home.path}>
          <DefaultLayout activeRoute="home">
            <Home />
          </DefaultLayout>
        </Route>
      </Switch>
    </Router>
  );
}
