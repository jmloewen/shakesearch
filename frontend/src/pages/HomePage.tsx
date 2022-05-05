import styled from '@emotion/styled'
import React, { Component } from 'react'
import HomePageContainer from '../containers/HomePageContainer'

const Container = styled.div({
    padding: "20px",
})
//a storage page for our search and display functionality
const HomePage = () => {
    return (
        <Container>
            <HomePageContainer />
        </Container>
    )
}

export default HomePage