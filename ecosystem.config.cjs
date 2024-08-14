module.exports = {
	apps: [
		{
			name: 'POLLCAT',
			script: './index.js',
			cwd: './build',
			watch: false,
			restart_delay: 500,
			env: {
				NODE_ENV: 'production',
			},
			env_demo: {
				NODE_ENV: 'production',
			},
		},
	],
};
