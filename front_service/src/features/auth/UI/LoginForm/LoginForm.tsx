import { TextInput, PasswordInput, Button, Stack, Title, } from "@mantine/core"
import { motion } from "framer-motion"

import { FaArrowLeft } from "react-icons/fa";
const MotionDiv = motion.div


interface Props {
    goBack: () => void
}
function LoginForm({
    goBack
}: Props) {
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
                        🤖 Iniciar sesión
                    </Title>

                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <TextInput
                        label="Correo electrónico"
                        placeholder="correo@ejemplo.com"
                        type="email"
                        required
                    />
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <PasswordInput
                        label="Contraseña"
                        placeholder="Tu contraseña segura"
                        required
                    />
                </MotionDiv>

                <MotionDiv
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, delay: 1 }}
                >
                    <Button
                        fullWidth
                        variant="gradient"
                        gradient={{ from: "#43CBFF", to: "#9708CC", deg: 120 }}
                    >
                        Iniciar sesión
                    </Button>
                </MotionDiv>
                <MotionDiv
                    initial={{opacity:0, x:-35}}
                    animate={{opacity:1, x:0}}
                    transition={{delay: 1.3}}
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
                    >
                        <FaArrowLeft size={18} />
                    </Button>
                </MotionDiv>
            </Stack>
        </MotionDiv>
  )
}

export default LoginForm