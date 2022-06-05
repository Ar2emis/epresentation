import { default as React, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import './stylesheets.css'

export default function Code({ element }) {
  const [hidden, setHidden] = useState(false)

  return (
    <div className='relative mt-4'>
      {
        element.hidden &&
        <div 
          className='absolute top-0 left-0 bg-black w-full h-full text-white'
          onClick={(_) => setHidden(true) } hidden={hidden}
        >
          <div className='flex justify-center items-center w-full h-full'>
            <span className='h-fit'>Show</span>
          </div>
        </div>
      }
      <SyntaxHighlighter className='h-full' language={element.language} useInlineStyles={false} showLineNumbers={true}>
        {element.text}
      </SyntaxHighlighter>
    </div>
  )
}
