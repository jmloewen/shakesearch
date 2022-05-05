import React, { ChangeEvent, Component, FormEvent, useState } from 'react'
import SearchBar from '../components/SearchBar';
import SearchButton from '../components/SearchButton';
import axios from 'axios';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

const DisplayContainer = styled.div({
    display: "flex",
    padding: "20px",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    width: "950px",
    height: "300px",
    alignItems: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    flexDirection: "column",
});

const ResultsContainer = styled.div({
    display: "flex",
    flexDirection: "column",
})

const HeaderContainer = styled.div({
    marginBottom: "80px",
});
const SearchContainer = styled.div({
    
});

const searchEndpoint = "http://localhost:3001/search";

const generateSearchEndpoint = (searchText:String) => `${searchEndpoint}?q=${searchText}`;

const HomePageContainer = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [parsedResults, setParsedResults] = useState([]); //will process these items as we scroll down the page

    const onTextChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.currentTarget.value);
    };
    const onSearch = async () => {
        console.log("cur text: ", searchText);
        try {
            const res = await fetch(generateSearchEndpoint(searchText));

            if (res?.body) {
                const parsed = await res.json();
                console.log("parsed: ", parsed);
                setSearchResults(parsed);
            }
        } catch (e) {
            console.error(e);
        }
        //search logic to api here
        //filtering logic for security would go here
    }

    return (
        <>
            <DisplayContainer>
                <HeaderContainer>
                    <Typography variant="h3" component="h3">
                        {"A Search of Speare"}
                    </Typography>
                    <Typography variant="h5" component="h5">
                        {"Search through all of Shakespeare's works"}
                    </Typography>
                </HeaderContainer>
                <SearchContainer>
                <SearchBar searchText={searchText} onTextChange={onTextChange} />
                <SearchButton onClick={onSearch} buttonText={"Search"} />
                </SearchContainer>
            </DisplayContainer>
            {/* display 10 at a time / lazy load on scroll */}
            <ResultsContainer>
                { searchResults ? searchResults.map(result => {
                    return <p>{result}</p>
                }) : null }
            </ResultsContainer>
        </>
    )
}

export default HomePageContainer;