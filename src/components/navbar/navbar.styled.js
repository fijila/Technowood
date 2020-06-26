import styled from 'styled-components'

export const MainNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const Img = styled.img`
  padding: 10px 0;
  max-width: 15vw;
`
export const Header = styled.div`
  background-color: #000000;
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0px;
`
export const Input = styled.input`
  height: 30px;
  margin-right: 10px;
`
export const Button = styled.button`
  height: 30px;
  text-align: center;
  background-color: #ffc300;
`

export const LinkBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LinkItem = styled.div`
  padding: 10px 0;
  flex: 1 1 auto;
  border-right: 3px solid #fff;
  font-weight: bold;

  color: #000000;

  background-color: #f3f3f3;
  a {
    color: brown;
  }
  &:hover {
    a {
      color: black;
    }
    background-color: #fff;
  }
`
