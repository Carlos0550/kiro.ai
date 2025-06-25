import type { UserFormData } from '@/types/UserTypes'
import { useCallback, useMemo } from 'react'
import { endpoints } from '../ContextUtils/ApiConfig'
import { showNotification } from '@mantine/notifications'

type CreateUserResponse = {
    details	: string,
    error: string
}
function useUsers() {
    const createUser = useCallback(async(formData: UserFormData): Promise<boolean> => {
        const url = new URL(`${endpoints.users}/new-user`)

        try {
            const response = await fetch(url,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data:CreateUserResponse = await response.json()

            if(!response.ok) throw new Error(data.details || "Error desconocido.")
            showNotification({
                title: `Bienvenido a CleriaAI, ${formData.user_name}`,
                message: "Aguarde un segundo...",
                color: "green",
                position: "top-right",
                autoClose: 3000
            })
            return true
        } catch (error) {
            console.log(error)
            showNotification({
                title: "No fué posible crear su cuenta.",
                message: `Razón: ${(error as Error).message}`,
                color: "red",
                position: "top-right",
                autoClose: 5000
            })
            return false
        }
    },[])

    return useMemo(() => ({
        createUser
    }), [
        createUser
    ])
}

export default useUsers