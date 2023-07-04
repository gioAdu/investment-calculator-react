import { useState } from 'react'
import styles from './Input.module.css'

const Input = (props) => {
  const [isValid, setIsValid] = useState(true)
  const handleValue = (e) => {
    if (e.target.value.length === 0) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
    props.setValue(e.target.value)
  }

  let errorMsg = <p className={styles.text}>Please Enter some value</p>

  return (
    <div className={styles.input_wrapper}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={{ isValid } && styles.error_border}
        type={props.type || 'number'}
        id={props.id}
        value={props.value}
        onChange={handleValue}
      />
      {!isValid && errorMsg}
    </div>
  )
}
export default Input
