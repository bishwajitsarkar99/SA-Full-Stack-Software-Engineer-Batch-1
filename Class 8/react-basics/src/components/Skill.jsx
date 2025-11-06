import React from 'react'

export default function Skill(props) {

  const { skill, progress } = props;

  return (
    <div style={props.style}>{skill} - {progress}</div>
  )
}

