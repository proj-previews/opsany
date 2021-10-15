import cmdbImg from '../resources/ia_100000012.png'
import controlImg from '../resources/ia_100000013.png'
import jobImg from '../resources/ia_100000014.png'
import monitorImg from '../resources/ia_100000015.png'
import cmpImg from '../resources/ia_100000016.png'
import devopsImg from '../resources/ia_100000017.png'
import bigscreenImg from '../resources/ia_100000018.png'
import rbacImg from '../resources/ia_100000019.png'
import workbenchImg from '../resources/ia_100000020.png'
import EventImg  from '../resources/ia_100000004.png'
import SafetyImg from '../resources/ia_100000005.png'
import MonitorImg from '../resources/ia_100000006.png'
import AppImg from '../resources/ia_100000007.png'

const BannerTitle ='云原生智能运维平台';
const BannerDesc = 'OpsAny是云原生场景下的智能化运维平台。我们倡导“以资源为中心”和“以应用为中心”相融合的运维理念，提高运维效率、保障业务连续性。';

// Tags 
const Tags = [
    {
        url: EventImg,
        alt: 'Event',
        title: '事件驱动',
        subTitle: '事件驱动的自动化运维',
    },
    {
        url: SafetyImg,
        alt: 'SafetyOps',
        title: '安全运维',
        subTitle: '内置堡垒机、指令和会话审计',
    },
    {
        url: MonitorImg,
        alt: 'Monitor',
        title: '智能监控',
        subTitle: '可观测Metrics、Tracing、Logging',
    },
    {
        url: AppImg,
        alt: 'App',
        title: '应用管理',
        subTitle: '以应用为中心的DevOps工具链',
    }
]

// Tag content 
const ResourceTitle = '以资源为中心';
const ResourceDescA = 'OpsAny建立了CMDB（Configuration Management Database）为核心的资源平台;';
const ResourceDescB = '以资源的维度管理资源的模型、对象、状态和资源对象之间的关系，通过CMDB对接管控平台、作业平台、监控平台、日志平台等；';
const ResourceDescC = '实现IT资源的一站式智能运维管理。';
const StatusDesc = '状态';
const MetricDesc = '指标';
const ResourceDesc  = '资源';
const EventDesc = '事件';
const RDesc = '关系';
const ModuleDesc = '模型';

const AppTitle = '以应用为中心';
const AppDescA = 'OpsAny遵循OAM（Open Application Model）规范，以应用的维度管理应用组件、配置、特征，屏蔽掉底层的Kubernetes、虚拟机等应用层驱动；';
const AppDescB = '通过对接DevOps平台，管理应用的需求、设计、开发、测试、发布、部署全生命周期；';
const AppDescC = '以应用为中心展示应用的资源、监控、日志、容量等。';
const LogDesc = '日志';
const PipelineDesc = '流水线';
const LinkDesc = '调用链';
const GraphDesc = '拓扑';
const DeployDesc = '部署';

const ProductTitle='我们的产品';
const ProductSubTitle ='Make Ops Perfect';

const ProductHotTitle = '热门产品';
const ProductHotDesc = '资源平台是OpsAny的CMDB平台，推出了CI之间轻量级关系（从属关系和连接关系）设计， 解决CMDB中资源关系管理混乱的问题；通过数据联邦，CMDB可以很轻松的和不同的平台进行深度集成， 解决数据同步和数据一致性的问题；资源平台支持对接多云管理，自动同步公有云资产。';

const ProductBoxs = {
    DetailDesc: '查看详情',
    Boxs: [
        {
            url: cmdbImg,
            alt: 'cmdb',
            title:'资源平台',
            desc:'资源平台是以资源和应用为中心的新一代CMDB。',
        },
        {
            url: controlImg,
            alt: 'control',
            title:'管控平台',
            desc:'管控平台是主机Agent管理和堡垒机管理平台。',
        },
        {
            url: jobImg,
            alt: 'job',
            title:'作业平台',
            desc:'作业平台是运维工具编排、自动化执行的工具平台。',
        },
        {
            url: monitorImg,
            alt: 'monitor',
            title:'监控平台',
            desc:'监控平台是支持主机、组件、服务拨测的智能化监控。',
        },
        {
            url: cmpImg,
            alt: 'cmp',
            title:'云管平台',
            desc:'云管平台是混合云管理和成本容量管理平台。',
        },
        {
            url: devopsImg,
            alt: 'devops',
            title:'应用平台',
            desc:'应用平台是以应用为中心的DevOps管理平台。',
        },
        {
            url: bigscreenImg,
            alt: 'bigscreen',
            title:'大屏展示',
            desc:'大屏展示是运维数据化和可视化展示大屏。',
        },
        {
            url: rbacImg,
            alt: 'rbac',
            title:'统一权限',
            desc:'统一权限是OpsAny的用户和权限管理平台。',
        },
        {
            url: workbenchImg,
            alt: 'workbench',
            title:'工作台',
            desc:'工作台是运维中心、包含工单管理和个人中心。',
        }
    ]
}

const ProductAdvTitle = '产品亮点';
const ProductAdvSubTitle = '事件驱动的智能化运维平台';
const FeaturesTitle = '客户评价&功能优势';
const FeaturesSubTitle ='倾听使用者的心声';
const CmdbP = '资源平台';
const ControlP = '管控平台';
const JobP = '作业平台';
const MonitorP = '监控平台';
const AdviewName = 'Adview';
const AdviewSay ='通过OpsAny运维平台,将 Adview在代码异地开发、频繁更新运维、日常运行监控、客户异常排查等方面有机的低成本进行整合。资源平台管所有IT资源、管控平台将所有运维对象进行纳管、作业平台进行命令式和声明式的自动化运维管理、监控平台进行多维监控并结合事件驱动实现故障自愈,为Adview打造了一套完全弹性化的可看、可管、可查、可追溯的统一平台。提高日常运行效率,降低日常运营成本。';
const CmdbCardTitle ='资源管理';
const CmdbCardDesc = '资源平台是 OpsAny的数据核心,是以应用为核心的MDB产品,用户可以自定义为管理对象创建模型和字段,支持字段分组和多种数据类型。丰富的视图展示,可以让用户从资产、业务、架构多个维度进行资源的查看和搜索。通过采集器,用户可以为定义的资源。';
const CmdbCardTags = ['模型自定义','关系可视化','资产自动采集'];

const JiuWuName ='九五智驾';
const JiuWuSay = '通过使用OpsAny,九五智驾将之前依靠各公有云或私有云各种不同管理工具的工作。转变为使用统的管理方案和工具,对外提供一致的数据和管理口径。在安全方面,由于九五智驾业务较为多样性的环境,不同的业务权限和主机权限,需要开放给运维人员、业务人员、甲方人员。由之前主要依靠账号密码的单一管理,转变为使用OpsAny堡垒机管理,对发生问题后的查询追测、审计等提供了有效支持。';
const ControlCardTitle = '管控平台';
const ControlCardDesc = '管控平台是OpsAny的底层管理通道，抽象出三种底层原子操作：命令执行、文件分发、数据采集。用户可以在管控平台手工录入节点信息,也可以通过资源平台获取。内置堡垒机功能,支持常见的SSH、VNC、RDP、 Tel net协议,满足对 Linux、 Windows主机和网络设备的管控工作。';
const ControlCardTags = ['多控制器','海量纳管','远程控制'];
const BondName = '某集团证券公司';
const BondSay ='OpsAny帮助客户从命令式的传统作业执行、脚本自动化转向了以面向“终态”的声明式状态管理,实现了自动化运维的一致性。通过声明式管理原本需要做一个复杂的作业编排的需求变成了一个单一的状态声明的YAML文件,实现了基础设施即代码,从而实现了将一切纳入到版本控制中的DevOps最佳实践。通过OpsAny专业交付工程师的半天培训，客户的运维工程师即掌握了状态管理的写法。';
const JobCardTitle = '作业平台';
const JobCardDesc = '作业平台是OpsAny的自动化运维产品,主要提供三种不同的运维管理模式。内置脚本执行和文件分发两个原子操作。命令式:通过作业编排可以将两个原子操作进行自由编排,通过流程编排完成更高层面的混合编排。事件驱动:通过事件捕捉触发对应的执行工作流。';
const JobCardTags = ['事件驱动','流程编排','状态执行'];
const RetailName ='某新零售企业';
const RetailSay = 'OpsAny智能监控平台直接集成客户已经部署完毕的Zabbix和 Prometheus平台,进行实时数据采集和告警通知。通过 Nginx+Lua为客户定制开发了支持高并发的JS0N数据上报接口,接入了数千个无人售货终端。通过自定义大屏,可以非常方便为运维提供数据支撑。统一的事件中心为用户进行统一的告警去重、智能化告警收敛。通知支持企业微信、钉钉等多种告警方式。';
const MonitorCardTitle = '监控平台';
const MonitorCardDesc = '监控是运维工作的重中之重,所有的运维对象均需要进行监控,通常我们会将监控进行分层:从下往上有数据中的动环监控、物理设备监控、操作系统监控、中间件监控、数据库监控、应用服务监控、业务监控、APM、流量监控、安全监控、网络监控、舆论监控等。';
const MonitorCardTags = ['监控大屏','事件中心','服务拨测'];
const PartnersTitle = '支持的云厂商';
const ContactTitle = '获取解决方案白皮书';
const ContactNumber = '请输入您的手机号码';
const ContactMail = '请输入您的邮箱地址';
const ContactButton = '获取白皮书';
const ContactMsg = '信息提交成功， 稍后会有工作人员与您联系';
const ContactNumberMsg = '请输入正确的手机号';
const ContactEmailMsg = '请输入正确的邮箱地址';

export {
    BannerTitle,
    BannerDesc,
    ResourceTitle,
    ResourceDescA,
    ResourceDescB,
    ResourceDescC,
    StatusDesc,
    MetricDesc,
    ResourceDesc,
    EventDesc,
    RDesc,
    ModuleDesc,
    AppTitle,
    AppDescA,
    AppDescB,
    AppDescC,
    LogDesc,
    PipelineDesc,
    LinkDesc,
    GraphDesc,
    DeployDesc,
    ProductTitle,
    ProductSubTitle,
    ProductHotTitle,
    ProductHotDesc,
    ProductBoxs,
    ProductAdvTitle,
    ProductAdvSubTitle,
    FeaturesTitle,
    FeaturesSubTitle,
    CmdbP ,
    ControlP,
    JobP,
    MonitorP,
    AdviewName,
    AdviewSay, 
    CmdbCardTitle,
    CmdbCardDesc,
    CmdbCardTags,
    JiuWuName,
    JiuWuSay,
    ControlCardTitle,
    ControlCardDesc,
    ControlCardTags,
    BondName,
    BondSay,
    JobCardTitle,
    JobCardDesc,
    JobCardTags,
    RetailName,
    RetailSay,
    MonitorCardTitle,
    MonitorCardDesc,
    MonitorCardTags,
    PartnersTitle,
    ContactTitle,
    ContactNumber,
    ContactMail,
    ContactButton,
    Tags,
    ContactMsg,
    ContactNumberMsg,
    ContactEmailMsg,
}