import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined, ThumbUp, ThumbDown } from '@mui/icons-material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'
import Recommendation from '../components/Recommendation'
import Comments from '../components/Comments'
import { RootState } from '../redux/store'
import { subscription } from '../redux/userSlice'
import { dislike, fetchSuccess, like } from '../redux/videoSlice'
import { user } from '../types/User'

const Container = styled.div` 
  display: flex;
  gap: 24px;
`
const Content = styled.div` 
  flex: 5;
`
const VideoWrapper = styled.div` 
  
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`
const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`

const Video = () => {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const currentVideo = useSelector((state: RootState) => state.video.currentVideo)
  const dispatch = useDispatch()

  const path = useLocation().pathname.split('/')[2]

  const [channel, setChannel] = useState<user>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`)
        const channelRes = await axios.get(`/users/find/${videoRes?.data.userId}`)
        setChannel(channelRes.data)
        dispatch(fetchSuccess(videoRes.data))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [path, dispatch])

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo?._id}`)
    dispatch(like(currentUser?._id))
  }

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo?._id}`)
    dispatch(dislike(currentUser?._id))
  }

  const handleSubscribe = async () => {
    currentUser?.subscribedUsers.includes(channel!._id) 
      ? await axios.put(`/users/unsub/${channel?._id}`) 
      : await axios.put(`/users/sub/${channel?._id}`)
    dispatch(subscription(channel?._id))
  }
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={currentVideo?.videoUrl} controls>

          </VideoFrame>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo?.views} views • {format(currentVideo?.createdAt!)}</Info>
          <Buttons>
            <Button onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser?._id!) 
              ? <ThumbUp /> 
              : <ThumbUpOutlined /> }
              {currentVideo?.likes?.length}
            </Button>
            <Button onClick={handleDislike}>
              {currentVideo?.dislikes.includes(currentUser?._id!) 
              ? <ThumbDown /> 
              : <ThumbDownOffAltOutlined /> }
              Dislike</Button>
            <Button><ReplyOutlined />Share</Button>
            <Button><AddTaskOutlined />Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={channel?.img}/>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
              <Description>
                {currentVideo?.desc}
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSubscribe}>
            {currentUser?.subscribedUsers.includes(channel?._id!) 
              ? "Subscribed" 
              : "Subscribe"
            }
          </Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation tags={currentVideo?.tags}></Recommendation>
    </Container>

  )
}

export default Video