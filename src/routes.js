import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Navigation from './Components/Navigation';

import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Home from './Pages/Home';
import Register from './Pages/Register';
import AccountActivation from './Pages/AccountActivation';
import Settings from './Pages/Settings';

import Alerts from './Pages/Alerts';
import Emergency from './Pages/Emergency';
import Feed from './Pages/Feed';
import Location from './Pages/Location';
import PeopleList from './Pages/PeopleList';

import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import ImportantLocations from './Pages/ImportantLocations';
import Language from './Pages/Language';
import Laws from './Pages/Laws';
import Medical from './Pages/Medical';
import Overnight from './Pages/Overnight';
import Safety from './Pages/Safety';
import Theft from './Pages/Theft';

import ComponentsOverview from './Pages/ComponentsOverview';

import RequireAuthentication from './Components/RequireAuthentication';

import api from './api/api';
export const db = new api();

const Router = () =>  {
    return (
      <BrowserRouter>
        <div>
        <div className='lang-footer'>DA | EN | AR</div>
        <Navigation />
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            {/* When user click activate account in email */}
            <Route path="/account-activation" component={AccountActivation} />

            <Route path="/settings" component={RequireAuthentication(Settings)} />

            <Route path="/location" component={RequireAuthentication(Location)} />
            <Route path="/emergency" component={RequireAuthentication(Emergency)} />
            <Route path="/alerts" component={RequireAuthentication(Alerts)} />
            <Route path="/people-list" component={RequireAuthentication(PeopleList)} />
            {/* Inbound Communication (news, announcements) */}
            <Route path="/feed" component={RequireAuthentication(Feed)} />

            {/* Sophie's paths */}
            <Route path="/contact" component={Contact} />
            <Route path="/faq" component={FAQ} />
            <Route path="/important-locations" component={ImportantLocations} />
            <Route path="/language-barriers" component={Language} />
            <Route path="/laws-traditions" component={Laws} />
            <Route path="/medical" component={Medical} />
            <Route path="/overnight" component={Overnight} />
            <Route path="/safety" component={Safety} />
            <Route path="theft" component={Theft} />

            <Route path="/components-overview" component={RequireAuthentication(ComponentsOverview)} />

          </Switch>
          
        </div>
      </BrowserRouter>
    );
  }

export default Router;