import { type UserFormData } from '@/types/UserTypes'
import { useState } from 'react'
import { validateUserFields } from './utils/ValidateFields'
import { showNotification } from '@mantine/notifications'
import { useAppContext } from '@/context/AppContext'

function useAuthForm() {
  const {
    useUserHook:{
      createUser
    }
  } = useAppContext()
  const [formData, setFormData] = useState<UserFormData>({
    user_email: "",
    user_name: "",
    user_password: ""
  })

  const [registerSuccess, setRegisterSuccess] = useState<boolean>(false)

  const [showErrors, setShowErrors] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

  }

  const errors = validateUserFields(formData)

  const hasErrors = Object.keys(errors).length > 0

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onFinish = async (): Promise<void> => {
    setShowErrors(true)
    
    if(hasErrors){
      showNotification({
        title: "Se encontraron errores en el formulario.",
        message: "Verifique los campos e intente nuevamente.",
        autoClose: 3000,
        position: "top-right",
        color: 'orange'
      })

      return;
    }

    setIsLoading(true)
    const result = await createUser(formData)
    setIsLoading(false)

    if(result) setRegisterSuccess(true)
  }
  
  return {
    onFinish,
    isLoading,
    errors: showErrors ? errors : {},
    formData,
    handleInputChange,
    registerSuccess
  }
}

export default useAuthForm