import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  return (
    <button className={styles.button + ' ' + styles[props.type]} {...props}>
      {props.children || props.text}
    </button>
  )
}
