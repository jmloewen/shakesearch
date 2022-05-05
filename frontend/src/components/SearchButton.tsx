import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React, { Component } from 'react'

interface Props {
    onClick: Function
    buttonText: String
}

const ButtonContainer = styled.div({
    margin: "10px",
})

const SearchButton = ({onClick, buttonText}:Props) => {
    return (
        <ButtonContainer>
            <Button onClick={() => onClick()} variant="outlined">{buttonText}</Button>
        </ButtonContainer>
    )
}
export default SearchButton;