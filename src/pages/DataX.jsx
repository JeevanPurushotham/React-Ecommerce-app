import React from 'react'
import { useSelector } from 'react-redux'

const DataX = () => {
  const totalAmount = useSelector((state) => state.total)
  return (
    <div>
          {totalAmount}hello world
    </div>
  )
}

export default DataX
