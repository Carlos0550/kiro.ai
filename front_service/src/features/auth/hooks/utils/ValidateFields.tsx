import type { UserFormData } from "@/types/UserTypes"
import validator from "validator"
type userErrors = Partial<Record<keyof UserFormData, string>>
const error_msg = "Este campo es obligatorio"

export const validateUserFields = (formData: UserFormData) => {
    const errors: userErrors = {};

    if(!formData.user_name){
        errors.user_name = error_msg
    } else if(formData.user_name.length < 2) {
        errors.user_name = "El nombre debe tener al menos 2 caracteres"
    }

    if(!formData.user_email){
        errors.user_email = error_msg
    } else if(!validator.isEmail(formData.user_email)){
        errors.user_email = "El email ingresado no es válido"
    }

    if(!formData.user_password){
        errors.user_password = error_msg
    } else {
        const psw_options = {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 0
        }
        
        if(!validator.isStrongPassword(formData.user_password.trim(), psw_options)){
            errors.user_password = "La contraseña debe tener al menos 6 caracteres, incluyendo mayúsculas y minúsculas"
        }
    }

    return errors;
}