import styled, { createGlobalStyle } from 'styled-components'
import BGimg from './images/bgimg.jpg'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${ BGimg });
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff, #15faa9);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  h2 {
    background-image: linear-gradient(180deg, #fff, #15faa9);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 40px;
    font-weight: 300;
    text-align: center;
    margin: 20px;
  }

  .start, .next, .select {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #15faa5);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }

  .startDiff {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
  }
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  cursor: pointer;
  background: linear-gradient(180deg, #fff, #15faa5);
  border: 2px solid #d38558;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  align-items: center;
  display: flex;

  option {
    color: black;
    background: white;
    display: flex;

    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`