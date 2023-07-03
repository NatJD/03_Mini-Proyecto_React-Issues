import React from 'react'

const ListIssues = ({ issues }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Issue ID</th>
            <th>Title</th>
            <th>User</th>
            <th>Labels</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>
                <a href={issue.html_url} target='_blank' rel='noopener noreferrer'>
                  {issue.title}
                </a>
              </td>
              <td>{issue.user.login}</td>
              <td>
                {issue.labels.map((label) => (
                  <span key={label.id} className='label'>
                    {label.name}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListIssues
