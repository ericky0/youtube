import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Video from './pages/Video'
import SignIn from './pages/SignIn'
import Search from './pages/Search'
import {darkTheme, lightTheme } from './utils/Theme'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`
const Wrapper = styled.div`
  padding: 22px 96px;
`


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true)


  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Router>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main>
        <Navbar />
          <Wrapper>
            <Routes>
              <Route path='/'>
                <Route index element={<Home type='random'/>}/>
                <Route path='trends' element={<Home type='trends'/>}/>
                <Route path='subscriptions' element={<Home type='sub'/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='signin' element={<SignIn />}/>
                <Route path='video'>
                  <Route path=':id' element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </Router>
    </Container>
  </ThemeProvider>
  );
}

export default App;