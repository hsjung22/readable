import React from 'react'
import moment from 'moment'
import PencilSquare from 'react-icons/lib/fa/pencil-square'
import CalendarIcon from 'react-icons/lib/fa/calendar'

function AuthorDateScore({ entity }) {
  return (
    <p>
      <span className="author-display">
        <PencilSquare size={18} /> {entity.author}
      </span>
      <span className="date-display">
        <CalendarIcon size={18} /> {moment(entity.timestamp).format("LL")}
      </span>
      <span className="vote-score-display">
        {entity.voteScore} points
      </span>
    </p>
  )
}

export default AuthorDateScore
