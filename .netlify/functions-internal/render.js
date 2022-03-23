const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-c51f67c5.js","js":["start-c51f67c5.js","chunks/vendor-91177727.js","chunks/singletons-d1fb5791.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "forums",
				pattern: /^\/forums\/?$/,
				names: [],
				types: [],
				path: "/forums",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "forums/create/[id]",
				pattern: /^\/forums\/create\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				path: "/auth/register",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				path: "/auth/login",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "home",
				pattern: /^\/home\/?$/,
				names: [],
				types: [],
				path: "/home",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "shop",
				pattern: /^\/shop\/?$/,
				names: [],
				types: [],
				path: "/shop",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
