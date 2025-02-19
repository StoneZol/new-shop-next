import { useRef } from 'react'
import FormBuilder from './../ui/form-builder';

export default function useFormBuilder() {
    const fieldsRef = useRef([])
    const onSubmitRef = useRef()

    const builder = {
        addField: (name, label, type) => {
            fieldsRef.current.push({
                name,
                label,
                type,
                required: false,
                value: ''
            })
            return builder;
        },
        makeRequared: () => {
            const lastField = fieldsRef.current[fieldsRef.current.length - 1]
            if (lastField) {
                lastField.required = true
            }
            return builder;
        },
        setOnSubmit: (onSubmit) => {
            onSubmitRef.current = onSubmit
            return builder;
        },
        build: () => {
            <FormBuilder fields={fieldsRef.current} onSubmitHandler = {onSubmitRef.current}/>
        },
        clearRefs: () => {
            fieldsRef.current = [],
            onSubmitRef.current = undefined;
        },
    }
  return builder
}
