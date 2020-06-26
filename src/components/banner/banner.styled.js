import styled from 'styled-components'

export const Box1 = styled.div`
  margin-bottom: 20px;
`
export const Box2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 -2px 20px -2px;
`
export const BannerItem = styled.div`
  padding: 20px 0;
  flex: 1 1 auto;
  background: #f3f3f3;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  h6 {
    color: brown;
  }
`
export const BannerImage = styled.img`
  object-fit: cover;
  aspect-ratio: 16/9;
  cursor: pointer;
`
