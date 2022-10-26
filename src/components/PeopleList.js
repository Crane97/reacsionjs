const PeopleList = (props) => {
    return (
        <html>
        <ul>
          {props.people.map((people1) => (
            <li>
              {people1.name} ({people1.mass} years old)
            </li>
          ))}
        </ul>
        </html>
      );  
};

export default PeopleList;