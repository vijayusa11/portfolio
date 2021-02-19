import React from 'react';

import Card from '../components/Card';



import googleDrive from '../assets/images/Google_Drive.png';
import gmail from '../assets/images/Gmail.png';
import whatsapp from '../assets/images/WhatsApp.png';
import twitter from '../assets/images/Twitter.png';
import google from '../assets/images/Google.png';
import amazon from '../assets/images/Amazon.png';
import youtube from '../assets/images/YouTube.png';
import netflix from '../assets/images/NetFlix.png';
import linkedin from '../assets/images/LinkedIn.png';
import tinder from '../assets/images/Tinder.png';
import spotify from '../assets/images/Spotify.png';
import tesla from '../assets/images/Tesla.png';
import videocall from '../assets/images/VideoCall.png';
import snapchat from '../assets/images/SnapChat.png';
import igreels from '../assets/images/IgReels.png';
import instagram from '../assets/images/Instagram.png';
import soon from '../assets/images/Soon.png';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Google Drive Clone',
                    subTitle: 'React & Firebase',
                    imgSrc: googleDrive,
                    link: 'https://drive-vijay.web.app/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Gmail Clone',
                    subTitle: 'React, Redux & Firebase',
                    imgSrc: gmail,
                    link: 'https://fir-edc25.web.app',
                    selected: false
                },
                {
                    id: 2,
                    title: 'WhatsApp Clone',
                    subTitle: 'React, Context & Firebase',
                    imgSrc: whatsapp,
                    link: 'https://whatsapp-8723c.web.app/ ',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Twitter Clone',
                    subTitle: 'React, Firebase & Twitter Embed',
                    imgSrc: twitter,
                    link: 'https://twitter-fd6d4.web.app/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Google Clone',
                    subTitle: 'React, Context & Firebase',
                    imgSrc: google,
                    link: 'https://fir-f655f.web.app/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Amazon Clone',
                    subTitle: 'React, Context & Firebase',
                    imgSrc: amazon,
                    link: 'https://vijay-ed655.web.app/',
                    selected: false
                },
                {
                    id: 6,
                    title: 'YouTube Clone',
                    subTitle: 'React, Context & Firebase',
                    imgSrc: youtube,
                    link: 'https://fir-39ae4.web.app/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'NetFlix Clone',
                    subTitle: 'React, Redux, TMDB & Firebase',
                    imgSrc: netflix,
                    link: 'https://netflix-vijay.web.app',
                    selected: false
                },
                {
                    id: 8,
                    title: 'LinkedIn Clone',
                    subTitle: 'React, Redux & Firebase',
                    imgSrc: linkedin,
                    link: 'https://linkedin-f1992.web.app/',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Tinder Clone',
                    subTitle: 'React & Firebase',
                    imgSrc: tinder,
                    link: 'https://tinder-5ee9b.web.app/',
                    selected: false
                },
                {
                    id: 10,
                    title: 'Spotify Clone',
                    subTitle: 'React, Redux & Firebase',
                    imgSrc: spotify,
                    link: 'https://spotify-d2426.web.app/',
                    selected: false
                },
                {
                    id: 11,
                    title: 'Tesla Clone',
                    subTitle: 'React & Firebase',
                    imgSrc: tesla,
                    link: 'https://tesla-vijay.web.app/',
                    selected: false
                },
                {
                    id: 12,
                    title: 'Video Call API',
                    subTitle: 'React, WebRTC & Firebase',
                    imgSrc: videocall,
                    link: 'https://webrtc-vijay.web.app/',
                    selected: false
                },
                {
                    id: 13,
                    title: 'Snapchat Clone',
                    subTitle: 'React & Firebase',
                    imgSrc: snapchat,
                    link: 'https://snapchat-3532b.web.app/',
                    selected: false
                },
                {
                    id: 14,
                    title: 'Instagram Reels Clone',
                    subTitle: 'React & Firebase',
                    imgSrc: igreels,
                    link: 'https://ig-reels-d0d9c.web.app/',
                    selected: false
                },
                {
                    id: 15,
                    title: 'Instagram Clone',
                    subTitle: 'React, Firebase & Instagram Embed',
                    imgSrc: instagram,
                    link: '',
                    selected: false
                },
                {
                    id: 16,
                    title: 'Facebook Clone',
                    subTitle: 'React, Redux & Firebase',
                    imgSrc: soon,
                    link: '',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;