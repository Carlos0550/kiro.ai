import AnimatedBackground from "@/components/AnimatedBackground"
import { Flex, Paper, Button, Title, Stack, Text } from "@mantine/core"
import { motion } from "framer-motion"
import React, { useState } from "react"
import RegisterForm from "./UI/RegisterForm/RegisterForm"
import LoginForm from "./UI/LoginForm/LoginForm"

const MotionDiv = motion.div

function Auth() {
    const [formType, setFormType] = useState<"login" | "register" | "none">("none")

    return (
        <React.Fragment>
            <AnimatedBackground />
            <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
                <MotionDiv
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}

                >
                    <Paper
                        p="xl"
                        shadow="lg"
                        radius="lg"
                        style={{
                            minWidth: 340,
                            maxWidth: 380,
                            border: "1px solid #eaeaea",
                            background: "white",
                        }}
                    >
                        <Stack gap="md">
                            {formType === "none" && (
                                <Flex
                                    direction={"column"}
                                    gap={10}
                                >
                                    <MotionDiv
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.4 }}
                                    >
                                        <Title
                                            order={2}
                                            ta="center"
                                            fw={700}
                                            style={{
                                                fontSize: "1.9rem",
                                                background: "linear-gradient(90deg, #43cbff, #9708cc)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                marginBottom: "0.4rem",
                                            }}
                                        >
                                            Welcome to Cleria AI
                                        </Title>

                                        <Text
                                            ta="center"
                                            size="sm"
                                            c="dimmed"
                                            style={{ maxWidth: 280, margin: "0 auto", fontStyle: "italic" }}
                                        >
                                            The assistant your life needs to take control.
                                        </Text>

                                    </MotionDiv>
                                    <MotionDiv
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.4 }}
                                    >
                                        <Text
                                            ta="center"
                                            c={"#2c2c2c"}
                                            fw={600}
                                        >
                                            ¿How do you want to continue?
                                        </Text>
                                    </MotionDiv>
                                    <MotionDiv
                                        initial={{
                                            x: -30, opacity: 0
                                        }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 800 }}
                                    >
                                        <Button
                                            fullWidth
                                            color="midnightblue"
                                            variant="filled"
                                            onClick={() => setFormType("login")}
                                        >
                                            Iniciar sesión
                                        </Button>
                                    </MotionDiv>

                                    <MotionDiv
                                        initial={{
                                            x: 30, opacity: 0
                                        }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Button
                                            fullWidth
                                            variant="gradient"
                                            gradient={{ from: "#43CBFF", to: "#9708CC", deg: 120 }}

                                            onClick={() => setFormType("register")}
                                        >
                                            Crear una cuenta gratis
                                        </Button>

                                    </MotionDiv>
                                </Flex>
                            )}
                        </Stack>

                        {formType === "register" && (
                            <RegisterForm goBack={() => setFormType("none")} />
                        )}

                        {formType === "login" && (
                            <LoginForm goBack={() => setFormType("none")} />
                        )}
                    </Paper>
                </MotionDiv>
            </Flex>
        </React.Fragment>
    )
}

export default Auth
