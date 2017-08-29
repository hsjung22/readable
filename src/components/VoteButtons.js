import React from 'react'
import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'

function VoteButtons({ id, onVoteClick }) {
  return (
    <div>
      <button
        className="btn btn-default"
        onClick={() => {
          onVoteClick({
            id,
            option: "upVote",
          })
        }}
      >
        <ArrowUp size={15}/>
      </button>
      <button
        className="btn btn-default"
        onClick={() => {
          onVoteClick({
            id,
            option: "downVote",
          })
        }}
      >
        <ArrowDown size={15}/>
      </button>
    </div>
  )
}

export default VoteButtons
