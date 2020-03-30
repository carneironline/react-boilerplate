import React from 'react'

// import { Title } from './styles'

export default function Main() {
    console.log(process.env)
    return <>{process.env.REACT_APP_TITLE}</>
}
