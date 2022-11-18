
import './App.css';
import React from 'react';
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

function App() {

  const [ markdown, setMarkDown ] = useState(
    `# Markdown preview
  # this is header 1
  ## this is header 2
  ### this is header 3

  ---
  this is some code
  ---
  [Geekster](https://geekster.in)

  ![Alt_text](https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS374029.jpg)

  **This is some image**

  - list 1
  - list 2
  - list 3

  ---

  1. Item 1
  2. Item 2
    
  ***This is some text***

  ---

  `
    );

  return (
    <>
      <div className="Main">
        <div className="right-container">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
        <div>
          <textarea 
            className="left-container" 
            value={markdown} 
            onChange={(e) => setMarkDown(e.target.value)}>
          </textarea>
        </div>
      </div>
    </>
  );
}

export default App;
