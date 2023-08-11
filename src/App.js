import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './chatbot/chat';
import Quizscreen from './QuizScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/bot' exact Component={ChatBot}> </Route>
        <Route path='/survey' exact Component={Quizscreen}></Route>

      </Routes>
    </Router>
  )
}