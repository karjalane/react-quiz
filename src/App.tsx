import React, { useState } from 'react'
import { fetchQuizQuestions } from './API'
import PulseLoader from 'react-spinners/PulseLoader'
// Components
import QuestionCard from './components/QuestionCard'
import PointsAtEnd from './components/PointsAtEnd'
// Types
import { QuestionState } from './API'
// styles
import { GlobalStyle, Wrapper, Select } from './App.styles'

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [difficulty, setDifficulty] = useState('easy')
  const [lastQ, setLastQ] = useState(false)

  console.log(questions)

  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS
      , difficulty
    )

    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLastQ(false)
    setTimeout(() => { setLoading(false) }, 1000)
    //setLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value
      
      // check answer vs. correct answer
      const correct = questions[number].correct_answer === answer

      // add score if answer correct
      if (correct) setScore(prev => prev + 1)

      // save answer in user answer array
      const answerObject = {
        question: questions[number].question
        , answer
        , correct
        , correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject])

      if (number + 1 === TOTAL_QUESTIONS) {
        setTimeout(() => {
          setGameOver(true)
        }, 5000)
        setLastQ(true)
      }
    }
  }

  const nextQuestion = () => {
    // move to next question if not last question
    const nextQuestion = number + 1
    console.log(nextQuestion)

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  const startDifficulty = () => {
    return (
      <div className="startDiff">
        <button className="start" onClick={ startTrivia }>
          Start
        </button>
        <Select value={ difficulty } onChange={ (e) => setDifficulty(e.currentTarget.value) }>
          <option value='easy'>Easy</option>
          <option value='medium'>Medium</option>
          <option value='hard'>Hard</option>
        </Select>
      </div>
    )
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        { lastQ && 
          <PointsAtEnd
            score = { score }
          /> 
        }
        { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div>{ startDifficulty() }</div>
        ) : null }
        { !gameOver
          ? <p className="score">Score: { score }</p>
          : null }
        { loading && 
          <div className="loader">
            <PulseLoader />
          </div> }
        { !loading && !gameOver && (
          <QuestionCard 
            questionNr={ number + 1 }
            totalQuestions={ TOTAL_QUESTIONS }
            question={ questions[number].question }
            answers={ questions[number].answers }
            userAnswer={ userAnswers ? userAnswers[number] : undefined }
            callback={ checkAnswer }
          />
        )}
        { !gameOver 
          && !loading 
          && userAnswers.length === number + 1 
          && number !== TOTAL_QUESTIONS - 1
          ? (
            <button className="next" onClick={ nextQuestion }>
              Next Question
            </button>
            )
          : null
        }
      </Wrapper>
    </>
  )
}

export default App