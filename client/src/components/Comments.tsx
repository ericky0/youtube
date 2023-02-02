import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../redux/store'
import Comment from './Comment'
import { comment } from '../types/Comment'

const Container = styled.div`
  
`
const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
  color: ${({theme}) => theme.text};

`
const Comments = () => {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const currentVideo = useSelector((state: RootState) => state.video.currentVideo)

  const [comments, setComments] = useState<comment[]>()

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${currentVideo?._id}`)
        setComments(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchComments()
  }, [currentVideo])

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img}/>
        <Input placeholder='Add a comment...'/>
      </NewComment>
      {comments?.map(comment => (
        <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments