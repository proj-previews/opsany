const DownloadTitle = '免费下载'
const DownloadSubTitle = '请提供一个有效的邮箱地址，下载地址和证书将通过此邮箱发送给您，我们郑重声明会保护您的隐私。';

const  TrialForm = {
    titleText: '证书申请',
    submitText: '申请试用',
    items:[
        {
            label: '您的姓名',
            name: 'username',
            placeHolder: '请输入您的姓名',
            rules:[{ required: true, message: '请输入您的姓名' }],
        },
        {
            label: '您的邮箱',
            name: 'email',
            placeHolder: '用于邮箱发送下载地址',
            rules:[{ required: true, message: '请输入您的邮箱'}],
        },
        {
            label: '公司名称',
            name: 'company',
            placeHolder: '用于生成永久License授权',
            rules:[{ required: true, message: '请输入公司'}],
        },
        {
            label: '手机号码',
            name: 'iphone',
            placeHolder: '请输入手机号码',
            addonButtonText: '获取验证码',
            rules:[{ required: true, message: '请输入您的手机号'}],
        },
        {
            label: '验证码',
            name: 'code',
            placeHolder: '请输入短信验证码',
            rules:[{ required: true, message: '请输入验证码'}],
        },
        {
            label: '版本',
            name: 'version',
            placeHolder: '请选择版本',
            comp: 'select',
            options: [ '1.2.0', '1.3.0' ],
            rules:[{ required: true, message: '请选择版本'}],
        }
    ]
}
const InstallTexts = {
    installTitle: '安装说明',
    steps:[
        {
            title:'第一步：免费申请',
            content:'我们会通过邮件将下载地址和证书信息发送给您。',
        },
        {
            title:'第二步：准备部署服务器',
            content:'部署需要一台干净的系统：CentOS或者Ubuntu，配置详情：最小 2CPU、8G内存、50G空闲磁盘，推荐4CPU、16G内存、100G空闲磁盘。',
        },
        {
            title:'第三步：部署',
            content:'请根据文档部署OpsAny，并进行测试试用，欢迎您提出宝贵的建议。',
        },
        {
            title:'第四步：加入新运维社区',
            content:'扫描页面下方二维码，关注新运维社区，回复加群，小助手拉您进入交流群。',
            lastStep: true,
        }
    ]
}
export {
    DownloadTitle,
    DownloadSubTitle,
    TrialForm,
    InstallTexts,
}