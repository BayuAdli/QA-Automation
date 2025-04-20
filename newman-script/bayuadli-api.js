const newman = require("newman")

newman.run({
    collection: "json-collection/bayuadli.postman_collection.json",
    environment: "json-env/bayuadli.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
