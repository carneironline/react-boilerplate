import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Carts from './pages/Cart'

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/carts' component={Carts} />
        </Switch>
    )
}
