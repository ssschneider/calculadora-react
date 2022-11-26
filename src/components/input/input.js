import StyledInput from "./styles.js"

const Input = ({value}) => {
    return (
        <StyledInput>
            <input disabled value={value}/>
        </StyledInput>
    )
}

export default Input