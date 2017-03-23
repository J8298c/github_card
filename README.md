<h1>Github Cards</h1>

<p>Github Cards is an application that lets you view your github profile from any device your using. Simply type in your Github username and click submit and your profile loads. The profile displays various information some of the information it renders is your actual name that you have listed on your github account, your location, if you have a blog site listed it will appear as well, it also displays your follower and developers your following. The last information it displays is your repo count, gist count(only your public searchable gist and repos).</p>


<h3>For Developers</h3>
<p>If you want to further develop or add to this repo pull down a fresh copy, currently its using Yarn for package management. Download yarn from https://yarnpkg.com/en/ after its installed run yarn install from the command line, to download dependencies.</p>
<p>The repo is also using webpack as its build system along side webpack-dev-server to compile all js files and provide a local enviorment to run the app. There are various commands to use to build and serve the app. Lastly be aware that this application uses the fetch api which is not currently supported by all browsers, but it is using wtwg-fetch polyfill in order to be supported in all browsers, so if you cant fetch the profile that would be the first place to look</p>

<ul>
    <li>Yarn build- Builds the bundle.js file by compiling all the .js files within the app. It also runs the build with the watch flag which enables you to add refactor, and remove code without having to retype Yarn Build</li>
    <li>Yarn serve- starts the local webpakc-dev-server so you can go view the application in your browser.</li>
</ul>

<h3>All other users</h3>
<p>If you just want to run the app locally and test it all you need to do is,
<ol>
<li> Clone the repo to your machine</li>
<li> Run Yarn install to install the needed dependecies</li>
<li>From the command line run yarn build</li>
<li>Finally run yarn serve and you can view the app from this  <a href='http://localhost:8080'>link</a>
</ol>

<h3>Technologies used</h3>
<ol>
<li>Yarn</li>
<li>Webpack</li>
<li>Webpack-dev-server</li>
<li>Chai</li>
<li>Enzyme</li>
<li>React</li>
<li>React Router</li>
<li>Redux</li>
<li>Redux-Thunk</li>
<li>Mocha</li>
<li>whatwg-fetch</li>
</ol>


