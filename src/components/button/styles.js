import styled from "styled-components"

const StyledButton = styled.button`
    background-color: #0e0e0e;
    font-size: 2.4rem;
    font-weight: 700;
    padding: .8rem;
    border-radius: .4rem;
    border: 3px solid #0e0e0e;
    outline: none;
    flex: 1;
    margin: 0 .4rem;
    transition: .5s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.05;
    }
`

export default StyledButton