const express = require('express');
const app = express();
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/api/v1/dabba-route', function (req, res) {
    res.send('Dabba World!')
})

app.post('/api/v1/dabba-route', function (req, res) {
    console.log(req)
    res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))