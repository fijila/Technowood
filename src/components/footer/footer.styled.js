import styled from 'styled-components'

export const MainDiv = styled.div`
  background-color: #f3f3f3;
`

export const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`
export const LinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
export const FormDiv = styled.div`
  display: flex;
  flex: 2 0 auto;
  max-width: 900px;
  flex-direction: column;

  margin: 20px;
  form {
    background-color: #ccc;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input {
    text-align: center;
    height: 30px;
    width: 90%;
  }

  textarea {
    text-align: center;
    width: 90%;
  }
  button {
    height: 30px;
    width: 100px;
    text-align: center;
    align-self: center;
    margin: 5px;
    border: none;
    background-color: #222;
    color: #fff;
  }
`
export const LinkItem = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
  a {
    text-decoration: none;
    color: black;
  }
`
