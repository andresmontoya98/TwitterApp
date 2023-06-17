import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer'

import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { TweetPage } from './pages/TweetPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { UserPage } from './pages/UserPage';

import './App.css'
function App() {

  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/tweet/:id' element={<TweetPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
