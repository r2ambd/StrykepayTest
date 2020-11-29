const defaultConfig = {
PORT: process.env.PORT || 3000,
};
const username='dbuser'
const password='I1Od6gCgoK7TtT88'
const devConfig = { MONGO_URL: 'mongodb+srv://'+username+':'+password+'@cluster0.j0cvx.mongodb.net/TEST1?retryWrites=true&w=majority', };
const testConfig = { MONGO_URL: 'mongodb+srv://'+username+':'+password+'@cluster0.j0cvx.mongodb.net/TEST1?retryWrites=true&w=majority',};
const prodConfig = { MONGO_URL: 'mongodb+srv://'+username+':'+password+'@cluster0.j0cvx.mongodb.net/TEST1?retryWrites=true&w=majority', };


function envConfig(env) {

     switch (env) {
         case 'development':
             return devConfig;
         case 'test':
             return testConfig;
         default:
             return prodConfig;
     }
 }

 //Take defaultConfig and make it a single object
 //So, we have concatenated two objects into one
 export default { ...defaultConfig,
     ...envConfig(process.env.NODE_ENV),
 };
