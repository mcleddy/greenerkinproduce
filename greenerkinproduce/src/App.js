import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Eight  from "./pages/Eight.js";
import Five  from "./pages/Five.js";
import FiveA  from "./pages/FiveA.js";
import FiveB  from "./pages/FiveB.js";
import FiveC  from "./pages/FiveC.js";
import FiveD  from "./pages/FiveD.js";
import FiveE  from "./pages/FiveE.js";
import FiveF  from "./pages/FiveF.js";
import FiveG  from "./pages/FiveG.js";
import FiveH  from "./pages/FiveH.js";

import Four  from "./pages/Four.js";
import FourA  from "./pages/FourA.js";
import FourB  from "./pages/FourB.js";

import Nine  from "./pages/Nine.js";
import NineA  from "./pages/NineA.js";
import NineB  from "./pages/NineB.js";

import One  from "./pages/One.js";
import OneA  from "./pages/OneA.js";
import OneB  from "./pages/OneB.js";

import Seven  from "./pages/Seven.js";

import Six  from "./pages/Six.js";

import Three  from "./pages/Three.js";
 import Two  from "./pages/Two.js";

 import Home from "./pages/Home.js";

 import { Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route
					exact
					path="/"
					render={() =>
					<Home/>
					}
				/>
        <Route
					exact
					path="/one"
					render={() =>
						<One></One>
					}
				/>
        <Route
					exact
					path="/OneA"
					render={() =>
						<OneA></OneA>
					}
				/>
        <Route
					exact
					path="/OneB"
					render={() =>
						<OneB></OneB>
					}
				/>
        <Route
					exact
					path="/Two"
					render={() =>
						<Two></Two>
					}
				/>
        <Route
					exact
					path="/Three"
					render={() =>
						<Three></Three>
					}
				/>
        <Route
					exact
					path="/Four"
					render={() =>
						<Four></Four>
					}
				/>
             <Route
					exact
					path="/FourA"
					render={() =>
						<FourA></FourA>
					}
				/>
             <Route
					exact
					path="/FourB"
					render={() =>
						<FourB></FourB>
					}
				/>
             <Route
					exact
					path="/Five"
					render={() =>
						<Five></Five>
					}
				/>
                 <Route
					exact
					path="/FiveA"
					render={() =>
						<FiveA></FiveA>
					}
				/>         <Route
        exact
        path="/FiveB"
        render={() =>
          <FiveB></FiveB>
        }
      />         <Route
      exact
      path="/FiveC"
      render={() =>
        <FiveC></FiveC>
      }
    />         <Route
    exact
    path="/FiveD"
    render={() =>
      <FiveD></FiveD>
    }
  />         <Route
  exact
  path="/FiveE"
  render={() =>
    <FiveE></FiveE>
  }
/>         <Route
					exact
					path="/FiveF"
					render={() =>
						<FiveF></FiveF>
					}
				/>
                 <Route
					exact
					path="/FiveG"
					render={() =>
						<FiveG></FiveG>
					}
				/>
                 <Route
					exact
					path="/FiveH"
					render={() =>
						<FiveH></FiveH>
					}
				/>
                 <Route
					exact
					path="/Six"
					render={() =>
						<Six></Six>
					}
				/>
        <Route
					exact
					path="/Seven"
					render={() =>
						<Seven></Seven>
					}
				/>
        <Route
					exact
					path="/Eight"
					render={() =>
						<Eight></Eight>
					}
				/>
        <Route
					exact
					path="/Nine"
					render={() =>
						<Nine></Nine>
					}
				/>
         <Route
					exact
					path="/NineA"
					render={() =>
						<NineA></NineA>
					}
				/>
         <Route
					exact
					path="/NineB"
					render={() =>
						<NineB></NineB>
					}
				/>
 
      </div>
    );
  }
}

export default App;
