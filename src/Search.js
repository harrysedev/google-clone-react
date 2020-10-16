import React, {useState} from 'react';
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"


function Search() {
    //used for setting input value
    const [input, setInput] = useState("");
    //used for 
    const history = useHistory();

    //search function (when enter is pressed)
    const search = (e) => {
        e.preventDefault();

        //test console
        console.log('your searched input is ', input);

        //router, pushing the user to the search page 
        history.push('/search')
    }


    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"></SearchIcon>
                <input value ={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            <div className="search_button">
                <Button type='submit' onClick = {search}></Button>
            </div>
        </form>
    )
}

export default Search
