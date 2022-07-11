import React,{ useState,useEffect } from 'react';

import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



function App() {

    // constructor(){
    //    super()
    //     this.state= {
    //         robots:[],
    //         searchfield:''
    //     }
    //    }
   const [robots, setrobots]= useState([]);
   const [searchfield, setsearchfield]= useState('');
   
    //    componentDidMount() {
    //        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));
           
    //    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
         .then(users=>setrobots(users));
      
    },[])

 const onSearchChange = (event) => {
    // console.log(event.target.value);
     setsearchfield(event.target.value)
 }

   
        const filteredRobots=robots.filter(robot=> {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
  if (robots.length === 0){
      return <h1>Loading</h1>
}  
else
{
    return (
        <div className="tc">
            <h1>Robo friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>  
                <ErrorBoundary>
                    
        <CardList robots={filteredRobots}/>
        </ErrorBoundary>
        </Scroll>
        </div>
    );

}

    

    }

   
export default App;