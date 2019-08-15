import React from 'react'

const Search = ({ onChange, value }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col align-self-center">
        <input
          className="form-control-sm mb-2"
          type="text"
          onChange={onChange}
          value={value}
          placeholder="Enter pokemon name..."
          autoFocus
        />
      </div>
    </div>
  </div>
)

export default Search
