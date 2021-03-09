import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  .parent {
    position: relative;
    /* try changing the width! */
    width: 200px;
    height: 100px;
    border: 2px solid black;
  }

  .star {
    position: absolute;
    /* Only allow to add content inside this block */
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    left: 50%;
    margin-left: -10px;
    top: 50%;
    margin-top: -10px;
    /* */
  }
`

export default function Sec1Q2 () {

  return (
    <Wrapper>
      <h3>Quiz: Move a star to middle of the box.</h3>
      <div className="parent">
        <div className="star">★</div>
      </div>
    </Wrapper>
  )
}