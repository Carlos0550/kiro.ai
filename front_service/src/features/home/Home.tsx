import { Box, Flex, Text, Grid, Progress, Paper, Button } from '@mantine/core';
import { FaMoneyBillWave, FaMapMarkerAlt, FaCar, FaPiggyBank, FaCalendarAlt, FaRobot } from 'react-icons/fa';
import { useState } from 'react';

function Home() {
  const [userName] = useState("Carlos");

  const objetivos = [
    { label: 'Viaje a Brasil', value: 80, icon: <FaMapMarkerAlt /> },
    { label: 'Comprar un auto', value: 45, icon: <FaCar /> },
    { label: 'Ahorro $400.000', value: 60, icon: <FaPiggyBank /> },
  ];

  const sugerenciasIA = [
    "Cargar gasto de transporte de hoy",
    "Ver consejos para ahorrar en salidas",
    "Revisar progreso hacia el auto",
    "Revisar gastos de suscripciones",
    "Ver facturas por vencer esta semana",
  ];

  const pagosPendientes = [
    { titulo: 'Luz', vencimiento: '28/06', monto: '$7.200' },
    { titulo: 'Internet', vencimiento: '30/06', monto: '$5.400' },
    { titulo: 'Alquiler', vencimiento: '05/07', monto: '$48.000' },
  ];

  return (
    <Flex direction="column" gap="xl">
      <Text size="xl" fw={700}>👋 Bienvenido, <span style={{ color: '#444' }}>{userName}</span></Text>

      <Grid gutter="xl" grow>
        {/* Gasto mensual */}
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Paper h={"100%"} shadow="md" p="lg" radius="lg" withBorder style={{ backgroundColor: '#fffdf7' }}>
            <Flex direction="column" gap="xs">
              <Flex align="center" gap="sm">
                <FaMoneyBillWave />
                <Text fw={600}>Total gastado en junio</Text>
              </Flex>
              <Text fz="xl" fw={700} c="dark"> $129.870 </Text>
            </Flex>
          </Paper>
        </Grid.Col>

        {/* Objetivos financieros */}
        <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
          <Paper shadow="md" p="lg" radius="lg" withBorder style={{ backgroundColor: '#fffdf7' }}>
            <Flex direction="column" gap="md">
              <Flex align="center" gap="sm">
                <FaPiggyBank />
                <Text fw={600}>Tus objetivos financieros</Text>
              </Flex>
              {objetivos.map((obj, idx) => (
                <Box key={idx}>
                  <Flex justify="space-between">
                    <Text size="sm" fw={500}>{obj.icon} {obj.label}</Text>
                    <Text size="sm" fw={500}>{obj.value}%</Text>
                  </Flex>
                  <Progress value={obj.value} radius="xl" color="yellow" />
                </Box>
              ))}
            </Flex>
          </Paper>
        </Grid.Col>

        {/* Sugerencias de la IA */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper shadow="md" p="lg" radius="lg" withBorder style={{ backgroundColor: '#fffdf7' }}>
            <Flex direction="column" gap="md">
              <Flex align="center" gap="sm">
                <FaRobot />
                <Text fw={600}>¿Qué puede hacer Cleria por vos hoy?</Text>
              </Flex>
              {sugerenciasIA.map((text, i) => (
                <Button
                  key={i}
                  variant="light"
                  color="yellow"
                  radius="xl"
                  size="xs"
                  style={{ justifyContent: 'flex-start', textAlign: 'left' }}
                  fullWidth
                >
                  {text}
                </Button>
              ))}
            </Flex>
          </Paper>
        </Grid.Col>

        {/* A pagar este mes */}
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Paper h={"100%"} shadow="md" p="lg" radius="lg" withBorder style={{ backgroundColor: '#fffdf7' }}>
            <Flex direction="column" gap="sm">
              <Flex align="center" gap="sm">
                <FaCalendarAlt />
                <Text fw={600}>A pagar este mes</Text>
              </Flex>
              {pagosPendientes.map((item, idx) => (
                <Flex key={idx} justify="space-between" align="center">
                  <Text size="sm">{item.titulo} ({item.vencimiento})</Text>
                  <Text size="sm" fw={600}>{item.monto}</Text>
                </Flex>
              ))}
            </Flex>
          </Paper>
        </Grid.Col>

        {/* Resumen mensual */}
        <Grid.Col span={12}>
          <Paper shadow="md" p="lg" radius="lg" withBorder style={{ backgroundColor: '#fffdf7' }}>
            <Text fw={600}>📈 Resumen financiero mensual</Text>
            <Text size="sm" mt="xs" c="dimmed">
              Este mes has alcanzado el 72% de tus objetivos. Tu categoría con más gasto fue "Salidas" con $38.200. 
              Mantené tu constancia para llegar al ahorro que planeaste para agosto.
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Flex>
  );
}

export default Home;
