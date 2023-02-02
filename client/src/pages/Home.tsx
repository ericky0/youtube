import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { video } from '../types/Video'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

type  HomeProps = {
  type: string
}

const Home = ({type}: HomeProps) => {

  const [videos, setVideos] = useState<[video]>()
  
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])

  return (
    <Container>
      {videos?.map(video => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home