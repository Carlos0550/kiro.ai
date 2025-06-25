export const base_api={
    url: import.meta.env.VITE_SERVER_URL === "production"
    ? ""
    : "http://localhost:3000"
}

export const endpoints = {
    users: new URL(`${base_api.url}/users`),
}