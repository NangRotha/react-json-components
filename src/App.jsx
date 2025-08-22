import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './layouts/Master'
import HomePage from './pages/homePage/view/HomePage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>} >
            <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
