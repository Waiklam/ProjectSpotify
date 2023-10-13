import React from "react";

import "./SearchResults.css";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
    return (
        <div className="SearchResults">
            <div className="Card Overview">
                <h2 >Results</h2>
                <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
            </div>
        </div>
    );
};

export default SearchResults;