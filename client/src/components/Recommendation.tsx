import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'
import { video } from '../types/Video'

const Container = styled.div`
  flex: 2;
`

type recommendationProps = {
  tags?: string[]
}

const Recommendation = ({tags}: recommendationProps) => {

  const [videos, setVideos] = useState<video[]>()

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [tags])
  return (

    <Container>
      {videos?.map(video => (
        <Card type='sm' key={video._id} video={video}></Card>
      ))}
    </Container>
  )
}

export default Recommendation