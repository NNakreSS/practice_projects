# nk-shadowui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/nk-shadowui.svg)](https://www.npmjs.com/package/nk-shadowui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nk-shadowui
```

## Usage

```jsx
import React from 'react'

import { Button } from 'nk-shadowui'
import 'nk-shadowui/dist/index.css'

export const Component = () => {
  return (
      <Button type='primary' text='Primary Button' />
      <Button text='Default Button' />
      <Button type='dashed' text='Dashed Button' />
      <Button type='text' text='Text Button' />
      <Button type='link' text='Link Button' />
        <h3>- use children -</h3>
        <Button type='primary'>Primary Button</Button> <br /> <br />
        <Button>Default Button</Button>
  )
}
```

## License

MIT © [NakreS](https://github.com/NNakreSS)
