import React from 'react'

type Props = {
  score: number
}

const PointsAtEnd: React.FC<Props> = ({ score }) => {
  return (
    score === 1 ? (
      <div>
        <h1>You got { score } point!</h1>
        <h2>Pathetic...</h2>
      </div>
      ) 
      : score === 0 ? (
      <div>
        <h1>You got { score } points!</h1>
        <h2>Pathetic...</h2>
      </div>
      )
      : score < 6 ? (
      <div>
        <h1>You got { score } point!</h1>
        <h2>It's something</h2>
      </div>
      )
      : score < 9 ? (
      <div>
        <h1>You got { score } point!</h1>
        <h2>You're not totally useless</h2>
      </div>
      )
      : (
        <div>
        <h1>You got { score } point!</h1>
        <h2>That couldn't be all luck, can it?</h2>
      </div>
      )
  )
}

export default PointsAtEnd