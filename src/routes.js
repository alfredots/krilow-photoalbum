import React, { Suspense, lazy} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

const home = lazy(() => import('./components/Home'))

export default () => (
    <HashRouter>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route exact path="/" component={home} />
            </Switch>
        </Suspense>
    </HashRouter>
);