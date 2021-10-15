import ContactEmail from '../resources/contact01.png'
import ContactSvc from '../resources/contact02.png'

const ContactTitle = '联系我们';
const ContactSubTitle = '您的声音是我们改进产品的动力，欢迎提出您的建议~';

const ContactBox = {
    ContactBoxTitle: '我们的联系方式',
    Boxs: [
        {
            url: ContactEmail,
            title: '联系邮箱',
            content: 'service@opsany.com',
        },
        {
            url: ContactSvc,
            title: '服务时间',
            content: '早上 9：00 — 下午 6：30',
        }
    ]
}
const MessageBox = {
    MsgBoxTitle: '给我们留言',
    SubmitBtnText: '提交',
    FormItems:[
        {
            label:'您的姓名',
            name:'username',
            rules:[{required:true, message: '请输入您的姓名'}],
        },
        {
            label:'您的手机号',
            name:'iphone',
            rules:[{required:true, message: '请输入您的手机号'}],
        },
        {
            label:'您的邮箱',
            name:'email',
            rules:[{required:true, message: '请输入您的邮箱'}],
        },
        {
            label:'您的建议',
            name:'suggestions',
            comp:'textarea',
            rules:[{required:true, message: '请输入您的建议'}],
        }
    ]
}
export {
    ContactTitle,
    ContactSubTitle,
    ContactBox,
    MessageBox,
}