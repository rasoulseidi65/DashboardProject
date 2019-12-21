import React, {Component} from 'react';
import {Switch,Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardV2 from "./DashboardV2";
import DashboardV3 from "./DashboardV3";
import GroupNews from "./News/GroupNews";
import News from "./News/News";
import Property from "./Property/property";
export default class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route  path="/dashboard" component={Dashboard}/>
                <Route  path="/dashboardv2" component={DashboardV2}/>
                <Route  path="/dashboardv3" component={DashboardV3}/>
                <Route  path="/groupnews" component={GroupNews}/>
                <Route  path="/news" component={News}/>
                <Route  path="/property" component={Property}/>
            </Switch>




        );
    }
}
