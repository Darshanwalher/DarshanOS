import React from 'react'
import MacWindow from './MacWindow'
import gitHubData from '/src/assets/github.json'
import './github.scss'

const GitCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className="desc">{data.description}</p>

      <div className="tags">
        {data.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="urls">
        <a className='green' href={data.repoLink} target="_blank">Repo</a>
        {data.demoLink && (
          <a className='red' href={data.demoLink} target="_blank">Demo</a>
        )}
      </div>
    </div>
  )
}

const GitHub = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cards">
        {gitHubData.map(item => (
          <GitCard key={item.id} data={item} />
        ))}
      </div>
    </MacWindow>
  )
}

export default GitHub
