import  React from 'react'
import { Provider } from 'react-redux'

import AppContainer from "./containers/AppContainer";
import store from './store'

export default class extends React.Component {
    render () {
        return (<Provider store={store}>
            <AppContainer />
        </Provider>)
    }
};