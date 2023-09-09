import MoviesList from "../components/MoviesList";
import {useState} from "react";
import Filters from "../components/Filters";

const moviesRes = [
    {
        id: 1,
        title: "Harry potter",
        description: "TEST",
        author: "Bassem",
        image: "https://m.media-amazon.com/images/I/61aG6EicTIL.jpg"
    },
    {
        id: 2,
        title: "The Greatest Showman",
        description: "AAAAAAA circuis",
        author: "Ahd",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 3,
        title: "the pursuit of happyness",
        description: "REAL",
        author: "Ramy",
        image: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/thepursuitofhappyness_onesheet_1400x2100.png?itok=BSpvsOsJ"
    }
]

const Home = () => {
    const [movies, setMovies] = useState(moviesRes)

    const filterMovies = (title, author) => {
        setMovies(
            moviesRes
                .filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
                .filter(movie => movie.author.toLowerCase().includes(author.toLowerCase()))
        )
    }


    return (
        <div>
            <Filters filterMovies={filterMovies}/>
            <MoviesList movies={movies}/>
        </div>
    )
}

export default Home