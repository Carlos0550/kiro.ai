import "dotenv/config"

const environment = process.env.ENVIRONMENT || "development"
console.log("Entorno de .env:", process.env.ENVIRONMENT)
export const services = {
    users_service: {
        port: 8001,
        prodUrl: "http://users_service:8001", 
    },
}
console.log("Entorno:", environment)
function getServiceUrl(serviceName: any) {
    const service = services[serviceName]

    if (!service) {
        throw new Error(`Servicio desconocido: ${serviceName}`)
    }

    if (environment === "production") {
        return service.prodUrl
    }

    return `http://localhost:${service.port}`
}

export { getServiceUrl }
