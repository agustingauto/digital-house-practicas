module.exports = {
    handleRequest: function(path, res) {
        switch (path) {
            case '/':
                res.end('Bienvenidos a DH Movies');
                break;
            case '/en-cartelera':
                res.end('En cartelera');
                break;
            case '/mas-votadas':
                res.end('Mas votadas');
                break;
            case '/sucursales':
                res.end('Sucursales');
                break;
            case '/contactos':
                res.end('Contactos');
                break;
            case '/preguntas-frecuentes':
                res.end('Preguntas Frecuentes');
                break;
            default:
                res.end('404 ERROR');
                break;
        }

    }
}