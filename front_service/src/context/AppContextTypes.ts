import type { UserFormData } from "@/types/UserTypes"

interface UserHookInterface{
    createUser: (formData: UserFormData) => Promise<boolean>
}

export interface AppContextTypes{
    width: number,
    useUserHook: UserHookInterface
}