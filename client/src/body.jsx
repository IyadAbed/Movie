import { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // Make the HTTP request to the server when the component mounts
    axios
      .get("http://localhost:5000/movies")
      .then((response) => {
        // Handle the response data
        setMovie(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
 console.log(movie)
  return (
    <div className="bg-gray-900 text-white p-4">
    {movie.map((movie) => (
      <div key={movie.id} className="border-b border-gray-700 pb-4 mb-4">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-400">{movie.description}</p>
        <img className="mt-4" src={movie.thumbnail} alt={movie.title} />
        {/* Add more JSX to display other movie details */}
      </div>
    ))}
  </div>
  
  );
};

export default MyComponent;