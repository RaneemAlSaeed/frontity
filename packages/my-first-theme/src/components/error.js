// File: /packages/my-first-theme/src/components/error.js

import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
  return (
    <div className="Spinner-container">
      <h2>404 Error</h2>
      <p>
        The path <em>{state.router.link}</em> cannot be found.
      </p>
    </div>
  )
}

export default connect(Error)