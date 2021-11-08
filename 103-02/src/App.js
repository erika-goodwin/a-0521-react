import { Routes, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticlesPage from './Pages/ArticlesPage'
import WorksPage from './Pages/WorksPage'
import ContactPage from './Pages/ContactPage'
import SingleArticlePage from './Pages/SingleArticlePage'
import Error404 from './Pages/Error404'

function App() {
  return (
    <>
      {/* header */}
      <HeaderNav />

      {/* routes */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/works/*' element={<WorksPage />} />
        <Route path='/articles' element={<ArticlesPage />}>
          <Route path=':id' element={<SingleArticlePage />} />
        </Route>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
