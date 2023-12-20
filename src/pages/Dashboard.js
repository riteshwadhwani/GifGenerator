import React from 'react'
import Random from './Gif'
import Tag from './Tag'

export const Dashboard = () => {
  return (
    <div className="flex flex-row ">
      <Random/>
      <Tag/>
    </div>
  )
}
