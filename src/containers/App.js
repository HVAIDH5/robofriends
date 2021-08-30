import React,{ Component } from 'react';

import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



class App extends Component {
    constructor(){
       super()
        this.state= {
            robots:[],
            searchfield:''
        }
       }
   
       componentDidMount() {
           fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
           
       }

 onSearchChange = (event) => {
    // console.log(event.target.value);
     this.setState({searchfield: event.target.value })
 }

    render(){
        const filteredRobots=this.state.robots.filter(robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
  if (this.state.robots.length === 0){
      return <h1>Loading</h1>
}  
else
{
    return (
        <div className="tc">
            <h1>Robo friends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>  
                <ErrorBoundary>
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );

}

    
}
    }

   
export default App;