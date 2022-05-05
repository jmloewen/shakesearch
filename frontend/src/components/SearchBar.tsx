import { IconButton, InputAdornment, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

interface Props {
    onTextChange: Function;
    searchText: String;
}


const TextFieldContainer = styled.div({
    width: "700px",
})

const SearchBar = ({ searchText, onTextChange }:Props) => {

    return (
        <TextFieldContainer>
            <TextField fullWidth value={searchText} onChange={(e) => onTextChange(e)} id="standard-basic" type="search" variant="standard"
            
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}/>
        </TextFieldContainer>
    )
}


export default SearchBar