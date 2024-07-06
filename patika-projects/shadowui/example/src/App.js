import React from 'react'

import { Button } from 'nk-shadowui'
import 'nk-shadowui/dist/index.css'

const App = () => {
  return (
    <div id='app'>
      <Button type='primary' text='Primary Button' />
      <Button text='Default Button' />
      <Button type='dashed' text='Dashed Button' />
      <Button type='text' text='Text Button' />
      <Button type='link' text='Link Button' />
      <div>
        <h3>- use children -</h3>
        <Button type='primary'>Primary Button</Button> <br /> <br />
        <Button>Default Button</Button>
      </div>
    </div>
  )
}

export default App
