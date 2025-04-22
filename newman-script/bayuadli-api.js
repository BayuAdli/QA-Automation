const newman = require("newman")

newman.run({
    collection: "json-collection/API_Project_Bayu_Adli.postman_collection.json",
    environment: "./json-env/EnvBayu_Adli.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
