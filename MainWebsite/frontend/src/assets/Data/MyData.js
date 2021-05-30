
//importing essential image

import BorderAllIcon from '@material-ui/icons/BorderAll';
import BuildIcon from '@material-ui/icons/Build';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import CodeIcon from '@material-ui/icons/Code';
import LockIcon from '@material-ui/icons/Lock';
import MergeTypeIcon from '@material-ui/icons/MergeType';



//web development data
import Table from '../../assets/images/Web Development/table.png'
import DescriptionImage from '../../assets/images/Web Development/description.jpg'
import img1 from '../../assets/images/Web Development/methodoloty/img1.jpeg'
import img2 from '../../assets/images/Web Development/methodoloty/img2.jpeg'
import img3 from '../../assets/images/Web Development/methodoloty/img3.jpeg'
import img4 from '../../assets/images/Web Development/methodoloty/img4.jpeg'
import img5 from '../../assets/images/Web Development/methodoloty/img5.jpeg'
import img6 from '../../assets/images/Web Development/methodoloty/img6.jpeg'





//mobile development


import DescriptionMobile_dev from '../../assets/images/mobile Development/description.jpg';

import img1_mobile from '../../assets/images/mobile Development/methedology/goal.png'
import img2_mobile from '../../assets/images/mobile Development/methedology/stretigy.jpg'
import img3_mobile from '../../assets/images/mobile Development/methedology/design.jpg'
import img4_mobile from '../../assets/images/mobile Development/methedology/development.jpg'
import img5_mobile from '../../assets/images/mobile Development/methedology/testing.jpg'
import img6_mobile from '../../assets/images/mobile Development/methedology/as.jpg'



//ai

import Banner_Photo from '../../assets/images/ai/banner_photo.png';
import Descrioption_Photo from '../../assets/images/ai/photo1.png';

//json database




export const WebData = [
    {
        header: "web development",
        content: [
            'First impressions are  everything – and a strategic, well-designed website is the best way to ensure your business puts its best foot forward. A business website plays a major role in depicting your intentions and goals. Just a company profile is worthless and so we help you build an informative and impressive website to draw the attention of your valuable customers.',
            'At Orange Programming, we design and deliver websites that work hard to put you in the best possible light. Get a visually stunning website that offers the ultimate user experience. Our web designers and developers produce interfaces that are as beautiful as they are functional.',
            'As a leading web development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating business websites according to the demands. We offer custom website development services including WordPress Development, e-Commerce Website Development, Magento Development, Custom Web App Development, Joomla Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our web specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.',
            
        ] ,
        bannerImg: Table,
        photo: DescriptionImage,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a website and creates the first impression on people. Our adept web designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of web services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your website. Visual appeal + user-friendly design = the difference between an average, lackluster website and one that makes a memorable impression. ',
                img: img3
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a website is crafted with utmost essential and fine elements. We cater to strong web development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free page loading, as well as a user-friendly web structure. Whether you need just a revamping of your prevailing website or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the website. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your website is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your website will be active. With the updating of any security problem, we will update your website as well.',
                img: img6
            }
        ]
    }
];


export const MobileData = [

    {
        header: 'mobile development',
        content: [
            'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
            'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
            'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
        ] ,
        photo: DescriptionMobile_dev,
        bannerImg: Table,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1_mobile
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2_mobile
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                img: img3_mobile
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4_mobile
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5_mobile
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                img: img6_mobile
            },
        ]
    },
    {
        header: 'mobile development',
        content: [
            'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
            'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
        ] ,
        photo: DescriptionMobile_dev,
        bannerImg: Table,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1_mobile
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2_mobile
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                img: img3_mobile
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4_mobile
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5_mobile
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                img: img6_mobile
            },
        ]
    },
    {
        header: 'mobile development',
        content: [
            'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.',
            'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
            'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
            
        ] ,
        photo: DescriptionMobile_dev,
        bannerImg: Table,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1_mobile
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2_mobile
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                img: img3_mobile
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4_mobile
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5_mobile
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                img: img6_mobile
            },
        ]
    },
    {
        header: 'mobile development',
        content: [
            'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
            'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
            'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
        ] ,
        photo: DescriptionMobile_dev,
        bannerImg: Table,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1_mobile
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2_mobile
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                img: img3_mobile
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4_mobile
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5_mobile
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                img: img6_mobile
            },
        ]
    }

];

export const AIData = [
    {
        header: "Predictable Artificial Intelligence",
        content: [
            'First impressions are  everything – and a strategic, well-designed website is the best way to ensure your business puts its best foot forward. A business website plays a major role in depicting your intentions and goals. Just a company profile is worthless and so we help you build an informative and impressive website to draw the attention of your valuable customers.',
            'At Orange Programming, we design and deliver websites that work hard to put you in the best possible light. Get a visually stunning website that offers the ultimate user experience. Our web designers and developers produce interfaces that are as beautiful as they are functional.',
            'As a leading web development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating business websites according to the demands. We offer custom website development services including WordPress Development, e-Commerce Website Development, Magento Development, Custom Web App Development, Joomla Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our web specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.',
            
        ] ,
        bannerImg: Banner_Photo,
        photo: Descrioption_Photo,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a website and creates the first impression on people. Our adept web designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of web services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your website. Visual appeal + user-friendly design = the difference between an average, lackluster website and one that makes a memorable impression. ',
                img: img3
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a website is crafted with utmost essential and fine elements. We cater to strong web development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free page loading, as well as a user-friendly web structure. Whether you need just a revamping of your prevailing website or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the website. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your website is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your website will be active. With the updating of any security problem, we will update your website as well.',
                img: img6
            }
        ]
    }
    
];


export const WindowsData = [
    {
        header: "windows application",
        content: [
            'First impressions are  everything – and a strategic, well-designed website is the best way to ensure your business puts its best foot forward. A business website plays a major role in depicting your intentions and goals. Just a company profile is worthless and so we help you build an informative and impressive website to draw the attention of your valuable customers.',
            'At Orange Programming, we design and deliver websites that work hard to put you in the best possible light. Get a visually stunning website that offers the ultimate user experience. Our web designers and developers produce interfaces that are as beautiful as they are functional.',
            'As a leading web development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating business websites according to the demands. We offer custom website development services including WordPress Development, e-Commerce Website Development, Magento Development, Custom Web App Development, Joomla Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our web specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.',
            
        ] ,
        bannerImg: Table,
        photo: DescriptionImage,
        methodology:[
            {
                id : 1,
                header: 'Goals',
                logo: <BorderAllIcon/>,
                content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                img: img1
            },
            {
                id : 2,
                header: 'Strategy',
                logo: <BuildIcon/>,
                content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                img: img2
            },
            {
                id : 3,
                header: 'Visual Desing',
                logo: <CropOriginalIcon/>,
                content: 'Design determines the visual aesthetic of a website and creates the first impression on people. Our adept web designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of web services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your website. Visual appeal + user-friendly design = the difference between an average, lackluster website and one that makes a memorable impression. ',
                img: img3
            },
            {
                id : 4,
                header: 'Development',
                logo: <CodeIcon/>,
                content: 'The stage where a website is crafted with utmost essential and fine elements. We cater to strong web development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free page loading, as well as a user-friendly web structure. Whether you need just a revamping of your prevailing website or a full-scale flash application development, our passion is to make the best out of everything.',
                
                img: img4
            },
            {
                id : 5,
                header: 'Quality Testing',
                logo: <LockIcon/>,
                content: 'The time to check and review the quality and credibility of the website. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your website is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                img: img5
            },
            {
                id : 6,
                header: 'Service After Delivering',
                logo: <MergeTypeIcon/>,
                content: 'Our service is not for one time, we will provide every types of technical support as long as your website will be active. With the updating of any security problem, we will update your website as well.',
                img: img6
            }
        ]
    }
];



















export const Data = [
    [
        {
            id: 1,
            page_link: 'web_development',
            header: "web development",
            content: [
                'First impressions are  everything – and a strategic, well-designed website is the best way to ensure your business puts its best foot forward. A business website plays a major role in depicting your intentions and goals. Just a company profile is worthless and so we help you build an informative and impressive website to draw the attention of your valuable customers.',
                'At Orange Programming, we design and deliver websites that work hard to put you in the best possible light. Get a visually stunning website that offers the ultimate user experience. Our web designers and developers produce interfaces that are as beautiful as they are functional.',
                'As a leading web development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating business websites according to the demands. We offer custom website development services including WordPress Development, e-Commerce Website Development, Magento Development, Custom Web App Development, Joomla Development, Content Management System, Mobile App Development, Mobile Responsive Website, Internet Marketing & Digital Marketing. Our web specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.',
                
            ] ,
            bannerImg: Table,
            photo: DescriptionImage,
            methodology:[
                {
                    id : 1,
                    header: 'Goals',
                    logo: <BorderAllIcon/>,
                    content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                    img: img1
                },
                {
                    id : 2,
                    header: 'Strategy',
                    logo: <BuildIcon/>,
                    content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                    img: img2
                },
                {
                    id : 3,
                    header: 'Visual Desing',
                    logo: <CropOriginalIcon/>,
                    content: 'Design determines the visual aesthetic of a website and creates the first impression on people. Our adept web designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of web services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your website. Visual appeal + user-friendly design = the difference between an average, lackluster website and one that makes a memorable impression. ',
                    img: img3
                },
                {
                    id : 4,
                    header: 'Development',
                    logo: <CodeIcon/>,
                    content: 'The stage where a website is crafted with utmost essential and fine elements. We cater to strong web development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free page loading, as well as a user-friendly web structure. Whether you need just a revamping of your prevailing website or a full-scale flash application development, our passion is to make the best out of everything.',
                    
                    img: img4
                },
                {
                    id : 5,
                    header: 'Quality Testing',
                    logo: <LockIcon/>,
                    content: 'The time to check and review the quality and credibility of the website. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your website is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                    img: img5
                },
                {
                    id : 6,
                    header: 'Service After Delivering',
                    logo: <MergeTypeIcon/>,
                    content: 'Our service is not for one time, we will provide every types of technical support as long as your website will be active. With the updating of any security problem, we will update your website as well.',
                    img: img6
                }
            ]
        }
    ],
    [
        {
            id: 2,
            page_link: 'mobile_development',
            header: 'mobile development',
            content: [
                'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
                'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
                'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
            ] ,
            photo: DescriptionMobile_dev,
            methodology:[
                {
                    id : 1,
                    header: 'Goals',
                    logo: <BorderAllIcon/>,
                    content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                    img: img1_mobile
                },
                {
                    id : 2,
                    header: 'Strategy',
                    logo: <BuildIcon/>,
                    content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                    img: img2_mobile
                },
                {
                    id : 3,
                    header: 'Visual Desing',
                    logo: <CropOriginalIcon/>,
                    content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                    img: img3_mobile
                },
                {
                    id : 4,
                    header: 'Development',
                    logo: <CodeIcon/>,
                    content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                    
                    img: img4_mobile
                },
                {
                    id : 5,
                    header: 'Quality Testing',
                    logo: <LockIcon/>,
                    content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                    img: img5_mobile
                },
                {
                    id : 6,
                    header: 'Service After Delivering',
                    logo: <MergeTypeIcon/>,
                    content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                    img: img6_mobile
                },
            ]
        },
        {
            id: 2,
            page_link: 'mobile_development',
            header: 'mobile development',
            content: [
                'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
                'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
                'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
            ] ,
            photo: DescriptionMobile_dev,
            methodology:[
                {
                    id : 1,
                    header: 'Goals',
                    logo: <BorderAllIcon/>,
                    content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                    img: img1_mobile
                },
                {
                    id : 2,
                    header: 'Strategy',
                    logo: <BuildIcon/>,
                    content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                    img: img2_mobile
                },
                {
                    id : 3,
                    header: 'Visual Desing',
                    logo: <CropOriginalIcon/>,
                    content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                    img: img3_mobile
                },
                {
                    id : 4,
                    header: 'Development',
                    logo: <CodeIcon/>,
                    content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                    
                    img: img4_mobile
                },
                {
                    id : 5,
                    header: 'Quality Testing',
                    logo: <LockIcon/>,
                    content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                    img: img5_mobile
                },
                {
                    id : 6,
                    header: 'Service After Delivering',
                    logo: <MergeTypeIcon/>,
                    content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                    img: img6_mobile
                },
            ]
        },
        {
            id: 2,
            page_link: 'mobile_development',
            header: 'mobile development',
            content: [
                'Technology has always given its best and mothered many innovations that are now industry revolutions. Undoubtedly, smartphones are one of the fruits of technology. They have taken us from nowhere to somewhere and have become the greatest platforms to many entities to expand their businesses. In this ever-changing digital world, it is important to stay updated about the market trends to withstand the competition.',
                'We are recognized as one of the world’s most desired mobile app development companies. Our mobile app developers, designers, and strategists are fueled with creativity and passion for app design. This is why our mobile app services are recognized among the best in the industry. ',
                'As a leading web software development company, our professional expertise comprises skilled and experienced designers and developers flexible in creating mobile application according to the demands. We offer custom iOS and Android apps development services, native and cross-platform app, e-Commerce app Development, hybrid mobile app development,wearables and embedded software, enterprise mobile solution, converting website to mobile app. Our mobile specialists are committed to providing the best products and services using voguish technology frameworks or portal solutions to ensure a great business ahead.'
            ] ,
            photo: DescriptionMobile_dev,
            methodology:[
                {
                    id : 1,
                    header: 'Goals',
                    logo: <BorderAllIcon/>,
                    content: 'The success of any project relies on the process that moves it forward and a consistent process leads to better results, quality, and business growth.Our development process starts with understanding your needs, business queries, analysis and research and according we develop an appropriate timeline and project plan.',
                    img: img1_mobile
                },
                {
                    id : 2,
                    header: 'Strategy',
                    logo: <BuildIcon/>,
                    content: 'After thorough goals, we cone up with a strategy that keeps in view the business goals along with the stakeholder\'s expectations. Prior to starting any project, we put together a comprehensive proposal that includes a breakdown of requirements, project costing, project milestones, and time scales, etc.',
                    img: img2_mobile
                },
                {
                    id : 3,
                    header: 'Visual Desing',
                    logo: <CropOriginalIcon/>,
                    content: 'Design determines the visual aesthetic of a mobile app and creates the first impression on people. Our adept visual designing team will work closely to convert your ideas and concepts of the business into reality. What we promise is a complete gamut of mobile development services that help you create a better brand impression and user-friendly interface, thereby creating better traffic through your application. Visual appeal + user-friendly design = the difference between an average, lackluster mobile app and one that makes a memorable impression. ',
                    img: img3_mobile
                },
                {
                    id : 4,
                    header: 'Development',
                    logo: <CodeIcon/>,
                    content: 'The stage where a mobile app is crafted with utmost essential and fine elements. We cater to strong app development that is rooted in creativity and founded in technical expertise, in order to bolster the created layout and have error-free interface loading, as well as a user-friendly mobile structure. Whether you need just a revamping of your prevailing mobile app or a full-scale flash application development, our passion is to make the best out of everything.',
                    
                    img: img4_mobile
                },
                {
                    id : 5,
                    header: 'Quality Testing',
                    logo: <LockIcon/>,
                    content: 'The time to check and review the quality and credibility of the application. We strictly perform an extensive quality assurance process to check every form, every script, every link, every functionality and compatibility issues to ensure that your applicaiton is flawless and is completely prepared for launch. Taking into consideration hundreds of checkpoints, we make the reassurance that we haven’t missed anything visually, and everything – from the home page to the confirmation or contact page – is working perfectly. ',
                    img: img5_mobile
                },
                {
                    id : 6,
                    header: 'Service After Delivering',
                    logo: <MergeTypeIcon/>,
                    content: 'Our service is not for one time, we will provide every types of technical support as long as your application will be active. With the updating of any security problem, we will update your application as well.',
                    img: img6_mobile
                },
            ]
        }
    ],
    [
        {
            id: 3,
            page_link: 'prediction_ai',
            header: 'Artificial Inteligence',
            content: '' ,
            photo: '',
            methodology:[
                {
                    header: 'Goals',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Strategy',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Visual Desing',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Development',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Quality Testing',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Service After Delivering',
                    logo: '',
                    content: '',
                    img: ''
                },
            ]
        }
    ],
    [
        {
            id: 4,
            page_link: 'windows_app',
            header: 'windows applicaiton',
            content: '' ,
            photo: '',
            methodology:[
                {
                    header: 'Goals',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Strategy',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Visual Desing',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Development',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Quality Testing',
                    logo: '',
                    content: '',
                    img: ''
                },
                {
                    header: 'Service After Delivering',
                    logo: '',
                    content: '',
                    img: ''
                },
            ]
        }
    ]
]





