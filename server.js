const app = require('./app');
const connectDB = require('./config/database');
const config = require('./config/config');
const  PORT = config.PORT || 3001;

connectDB();


app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});