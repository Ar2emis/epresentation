const { build } = require('esbuild');
const chokidar = require('chokidar');
const servor = require('servor');
const fs = require('fs-extra');
const path = require('path');
const { yamlPlugin } = require('esbuild-plugin-yaml');

(async () => {
  const builder = await build({
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    entryPoints: ['./src/client/index.jsx'],
    incremental: true,
    minify: false,
    outdir: './build/public/static/',
    plugins: [yamlPlugin()]
  })
  const logError = (error) => console.error(error)
  const copyPresentationAssets = () => {
    fs.copySync('./src/client/assets/images/presentations', './build/public/presentation_assets', { overwrite: true },
                (err) => { if (err) logError(err) })
  }
  const rebuild = () => {
    builder.rebuild().catch(logError)
    copyPresentationAssets()
  }

  chokidar
    .watch('./src/client/**/*.{js,jsx,css,yml,png,jpeg,jpg}', {
      awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 100,
      },
    })
    .on('add', rebuild)
    .on('change', (path) => {
      console.log(`File ${path} has been changed to client app`)
      rebuild()
    })
    .on('unlink', (path) => {
      console.log(`File ${path} has been removed to client app`)
      rebuild()
    })
    .on('addDir', (path) => {
      console.log(`Directory ${path} has been added to client app`)
      rebuild()
    })
    .on('unlinkDir', (path) => {
      console.log(`Directory ${path} has been removed to client app`)
      rebuild()
    })

  fs.copyFile('./src/client/index.html', './build/public/index.html', (err) => {
    if (err) throw err;
  })
  fs.copyFile('./src/client/assets/images/favicon.ico', './build/public/favicon.ico', (err) => {
    if (err) throw err
  })
  copyPresentationAssets()

  await servor({
    root: './build/public/',
    static: false,
    fallback: 'index.html',
    reload: true,
    port: 3001,
  })

  console.info(['Servor hot refresh at http://localhost:3001'])
})()
