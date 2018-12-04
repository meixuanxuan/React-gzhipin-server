/**
 * Created by 梅轩 on 2018/12/3.
 */
const express = require('express');

const router = new express.Router();
router.get('/',(req,res)=>{
  res.send('这是服务器返回的响应')
})
module.exports=router