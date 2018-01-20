import React from 'react'
import Link from 'gatsby-link'
import avatar from '../../images/avatar.jpg'

import './index.css'

const Bio = () => (
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            <img src={avatar} />
            <p className="links">
              <a href="https://github.com/ccelestial" target="_blank">GitHub</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/ccelestial" target="_blank">LinkedIn</a>
            </p>
          </td>
          <td>
            <h1 className="title">
              Hi, I'm Tophs Celestial!
            </h1>
            <span className="subtitle">
              Full-Stack Ruby on Rails Developer / Software Engineer
            </span>
            <p className="description">
              A Christian, self-motivated individual, risk taker and an overall optimist. 
              I like to put new ideas to codes. 
              I want to make this world a better place by spreading small goodness as possible that's why I fell inlove with <a href="https://opensource.com/resources/what-open-source" target="_blank">Open Source</a>.
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Bio