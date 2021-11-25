import React, { useState } from "react";

import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

const People = ({data}) => {
  const UPDATE_PERSON_NAME = "UPDATE_PERSON_NAME";
  const personUpdate = () => {
    return { name: UPDATE_PERSON_NAME };
  };

  console.log(data);
  console.log('data name:', data[0].name);
  console.log('data age:', data[0].age);


  const [people, setPeople] = useState([]);

  const personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "John",
      age: Math.floor(Math.random() * 40),
    };

    setPeople((prevState) => {
      return [...prevState, newPerson];
    });
  };

  const personDeletedHandler = (personId) => {
    setPeople((prevState) => {
      return prevState.filter((person) => person.id !== personId);
    });
  };

  return (
    <div>
      <AddPerson personAdded={personAddedHandler} />
      {people.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          clicked={() => personDeletedHandler(person.id)}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.personData,
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
      personUpdateFunc: (operator, index) =>
        dispatch(personUpdate(operator, index)),
    };
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(People);
