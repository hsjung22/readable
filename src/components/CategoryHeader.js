import React from 'react'

function CategoryHeader({ posts, sortBy, toggleSort }){
  return(
    <div className="row">
      <div className="col-xs-12">
        <div className="form-inline pull-right">
          <div className="form-group">
            <label className="sort-by-display">Sort by</label>
            <select
              className="form-control"
              defaultValue={sortBy}
              onChange={(e) => {
                toggleSort({ posts: e.target.value })
              }}
              >
                <option value="-voteScore">Vote</option>
                <option value="-timestamp">Date</option>
              </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader
