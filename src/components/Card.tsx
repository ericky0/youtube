import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  width: ${(p: CardProps) => p.type !== 'sm' && '360px'};
  margin-bottom: ${(p: CardProps) => p.type === 'sm' ? '10px' : '45px'};
  cursor: pointer;
  display: ${(p: CardProps) => p.type === 'sm' && 'flex'};
  gap: 10px;
`
const Image = styled.img`
  width: 100%;
  height: ${(p: CardProps) => p.type === 'sm' ? '120px' : '202px'};
  object-fit: cover;
  flex: 1;
`
const Details = styled.div`
  display: flex;
  gap: 12px;
  margin-top: ${(p: CardProps) => p.type !== 'sm' && '16px'};
  flex: 1;
`
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover;
  outline: 1px solid ${({theme}) => theme.text};
  display: ${(p: CardProps) => p.type === 'sm' && 'none'};

`
const Texts = styled.div``
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 9px 0px;

`
const Info = styled.div`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};

`

type CardProps = {
  type?: string;
}

const Card = ({type}: CardProps) => {
  return (
    <Link to='/video/test' style={{textDecoration: 'none'}}>
      <Container type={type}>
        <Image 
          type={type}
          src='https://i.ytimg.com/vi/yHxhTZ0k0Kw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPeugEuXxlD5ffevpwDwFmVCXAcg'/>
        <Details>
          <ChannelImage 
            type={type}
            src='https://lastfm.freetls.fastly.net/i/u/770x0/faeba6b52fda6acffad7682456cbd42d.jpg'/>
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>askke dev</ChannelName>
            <Info>983,506 • 1 week ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card