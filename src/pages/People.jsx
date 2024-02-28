import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const People = () => {


  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/people')
    .then(res => res.json())
    .then(data => setPeople(data))
    .catch(e => alert(e.message));
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {people.map(person => (
        <div key={`film-${person.id}`} className="card people-card m-3" style={{width: "20 rem"}}>
          <h4 className="card-header">{person.name}</h4>
          <ul className="list-group list-group-flush">
            <p className="list-group-item m-0"><small className="text-muted">Gender: </small>{person.gender}</p>
            <p className="list-group-item m-0"><small className="text-muted">Age: </small>{person.age}</p>
            <p className="list-group-item m-0"><small className="text-muted">Eye color: </small>{person.eye_color}</p>
            <p className="list-group-item m-0"><small className="text-muted">Hair Color: </small> {person.hair_color}</p>
            <Link to={`/people/${person.id}`} className="btn">Go to Details</Link>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default People;
