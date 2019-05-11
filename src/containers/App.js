import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

export default class App extends Component {
    state = {
        robots: [],
        searchfield: ''
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => this.setState({robots}))
        ;
    }

    onSearchChange = (event) => this.setState({ searchfield: event.target.value.toLowerCase() });

    render() {
        const { robots, searchfield } = this.state;

        return (
            <div className="tc">
                <h1 className="tc f1 light-green">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={robots.filter(robot => robot.name.toLowerCase().includes(searchfield))}/>
                </Scroll>
                
            </div>
        );
    }
}

