import React from 'react'
import {
  MainDiv,
  SubDiv,
  LinksDiv,
  LinkItem,
  FormDiv,
  Input,
} from './footer.styled'
import { useForm } from 'react-hook-form'
import { Container } from '../container/container'

export default function Footer() {
  const { register } = useForm()
  const showForm = (
    <form method="post">
      <label htmlFor="name">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          ref={register}
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register}
        />
      </label>
      <label htmlFor="question">
        <textarea
          ref={register}
          name="question"
          id="question"
          rows="3"
          placeholder="Say something"
        />
      </label>
      <button type="submit">Send</button>
    </form>
  )
  return (
    <MainDiv>
      <Container>
        <SubDiv>
          <LinksDiv>
            <LinkItem>
              <a href="./about">About Us</a>
            </LinkItem>
            <LinkItem>
              <a href="">Trends</a>
            </LinkItem>
            <LinkItem>
              <a href="./gallery">Gallery</a>
            </LinkItem>
            <LinkItem>
              <a href="./contact"> Contact Us</a>
            </LinkItem>
          </LinksDiv>
          <FormDiv>{showForm}</FormDiv>
        </SubDiv>
      </Container>
    </MainDiv>
  )
}
