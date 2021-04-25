const Hapi = require('hapi');

var db = [
    {id: 1, name: 'Abe', phone: '0965885655', email: 'abe@gmail.com'},
    {id: 2, name: 'Kebe', phone: '0966522530', email: 'kebe@live.com'}
];

const server = Hapi.server({
    port: 8080,
    host: 'localhost',
    routes: {
        cors: {
            origin: ['*'] // an array of origins or 'ignore'           
        }
    }
});

server.route({
    path: '/list',
    method: 'GET',
    handler: (request, h) => {
        return db;
    }
});

server.route({
    path: '/{id}',
    method: 'GET',
    handler: (request, h) => {
        return db.find(i => i.id == request.params.id) || null;
    }
});

server.route({
    path: '/create',
    method: 'PUT',
    handler: (request, h) => {
        const post = request.payload
        const newContact = {
            id: db.length+1,
            name: post.name, phone: post.phone, email: post.email
        }
        db.push(newContact);
        return newContact.id;
    }
});

server.route({
    path: '/update/{id}',
    method: 'POST',
    handler: (request, reply) => {
        const post = request.payload
        let contact = db.find(i => i.id == request.params.id) || null
        if (contact == null) {
            return reply
                .response('Not found.')
                .code(404);
        }
        contact.name = post.name ?? contact.name;
        contact.phone = post.phone ?? contact.phone;
        contact.email = post.email ?? contact.email;
        return 'Ok';
    }
});

const start = async () => {
    await server.start();
};

start();