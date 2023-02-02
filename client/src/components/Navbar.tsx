<<<<<<< HEAD
import { useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Upload from './Upload'
=======
import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({theme}) => theme.text};
`
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({theme}) => theme.text};
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`
<<<<<<< HEAD
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

const Navbar = () => {

  const currentUser = useSelector((state: RootState) => state.user.currentUser)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const [q, setQ] = useState<string>('')

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input placeholder='Search' onChange={(e: React.ChangeEvent) => { setQ((e.target as HTMLInputElement).value)} }/>
            <SearchOutlinedIcon onClick={() => {
              navigate(`/search?q=${q}`)
            }} style={{cursor: 'pointer'}}/>
          </Search>
          {currentUser 
          ? <User>
              <VideoCallOutlinedIcon onClick={() => setOpen(true)}/>
              <Avatar src={currentUser.img}/>
              {currentUser.name}
            </User>
          : <Link to='signin' style={{textDecoration: 'none'}}>
              <Button><AccountCircleOutlinedIcon/>Sign In</Button>
          </Link>}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen}/>}
    </>
=======



const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon/>
        </Search>
        <Link to='signin' style={{textDecoration: 'none'}}>

        <Button><AccountCircleOutlinedIcon/>Sign In</Button>
        </Link>
      </Wrapper>
    </Container>
>>>>>>> 32c77c90990a9444f5780c3258fa837ad3dce9e6
  )
}

export default Navbar