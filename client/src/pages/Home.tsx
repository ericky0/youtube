<<<<<<< HEAD
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { video } from '../types/Video'
=======
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

<<<<<<< HEAD
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
=======
const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
    </Container>
  )
}

export default Home