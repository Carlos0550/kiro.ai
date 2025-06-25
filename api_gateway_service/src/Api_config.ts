import "dotenv/config"

const environment = process.env.ENVIRONMENT || "development"

export const services = {
    users_service: {
        port: 8000,
        prodUrl: "", 
    },
}

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
