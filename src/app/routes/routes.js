module.exports = (app) => {
    app.get('/', function (req, res) {
        res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">                
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Desafio 02</title>
                </head>                
                <body>
                    <h1>Hello World</h1>
                    <script src="./scripts/index.js"></script>
                </body>    
                </html>                
        `);
    });
    
    app.get('/teste', function (req, res) {
        res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">
                
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Desafio 02</title>
                </head>
                
                <body>
                    <h1>GALOPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERAAAAAAAAAAAAAAAAAAAAAAA</h1>
                    <script src="./scripts/index.js"></script>
                </body>    
                </html>`
        );
    });

    app.get('/00', function (req, res) {
        res.send(`
                <!DOCTYPE html>
                <html lang="pt-BR">
                
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Desafio 02</title>
                </head>
                
                <body>
                    <h1>Head Sho - OOOOOOOOPA </h1>
                    <script src="./scripts/index.js"></script>
                </body>    
                </html>`
        );
    });

}

