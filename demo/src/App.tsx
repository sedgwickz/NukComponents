import React, { useState } from 'react'
import TextInput from '@sedgwickz/lib2'
export default () => {
  const [state, setState] = useState(1)
  return (
    <div>
      <TextInput />
    </div>
  )
}
