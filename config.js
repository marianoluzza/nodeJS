module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || "mongodb://localhost:27017/shop",
    SECRET_TOKEN: "TOKEN_SECRETO_DE_NODEJS",
}