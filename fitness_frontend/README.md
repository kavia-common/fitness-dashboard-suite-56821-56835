# fitness_frontend

React frontend for the Fitness Dashboard Suite.

## Environment variables

This container expects these variables to be provided by the platform:

- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NODE_ENV
- REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT

## Development

```bash
npm install
npm start
```

The preview system will inject `PORT` automatically (typically 3000) when starting the container.
