Completed coursework of **Learn Tailwind CSS for free final project** \
by Victor Gonzalez

[GitHub Page](https://arta.github.io/scrimba-learn-tailwindcss-final-project/)
of this repo

Scrimba's course [website](https://scrimba.com/learn/tailwind)

### Local Setup

#### Putting it all together (Node.js assumed installed), step by step:

• Turn folder into a Node.js app / project / workspace:</br>
`learn-tailwindcss % npm init`</br>
: Creates `package.json`

• Install Tailwindcss:</br>
`learn-tailwindcss % npm install postcss`</br>
`learn-tailwindcss % npm install postcss-cli`</br>
`learn-tailwindcss % npm install tailwindcss`</br>
`learn-tailwindcss % npm install autoprefixer`</br>

• Or in a single run:</br>
`learn-tailwindcss % npm install postcss postcss-cli tailwindcss autoprefixer`

• Notes:</br>
: PostCSS may throw error if installed over older version, see Tailwindcss docs for instructions</br>
: postcss-cli is required to run npm build script (will create in a bit)</br>
: npm installations create & populate `/node_modules` with all of the installed
  modules, this is huge, always add to gitignore

• Create `.gitignore`</br>
: Add:</br>
`/node_modules`</br>
`/build` #<= standard practice

• Create `postcss.config.js`</br>
: Add:
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
: Can be generated when initializing Tailwind config</br>
`learn-tailwindcss % npx tailwindcss init -p`</br>

• Create `index.html`</br>
: Add: standard html boilerplate code

• Create `/stylesheets/source.css`</br>
: Add:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
: Custom base styles, components and/or utilities are added here

• Add to `package.json`:</br>
: add to the "scripts" object our postcss build script key-value:</br>
`"build": "postcss stylesheets/source.css -o build/compiled.css"`

• Add to `index.html`:</br>
`<head>..<link href="/build/compiled.css" rel="stylesheet">..`</br>
`<body><header class="bg-red-400">Hello World!</header>..` # will
  test if everything works after we run our build script

• Finally, run the build script:</br>
`learn-tailwindcss % npm run build`</br>
: Re-run after Tailwind customizations in `source.css` (or whatever our name is) or `tailwind.config.js`
: purge our ginormous `build/compiled.css` with `NODE_ENV production` option
  in a new build (compile) for production script:
`"production": "NODE_ENV production postcss stylesheets/source.css -o build/compiled.css"`

And that's it. All works.

• To extend, configure, customize Tailwind, and/or activate VS Code's Tailwind CSS Intellisense extension:</br>
`learn-tailwindcss % npx tailwindcss init`</br>
: Creates `tailwind.config.js` with default config content</br>
: Tailwind's existing styles (theme) are extended here

• Later I found out (from Tailwind docs config section) that:</br>
`learn-tailwindcss % npx tailwindcss init -p`</br>
: Creates both, `tailwind.config.js` & `postcss.config.js` with default config content

#### 3-2-2021:
https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor</br>
: By Tailwindcss, unhelpful

• Tried:</br>
https://medium.com/codingthesmartway-com-blog/tailwind-css-for-absolute-beginners-3e1b5e8fe1a1</br>
: Good, this guide helped

#### 3-1-2021:
https://tailwindcss.com/docs/installation</br>
: By Tailwindcss, turned out unhelpful:

`~ % npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
Then create `postcss.config.js`

`learn-tailwindcss % npx tailwindcss init`
Creates `tailwind.config.css`
