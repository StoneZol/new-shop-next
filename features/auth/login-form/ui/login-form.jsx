'use client'
import FormBuilder from '@/shared/form-builder/ui/form-builder'
import React from 'react'

export default function LoginForm() {
    const onSubmit = (data) => {
        console.log('form sub', data)
    }
    const fields = [
        {name: 'username', label: 'Логин', type: 'text', requared: true},
        {name: 'password', label: 'Пароль', type: 'password', requared: true},
    ]
  return <FormBuilder fields={fields} onSubmitHandler={onSubmit} submitText={'submit it'}/>
}
