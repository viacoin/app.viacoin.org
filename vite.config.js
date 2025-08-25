import { defineConfig } from 'vite';
import { resolve } from 'path';
import { transformSync } from 'esbuild';

export default defineConfig({
  base: '/',
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      'components': resolve(__dirname, 'src/components'),
      'src': resolve(__dirname, 'src'),
      'main.sass': resolve(__dirname, 'src/main.sass'),
      'react': 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3001
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "../node_modules/bulma/sass/utilities/_all"\n@import "../node_modules/bulma/sass/utilities/initial-variables"\n@import "../node_modules/bulma/sass/utilities/derived-variables"\n@import "./src/vars.sass"\n`
      }
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`
  },
  optimizeDeps: {
    esbuildOptions: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      loader: {
        '.js': 'jsx'
      }
    }
  },
  plugins: [
    {
      name: 'jsx-loader',
      transform(code, id) {
        // Transform .js files in src/ that contain JSX
        if (id.includes('/src/') && id.endsWith('.js')) {
          try {
            const result = transformSync(code, {
              loader: 'jsx',
              jsxFactory: 'h',
              jsxFragment: 'Fragment',
              format: 'esm'
            });
            return result.code;
          } catch (err) {
            // If it's not JSX, just return the original code
            return code;
          }
        }
      }
    }
  ]
});