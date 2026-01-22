import React, { useEffect, useState } from 'react'
import './note.scss'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
// Import these two for highlighting
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism' 

const Note = ({ windowName, setWindowsState }) => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        // Use '/note.txt' if /public/ gives you a 404
        fetch('/note.txt') 
            .then(res => res.text())
            .then(text => {
                const formattedMarkdown = "```typescript\n" + text + "\n```";
                setMarkdown(formattedMarkdown);
            })
            .catch(err => console.error("Fetch error:", err));
    }, [])

    return (
        <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
            <div className="note-window">
                {markdown ? (
                    <Markdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {markdown}
                    </Markdown>
                ) : (
                    <p>Loading.....</p>
                )}
            </div>
        </MacWindow>
    )
}

export default Note