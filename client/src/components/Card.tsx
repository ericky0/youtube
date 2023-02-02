import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { video } from '../types/Video'
import { user } from '../types/User'

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
  border-radius: 10px;
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
  type?: string
  video?: video
}

const Card = ({type, video}: CardProps) => {
  const [channel, setChannel] = useState<user>()
  
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/users/find/${video?.userId}`)
      setChannel(res.data)
    }
    fetchVideos()
  }, [video?.userId])
  return (
    <Link to={`/video/${video?._id}`} style={{textDecoration: 'none'}}>
      <Container type={type}>
        <Image 
          type={type}
          src={video?.imgUrl}/>
        <Details>
          <ChannelImage 
            type={type}
            src={channel?.img}/>
          <Texts>
            <Title>{video?.title}</Title>
            <ChannelName>{channel?.name}</ChannelName>
            <Info>{video?.views} views • {format(video!.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card