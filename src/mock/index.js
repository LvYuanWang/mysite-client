import Mock from 'mockjs';
import './banner';
import './blog';
import './setting';
import './about';
import './project';
import './message';

// 延迟一秒到两秒发送请求
Mock.setup({
    timeout: '1000-2000'
})