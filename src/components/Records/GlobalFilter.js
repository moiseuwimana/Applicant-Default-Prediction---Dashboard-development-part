import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

function GlobalFilter({filter, setFilter}) {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value)=>{
    setFilter(value||undefined)
  },1000)

  return (
    <div>
      <input
      className="custom-input global-search" 
      value={value||''} 
      onChange={(e)=>{
        setValue(e.target.value)
        onChange(e.target.value)
      }} 
      placeholder="&#128269;"
      />
    </div>
  )
}

export default GlobalFilter
