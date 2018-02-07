import * as React from 'react';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import StoryList from '../../components/story_list/Story_list';
import Sidebar from '../../components/sidebar/Sidebar';

import "./home.scss";

export default class Home extends React.Component<any, any>{
    render() {
        return (
            <div className="home">
                <Header />
                <Sidebar />
                <Banner />
                <StoryList />
            </div>
        )
    }
}