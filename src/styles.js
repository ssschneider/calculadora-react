import styled from "styled-components"

export const Container = styled.section `
    width: 50%;
    margin: 0 auto;
    height: 100vh;
    background-color: #0e0e0e;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div `
    background-color: #7C0EA3;
    min-width: 30rem;
    min-height: 35rem;
    border-radius: .8rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Row = styled.div `
    display: flex;
    width: 98%;
    margin: 0 auto .8rem;
    justify-content: space-between;
    align-items: center;
`
