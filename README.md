# Proyectos



#AOS animation installation

Commands:
------------------------------------------------------------------------------------
ng new animate
npm install aos --save
npm install --save-dev @types/aos

angular.json:
------------------------------------------------------------------------------------
...
"styles": [
"./node_modules/aos/dist/aos.css",
"styles.scss"
],
"scripts": [
"./node_modules/aos/dist/aos.js"
]
...

app.component:
------------------------------------------------------------------------------------
...
import * as AOS from 'aos';
...
ngOnInit() {
    AOS.init();
}
...

#Bootstrap Installation

npm install bootstrap

"node_modules/bootstrap/dist/css/bootstrap.min.css",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
