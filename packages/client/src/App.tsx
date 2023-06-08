import { useEffect } from 'react'
import './App.css'

import ShowPage from './pages/ShowPage'
import CatPage from './pages/CatPage'
import ArticlePage from './pages/AtriclePage'
import { NavLink, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Menu from './components/Menu/Menu'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CatPage />} />
          <Route path="/shows" element={<ShowPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
