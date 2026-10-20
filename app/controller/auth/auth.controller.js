module.exports = {
    me:async (req, res) => {
        res.status(200).json({
            status: 200,
            data: {
                id : 1,
                name: "nampla",
                role: "admin",
                table: null
            }
        })
    }
}