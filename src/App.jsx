import './App.css'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import Main from './components/main/Main'

function App() {

  return (
    <>
<Header/>
<Hero/>
<Main/>
  <h1 className="text-3xl font-bold underline bg-slate-300 p-3">
      Hello world!
    </h1>
    </>
  )
}

export default App
