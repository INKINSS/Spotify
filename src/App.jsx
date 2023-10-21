import './App.css'
import Content from './components/content'
import SideBar from './components/sideBar'
import PlayBackList from './components/playBackList'

function App() {

  return (
    <main className='flex bg-black h-screen'>
      <SideBar />
      <Content />
      <PlayBackList />
    </main>
  )
}

export default App
