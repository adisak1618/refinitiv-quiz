import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  min-width: 350px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  background: #eee;
  h2 {
    text-align: center;
  } 
`

export default function Sec2Q2({ categories }) {

  const [filterInput, setFilterInput] = useState("")
  return (
    <Wrapper>
      <Container>
        Search:
        <input value={filterInput} onChange={e => setFilterInput(e.target.value)} />
        <h2>Categories List</h2>
        {
          categories
            .filter(v => {
              if(filterInput === "") {
                return true
              } else {
                return v.toUpperCase().includes(filterInput.toUpperCase())
              }
            })
            .map((v) => (
              <div key={v}>{v}</div>
            ))
        }
      </Container>
    </Wrapper>
  )
}

export async function getStaticProps(context) {
  const response = await fetch('https://api.publicapis.org/categories')
  const categories = await response.json()

  return {
    props: { categories }, // will be passed to the page component as props
  }
}