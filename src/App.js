import {Container, Content, Row} from "./styles";
import Button from "./components/button/button";
import Input from "./components/input/input";
import { useState } from "react";

function App() {
  const [ currentNumber, setCurrentNumber ] = useState ("0")

  const [ firstNumber, setFirstNumber] = useState("0")

  const [ operation, setOperation ] = useState ("")

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? " " : prev}${number}`)
  }

  const handleClearNumbers = () => {
    setCurrentNumber("0")
    setFirstNumber ("0")
    setOperation (" ")
  }

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber ("0")
      setOperation("+")
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber (String(sum))
      setOperation (" ")
    }
  }

  const handleDiff = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber ("0")
      setOperation("-")
    } else {
      const diff = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber (String(diff))
      setOperation (" ")
    }
  }

  const handleTimes = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber ("0")
      setOperation("*")
    } else {
      const times = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber (String(times))
      setOperation (" ")
    }
  }

  const handleDiv = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber))
      setCurrentNumber ("0")
      setOperation("-")
    } else {
      const div = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber (String(div))
      setOperation (" ")
    }
  }

  const handleResult = () => {
    if (firstNumber !== "0" && operation !== " " && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSum ();
          break;
        case "-":
          handleDiff ();
          break;
        case "*":
          handleTimes ();
          break;
        case "/":
          handleDiv ();
          break;

        default: break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label={"/"}  onClick={handleDiv}/>
          <Button label={"="} onClick={handleResult}/>
          <Button label={"C"} onClick={handleClearNumbers}/>
          <Button label={0} onClick={() => handleAddNumber("0")}/>
        </Row>

        <Row>
          <Button label={"*"}  onClick={handleTimes}/>
          <Button label={7} onClick={() => handleAddNumber("7")}/>
          <Button label={8} onClick={() => handleAddNumber("8")}/>
          <Button label={9} onClick={() => handleAddNumber("9")}/>
        </Row>

        <Row>
          <Button label={"-"} onClick={handleDiff}/>
          <Button label={4} onClick={() => handleAddNumber("4")}/>
          <Button label={5} onClick={() => handleAddNumber("5")}/>
          <Button label={6} onClick={() => handleAddNumber("6")}/>
        </Row>

        <Row>
          <Button label={"+"} onClick={handleSum}/>
          <Button label={1} onClick={() => handleAddNumber("1")}/>
          <Button label={2} onClick={() => handleAddNumber("2")}/>
          <Button label={3} onClick={() => handleAddNumber("3")}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
