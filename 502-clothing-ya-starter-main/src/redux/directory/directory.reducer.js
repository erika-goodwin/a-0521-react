import {directory} from 'assets/data/directory'

const INITAL_STATE = {
    section: directory.sections
}

const directoryReducer = (state = INITAL_STATE, action) => {
    switch(action.type){

        default:
            return state
    }
}

export default directoryReducer