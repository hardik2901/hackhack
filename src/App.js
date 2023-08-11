import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatBot from './chatbot/chat';
import Quizscreen from './QuizScreen';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/survey' exact element={Quizscreen}></Route>
        <Route path='/bot' exact element={ChatBot}> </Route>
      </Routes>
    </Router>
  )
}