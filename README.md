# realworld-api-express

token: 包含头部，负载，签名。使用.分割；
header payload signature
一般使用base64URL 算法进行混淆

可以存在cookie 或者localStorage

更好的做法是放在http请求头中
Authorization: Bearer <token>
