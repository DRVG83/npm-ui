import React from "react";
import { Link, Route } from "react-router-dom";

import { Toolbar, ToolbarRow, ToolbarTitle } from "rmwc/Toolbar";
import { TabBar, Tab } from "rmwc/Tabs";

import ScriptsView from "./Scripts";
import PackagesView from "./Packages";

import "./styles.scss";

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0
    };
  }

  render() {
    return (
      <div className="app-container">
        <Toolbar>
          <ToolbarRow>
            <TabBar
              activeTabIndex={this.state.activeTabIndex || 0}
              onChange={evt =>
                this.setState({ activeTabIndex: evt.target.value })}
            >
              <Tab className="mdc-tab--active">
                <Link to="/scripts" />
                Scripts
              </Tab>
              <Tab>
                <Link to="/packages" />
                Packages
              </Tab>
            </TabBar>
          </ToolbarRow>
        </Toolbar>

        <Route
          path="/scripts"
          render={() => <div className="route-container"><ScriptsView /></div>}
        />
        <Route
          path="/packages"
          render={() => <div className="route-container"><PackagesView /></div>}
        />
      </div>
    );
  }
}

export default Root;
