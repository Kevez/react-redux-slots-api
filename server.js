const hapi = require('hapi');
const server = hapi.server({
	port: 7777,
	host: 'localhost',
	routes: {
		cors: true
	}
});

server.route({
	method: 'GET',
	path: '/play',
	handler: (req, h) => {
		return {
			balance: 999,
			win: 20,
			layout: [
				['A', 'A', 'A'],
				['A', 'A', 'A'],
				['A', 'A', 'A']
			]
		};
	}
});

const init = async () => {
	await server.start();
	console.log(`Server started at: ${server.info.uri}`);
};

init();