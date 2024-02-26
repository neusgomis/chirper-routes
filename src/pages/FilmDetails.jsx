import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FilmDetails = () => {

  const { filmid } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
  }



  return (
    <h1>Hello!</h1>
  )
}

export default FilmDetails;
