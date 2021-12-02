import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Todo, Action, ActionTypes} from '../actions'
import { StoreState } from '../reducers'

interface TodoState

class App extends Component {

    state = { fetching: false}

    componentDidUpdate(){

        this.setState({fetching: false})
    }

    fetchHandler(){
        this.setState({fetching: true})
    }

    render(){
        return(
            <div>
                <button onClick ={this.fetchHandler}>Fetch</button>
            </div>
        )
    }
}

const mapStateToProps = ({todos}: StoreState) => {
    return { todos: todos}
}



export default connect(mapStateToProps, {fetchTodos, clearTodos})(App)