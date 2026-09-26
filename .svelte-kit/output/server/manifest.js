export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.CdTzPdfU.js",app:"_app/immutable/entry/app.Bt4qtHL4.js",imports:["_app/immutable/entry/start.CdTzPdfU.js","_app/immutable/chunks/Bd8NQipy.js","_app/immutable/chunks/kYjyFZ6B.js","_app/immutable/chunks/BWtfk_er.js","_app/immutable/entry/app.Bt4qtHL4.js","_app/immutable/chunks/kYjyFZ6B.js","_app/immutable/chunks/B_kOmrxe.js","_app/immutable/chunks/BA2zqBCj.js","_app/immutable/chunks/BWtfk_er.js","_app/immutable/chunks/GkDOYPQr.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
