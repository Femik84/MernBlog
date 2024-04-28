//note: we are able to use 'import' instead of using 'require' by changing the type in package.json to 'module' insted of the default "common js"

import express from 'express'

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 3000')
});

