import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const swaggerUrl = 'http://localhost:5000/swagger/v1/swagger.json';

export class Swagger extends React.Component {
    static displayName = Swagger.name;

    render() {
        return <SwaggerUI url={swaggerUrl} />;
    }
}

export default Swagger;
