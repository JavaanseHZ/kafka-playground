const PROXY_CONFIG = [
    {
        context: [
            "/api/client",
            "/api/client/*"
        ],
        target: "http://localhost:5000",
        secure: false,
        logLevel: "debug"
    },
    {
        context: [
            "/api/contract",
            "/api/contract/*"
        ],
        target: "http://localhost:6003",
        secure: false,
        logLevel: "debug"
    }

]

module.exports = PROXY_CONFIG;