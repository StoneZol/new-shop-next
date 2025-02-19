import { useForm } from "react-hook-form"
import styles from './form-builder.module.scss'

export default function FormBuilder({fields, onSubmitHandler, submitText}) {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    if (onSubmitHandler){
      onSubmitHandler(data)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <div className={styles.block} key={field.name}>
          <input
              className={styles.input}
              placeholder={`${field.label}${field.requared ? ' *' : ''}`}
              {...register(field.name)}
              type={field.type} />
        </div>
      ))}
      <button className={styles.button}> {submitText}</button>
    </form>
  )
}
