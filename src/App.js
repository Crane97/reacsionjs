import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  const[peopleList, setPeopleList] = useState([]);

  function fetchPeopleHandler(){
    fetch('https://swapi.dev/api/people/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedPeople = data.results.map(peopleData => {
          return{
            name:peopleData.name,
            mass:peopleData.mass,
            height:peopleData.height
          }
        });
        setPeopleList(transformedPeople);
      });
  }

  return (
      <html>
      <section>
          <button onClick={fetchPeopleHandler()}>Fetch people</button>
      </section>
      <section>
          <PeopleList people = {peopleList} />
      </section>
      </html>
  );
}

export default App;
