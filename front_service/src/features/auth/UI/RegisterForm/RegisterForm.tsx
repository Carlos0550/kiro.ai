import { TextInput, PasswordInput, Button, Stack, Title, Text, InputWrapper } from "@mantine/core"
import { motion } from "framer-motion"

import { FaArrowLeft } from "react-icons/fa";
import useAuthForm from "../../hooks/useAuthForm";
const MotionDiv = motion.div


interface Props {
    goBack: () => void
}
function RegisterForm({
    goBack
}: Props) {
    const {
        onFinish,
        isLoading,
        errors,
        handleInputChange,
        formData
    } = useAuthForm()
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
        >
            <Stack gap="md">
                <MotionDiv
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Title
                        order={2}
                        ta="center"
                        fw={700}
                        size={"1.7rem"}
                        c="#2c2c2c"
                    >
                        🚀 Crear tu cuenta
                    </Title>

                    <Text
                        ta="center"
                        size="sm"
                        c="dimmed"
                        style={{ maxWidth: 300, margin: "0 auto", lineHeight: 1.6 }}
                    >
                        Empezá tu camino con <strong>Cleria AI</strong>, el asistente que te ayuda a tomar el control de tus finanzas personales.
                    </Text>

                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <InputWrapper
                        label="Nombre completo"
                        required
                        error={errors.user_name}
                    >
                    <TextInput
                        placeholder="Juan Pérez"
                        name="user_name"
                        onChange={handleInputChange}
                        value={formData.user_name}
                        error={!!errors.user_name}
                    />
                    </InputWrapper>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                   

                    <InputWrapper
                        label="Correo electrónico"
                        required
                        error={errors.user_email}
                    >
                     <TextInput
                        
                        placeholder="correo@ejemplo.com"
                        type="email"
                        error={!!errors.user_email}
                        onChange={handleInputChange}
                        value={formData.user_email}
                        name="user_email"
                    />
                    </InputWrapper>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >

                    <InputWrapper
                        label="Contraseña"
                        required
                        error={errors.user_password}
                    >
                     <PasswordInput
                        name="user_password"
                        placeholder="Tu contraseña segura"
                        onChange={handleInputChange}
                        value={formData.user_password}
                        error={!!errors.user_password}
                    />
                    </InputWrapper>
                </MotionDiv>

                <MotionDiv
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.5 }}
                >
                    <Button
                        onClick={onFinish}
                        fullWidth
                        variant="gradient"
                        disabled={isLoading}
                        loading={isLoading}
                        loaderProps={{type: "dots"}}
                        gradient={{ from: "#43CBFF", to: "#9708CC", deg: 120 }}
                    >
                        Registrarme
                    </Button>
                </MotionDiv>
                <MotionDiv
                    whileHover={{
                        x: [0, -1, 3, -1, 3, 0],
                        transition: { duration: 0.7 }
                    }}
                >
                    <Button
                        color="black"
                        maw={50}
                        onClick={goBack}
                        style={{ borderRadius: 50 }}
                        disabled={isLoading}
                    >
                        <FaArrowLeft size={18} />
                    </Button>
                </MotionDiv>
            </Stack>
        </MotionDiv>
    )
}

export default RegisterForm
