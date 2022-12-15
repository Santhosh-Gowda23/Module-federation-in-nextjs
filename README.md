# Module_Federation_NextJS

### Step: 1


open /home && npm i && npm run dev



open /catalog && npm i && npm run dev



### Notice: 

Footer and Header components from Home project are exposed to SHOP project by adding below code

Code snippet : 
        exposes: {
          "./footer": "./components/Footer.js",
          "./header": "./components/Header.js",
        },


Catalog page from SHOP is exposed to HOME  by adding below code

Code snippet : 
     extraOptions: {
          exposePages: true,
        }
