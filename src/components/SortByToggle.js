import React from 'react'

function sortByToggle({ sortBy, handletoggleSort }){

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="form-inline pull-right">
          <div className="form-group">
            <label className="sort-by-display">Sort by</label>
            <select
              className="form-control"
              defaultValue={sortBy}
              onChange={(e) => handletoggleSort(e) }
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

export default sortByToggle
