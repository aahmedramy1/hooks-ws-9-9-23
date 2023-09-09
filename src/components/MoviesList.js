import MovieCard from "./MovieCard";

const MoviesList = ({movies}) => {
    return(
        <div style={{display: "flex", justifyContent: 'center', gap: "2rem"}}>
            {
                movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
            }
        </div>

    )
}

export default MoviesList;