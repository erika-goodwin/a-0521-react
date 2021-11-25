import React from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from 'react-redux'
import * as actionType from '../redux/action'

const People = ({ peopleProps, addPerson, deletePerson }) => {

    return (
        <div>
            <AddPerson personAdded={addPerson} />
            {peopleProps && peopleProps.map(person => (
                <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => deletePerson(person.id)}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state)
    return { peopleProps: state.people.people }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: () => dispatch({ type: actionType.addPerson }),
        deletePerson: (id) => dispatch({ type: actionType.deletePerson, payload: id })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(People);