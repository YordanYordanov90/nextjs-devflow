import React from 'react'

type Props = {children: React.ReactNode}

const layout = ({children}: Props) => {
  return (
    <div className='mt-20 flex flex-col items-center justify-center'>{children}</div>
  )
}

export default layout