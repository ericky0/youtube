import React from 'react'
import styled from 'styled-components'

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
        </Text>
      </Details>
    </Container>
  )
}

export default Comment