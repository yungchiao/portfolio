

const { defineConfig } = require('vite');
const { createVuePlugin } = require('vite-plugin-vue2');

module.exports = defineConfig({
    plugins: [createVuePlugin()],
    css: {
        postcss: { plugins: [] } // 強制不用任何 PostCSS 外掛
    }
});