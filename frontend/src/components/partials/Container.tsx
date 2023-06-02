import React from 'react'

type Props = {
  children:React.ReactNode[]
}
const Container = (props:Props) => {
  return (
    <main className="as-container">
        {props.children}
    </main>
  )
}

export default Container