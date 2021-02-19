import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Link } from '@material-ui/core';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Vijay. I'm a full stack engineer with experience in React, JavaScript, Firebase and Oracle.</p>

            <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with React and JS.</p>

            <p>My latest projects are on Home Page, You can check it out <a href="/" target="_blank" rel="noopener noreferrer">here</a>. These are built with React, Redux, Context, JavaScript, Firebase.</p>

            <p>When I'm not doing something chances are I'm creating some new API clones...</p>
            </Content>
        </div>
    );

}

export default AboutPage;