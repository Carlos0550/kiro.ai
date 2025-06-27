import { Flex, Text, Box, ActionIcon } from '@mantine/core'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

import { TbHomeSpark } from "react-icons/tb";
import { MdSecurity, MdOutlineAnalytics } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useAppContext } from '@/context/AppContext';

import { motion } from 'framer-motion';

function Layout() {
    const {
        width
    } = useAppContext()
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(true);

    const isMobile = width < 768

    const navItems = [
        { path: "/", label: "Inicio", icon: <TbHomeSpark /> },
        { path: "/chat", label: "Chatea con Cleria", icon: <IoChatboxEllipsesOutline /> },
        { path: "/account-security", label: "Seguridad", icon: <MdSecurity /> },
        { path: "/finances", label: "Finanzas", icon: <FaMoneyCheckDollar /> },
        { path: "/insights", label: "Insights", icon: <MdOutlineAnalytics /> },
        { path: "/reminders", label: "Recordatorios", icon: <FaRegClock /> },
    ];

    return (
        <Flex
            w="100vw"
            h="100vh"
            bg="linear-gradient(135deg, #fffdeb, #fff176)"

            style={{ overflow: 'hidden' }}
        >
            <Box
                w={isExpanded ? "260px" : "80px"}
                h="100vh"
                bg="linear-gradient(to bottom, #fdd835, #fff9c4)"

                style={{
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "inset 0 0 8px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.2)",
                    transition: "width 0.3s ease",
                    position: isMobile && isExpanded ? "fixed" : "static",
                    zIndex: "9"
                }}
            >
                <Box
                    p="xl"
                    style={{
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                        position: "relative",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isExpanded ? 'space-between' : 'center'
                    }}
                >
                    {isExpanded ? (
                        <Flex
                            gap={5}
                        >
                            <Text fw={600} fz={"h1"} c="#212121">Cleria.</Text>
                            <Text fz={"h1"} fw={700} c="#FFFFFF">AI</Text>
                        </Flex>
                    ) : (
                        ""
                    )}

                    <ActionIcon
                        size="lg"
                        variant="subtle"
                        color="black"
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{
                            backgroundColor: "rgba(0 0 0 / 0.1)",
                            border: "1px solid rgba(0 0 0 / 0.2)",
                            borderRadius: "8px"
                        }}
                    >
                        {isExpanded ? <IoChevronBack /> : <IoChevronForward />}
                    </ActionIcon>
                </Box>

                <Flex direction="column" p="md" gap="xs">
                    {navItems.map((item) => {
                        const active = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >
                                <Box
                                    p="md"
                                    style={{
                                        borderRadius: "16px",
                                        backgroundColor: active ? "rgba(255, 255, 255, 0.2)" : "transparent",
                                        border: active ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                                        transition: "all 0.3s ease, transform 0.3s ease",
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: isExpanded ? "flex-start" : "center",
                                        alignItems: "center"
                                    }}
                                    onMouseEnter={(e) => {
                                        if (!active) {
                                            e.currentTarget.style.backgroundColor = "rgba(0 0 0 / 0.1)";
                                            e.currentTarget.style.transform = "translateX(4px)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (!active) {
                                            e.currentTarget.style.backgroundColor = "transparent";
                                            e.currentTarget.style.transform = "none";
                                        }
                                    }}
                                    title={isExpanded ? "" : item.label}
                                >
                                    <Flex
                                        align="center"
                                        gap={isExpanded ? "md" : "0"}
                                        justify={isExpanded ? "flex-start" : "center"}
                                        w="100%"
                                    >
                                        <Text size="lg" c="#212121">{item.icon}</Text>
                                        {isExpanded && (
                                            <Text
                                                c="#333" fw={500} style={{ whiteSpace: "nowrap" }}
                                            >
                                                {item.label}
                                            </Text>
                                        )}
                                    </Flex>
                                </Box>
                            </Link>
                        );
                    })}
                </Flex>
            </Box>

            <Box
                flex={1}
                p="sm"
                style={{
                    background: "#fffdf7",
                    overflowY: "auto",
                    padding: "2rem",
                    opacity: isMobile && isExpanded ? 0.5 : 1
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <Outlet />
                </motion.div>
            </Box>
        </Flex>
    );
}

export default Layout;
