import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: red;
  height: 100vh;
  width: 100%;
`

const Columns = styled.div`
  display: flex;
  flex: 1;
  min-width: 600px;
`
const Column = styled.div`
  height: 100vh;
`

const Column1 = styled(Column)`
  background: green;
  order: 1;
  width: 200px;
`

const Column2 = styled(Column)`
  background: blue;
  flex: 1;
  order: 2;
  min-width: 100px;
`

const Column3 = styled(Column)`
  background: yellow;
  width: 300px;
  order: 3;
`

const modeList = {
	IsPrime: "IsPrime",
	IsFibonacci: "IsFibonacci"
}

export default function Sec2Q1 () {
  const [numInput, setNumInput] = useState(0)
  const [result, setResult] = useState(false)
  const [mode, setMode] = useState(modeList.IsPrime)

  const checkIsFibonacci = (query, count = 1, last = 0) => {
    if(count < query){
       return checkIsFibonacci(query, count+last, count);
    };
    if(count === query){
       return true;
    }
    return false;
 };

  const checkIsPrime = (value) => {
    const numberValue = Number(value)
    if (numberValue <= 1) {
      return false 
    } else {
      for(let i = 2; i < numberValue; i++) {
        if (numberValue % i == 0) {
          return false
        }
      }
      return true
    }
  }
  const correctInputValue = (value) => {
    const roundValue = Math.round(value)
    if(roundValue < 0) {
      return 1
    } else {
      return Math.round(value)
    }
  }

  const init = (value) => {
    const correctValue = correctInputValue(value)
    setNumInput(correctValue)
    if(mode === modeList.IsPrime) {
      setResult(checkIsPrime(correctValue))
    } else if(mode === modeList.IsFibonacci) {
      setResult(checkIsFibonacci(correctValue))
    }
  }

  useEffect(() => {
    init(numInput)
  }, [numInput, mode])


  return (
    <Wrapper>
      <Columns>
        <Column1>
          <input type="number" value={numInput} onChange={e => setNumInput(Number(e.target.value))} />
          <br />
          {numInput}
        </Column1>
        <Column2>
          <select name="filter" onChange={e => setMode(e.target.value)}>
            {Object.entries(modeList).map(v => (
              <option value={v[0]}>{v[1]}</option>
            ))}
          </select>
        </Column2>
        <Column3>
          {result ? 'true': 'false'}
      </Column3>
      </Columns>
    </Wrapper>
  )
}