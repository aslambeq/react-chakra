import Content from '../components/Content'
import Header from '../components/Header'
import reactLogo from '../assets/react.svg'
import { Button } from '@chakra-ui/react'

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <div>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => {}}>
            count is 5
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </Content>
    </>
  )
}

export default Layout
