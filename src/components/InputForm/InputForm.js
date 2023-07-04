import { useState } from 'react'
import styles from './InputForm.module.css'
import Input from './Input/Input'

const InputForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState('')
  const [yearlyContriburion, setYearlyContriburion] = useState('')
  const [expectedReturn, setExpectedReturn] = useState('')
  const [duration, setDuration] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [errorText, setErrorText] = useState('')

  const onSubmit = (e) => {
    let isValid = false
    e.preventDefault()

    if (currentSavings && yearlyContriburion && expectedReturn && duration) {
      setIsFormValid(true)
      isValid = true
    } else {
      setIsFormValid(false)
    }

    if (!isValid) {
      setErrorText(
        <p className={styles.errorText}>Please fill out the fields</p>
      )
    } else {
      const finalValues = {
        currentSavings: currentSavings,
        yearlyContriburion: yearlyContriburion,
        expectedReturn: expectedReturn,
        duration: duration,
      }
      props.calculateHandler(finalValues)
    }
  }

  const resetForm = () => {
    setCurrentSavings('')
    setYearlyContriburion('')
    setExpectedReturn('')
    setDuration('')
    setErrorText('')
    return props.calculateHandler([])
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles['input-group']}>
        <Input
          label='Current Savings ($)'
          id='current-savings'
          value={currentSavings}
          setValue={setCurrentSavings}
        />
        <Input
          label='Yearly Savings  ($)'
          id='yearly-contribution'
          value={yearlyContriburion}
          setValue={setYearlyContriburion}
        />
      </div>
      <div className={styles['input-group']}>
        <Input
          label='Expected Interest (%, per year)'
          id='expected-return'
          value={expectedReturn}
          setValue={setExpectedReturn}
        />
        <Input
          label='Investment Duration (years)'
          id='duration'
          value={duration}
          setValue={setDuration}
        />
      </div>
      <p className={styles.actions}>
        <button type='reset' onClick={resetForm} className={styles.buttonAlt}>
          Reset
        </button>
        <button type='submit' className={styles.button}>
          Calculate
        </button>
      </p>
      {!isFormValid && errorText}
    </form>
  )
}

export default InputForm
