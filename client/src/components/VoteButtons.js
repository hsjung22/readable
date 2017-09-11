import React from 'react'
import ArrowUp from 'react-icons/lib/fa/arrow-up'
import ArrowDown from 'react-icons/lib/fa/arrow-down'

function VoteButtons({ entity, onVoteClick }) {
  return (
    <div>
      <button
        className="btn btn-default"
        onClick={() => {
          onVoteClick({
            entity,
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
            entity,
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
