import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useState} from "react";

const Filters = ({filterMovies}) => {
    const [searchTitle, setSearchTitle] = useState("")
    const [searchAuthor, setSearchAuthor] = useState("");
    return(
        <div style={{display: "flex", justifyContent: "center", gap: '2rem'}}>
            <InputGroup className="mb-3"   style={{width: "20%"}}>
                <Form.Control
                    placeholder="Searh by title"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={searchTitle}
                    onChange={e => {
                        setSearchTitle(e.target.value)
                    }}
                />
            </InputGroup>
            <InputGroup className="mb-3"   style={{width: "20%"}}>
                <Form.Control
                    placeholder="Searh by author"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={searchAuthor}
                    onChange={e => {
                        setSearchAuthor(e.target.value)
                    }}
                />
            </InputGroup>
            <Button variant="primary" onClick={() => {
                filterMovies(searchTitle, searchAuthor)
            }}>Submit</Button>
        </div>


    )
}

export default Filters