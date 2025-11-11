import React, { useEffect } from 'react'
import Result from './Result'

export default function Student() {
    useEffect(() => {
        console.log('student useEffect always run')
        return () => {
            console.log('stuent useEffect cleanup')
        }
    })
  return (
    <div>
        Student

        <Result/>
    </div>
  )
}
