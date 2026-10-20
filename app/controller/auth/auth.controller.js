const { name } = require("ejs")

module.exports = {
    register: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                message: "register success"
            }
        })
    },
    login: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                message: "login success"
            }
        })
    },
    me: async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                id: "1",
                name: "rungrot",
                role: "admin",
                table: null
            }
        })
    }
}