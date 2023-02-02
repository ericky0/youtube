<<<<<<< HEAD
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'
import { comment } from '../types/Comment'
import { user } from '../types/User'
=======
import React from 'react'
import styled from 'styled-components'
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`
const Text = styled.span`
  font-size: 14px;
`
<<<<<<< HEAD

type commentProps = {
  comment: comment
}

const Comment = ({comment}: commentProps) => {

  const [channel, setChannel] = useState<user>()

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(
        `/users/find/${comment.userId}`
      )
      setChannel(res.data)
    }
    fetchComment()
  }, [comment.userId])

  return (
    <Container>
      <Avatar src={channel?.img}/>
      <Details>
        <Name>{channel?.name} <Date>{format(comment.createdAt!)}</Date> </Name>
        <Text>
          {comment.desc}
=======
const Comment = () => {
  return (
    <Container>
      <Avatar src='https://lastfm.freetls.fastly.net/i/u/770x0/faeba6b52fda6acffad7682456cbd42d.jpg'/>
      <Details>
        <Name>Erick Hogarth <Date>1 week ago</Date> </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          In voluptatem assumenda laboriosam ad necessitatibus, pariatur 
          nihil repellat iusto velit aliquam eos unde obcaecati architecto 
          perspiciatis omnis est, impedit quod libero?
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
        </Text>
      </Details>
    </Container>
  )
}

export default Comment