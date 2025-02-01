const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router/index.js');
const errorHandler = require('./middleware/error-handler.js');
const app = express();

// 配置常用中间件
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use('/api', router);

app.use(errorHandler());

app.listen(PORT, () => {
  console.log(`Server is running at http://loaclhost:${PORT}`);
});
