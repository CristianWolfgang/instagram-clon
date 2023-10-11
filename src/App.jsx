
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CheckLogin from './CheckLogin'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CheckLogin/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
