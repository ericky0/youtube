import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({theme}) => theme.bgLighter};
  border: 1px solid ${({theme}) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`
const Title = styled.h1`
  font-size: 24px;
  color: ${({theme}) => theme.text};
`
const SubTitle = styled.h2`
  color: ${({theme}) => theme.text};
  font-size: 20px;
  font-weight: 300;
`
const Input = styled.input`
  border: 1px solid ${({theme}) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({theme}) => theme.text};
`
const Button = styled.button`
  background-color: ${({theme}) => theme.soft};
  color: ${({theme}) => theme.textSoft};
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
`
const More = styled.div`
  display: flex;
  font-size: 12px;
  color: ${({theme}) => theme.textSoft};
  margin-top: 10px;
`
const Links = styled.div`
  margin-left: 50px;
`
const Link = styled.span`
  margin-left: 15px;
  cursor: pointer;
`

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to AskTube</SubTitle>
        <Input placeholder='username'/>
        <Input placeholder='password' type='password'/>
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder='username'/>
        <Input placeholder='email' type='email'/>
        <Input placeholder='password' type='password'/>
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn