import React, { useState, useEffect } from 'react'
import {
  MainNav,
  Button,
  LinkBar,
  Header,
  HeaderContent,
  Search,
  Input,
  LinkItem,
  Img,
} from './navbar.styled'
import axios from 'axios'
import assets from '../../assets'
import { Container } from '../container/container'

export default function Navbar() {
  const [state, setState] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    setShowSearch(true)
  }, [searchResult])

  const handleSubmit = (e) => {
    const val = state

    axios
      .get(`http://localhost:7777/searchCustomers?keyWord=` + val)
      .then((response) => {
        JSON.stringify(response.data)
        setSearchResult(response.data)
      })
    e.preventDefault()
  }
  const handleOnchange = (e) => {
    console.log(e.target.value)
    setState(e.target.value)
  }
  return (
    <MainNav>
      <Header>
        <Container>
          <HeaderContent>
            <a href="/">
              <Img src={assets.images.logo} alt="" title="logo" />
            </a>
            <Search>
              <Input
                type="text"
                name="text"
                placeholder="Search here!"
                onChange={(e) => handleOnchange(e)}
              />
              <Button onClick={(e) => handleSubmit(e)}>Search</Button>

              {showSearch && (
                <div>
                  {searchResult.map((item) => (
                    <div key={item._id}>
                      {item.name}
                      {item.age}
                    </div>
                  ))}
                </div>
              )}
            </Search>
          </HeaderContent>
        </Container>
      </Header>

      <LinkBar>
        <LinkItem>
          <a href="./furniture" alt="">
            Furniture
          </a>
        </LinkItem>
        <LinkItem>
          <a href="./tile" alt="">
            Tiles
          </a>
        </LinkItem>
        <LinkItem>
          <a href="./clock" alt="">
            Clocks
          </a>
        </LinkItem>
        <LinkItem>
          <a href="./light" alt="">
            Lights
          </a>
        </LinkItem>
      </LinkBar>
    </MainNav>
  )
}
