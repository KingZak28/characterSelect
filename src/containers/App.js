import React, {Component} from 'react';
//This makes the container aware of the state and be able to subscribe to changes in the state.
import {connect} from 'react-redux';
import CardList from '../components/CardList';
//import characters from './characters'; //Gonna use an API now so don't need to import characters manually
import SearchBox from '../components//SearchBox';
import Scroll from '../components//Scroll';
import './App.css'
import {setSearchField, requestCharacters} from './actions';

//Standard name for the prop to the connect function
const mapStateToProps = state => {
  return {
    //The searchfield will be the state of the searchfield that comes from our reducer
    //Remember in index.js we destructure the reducer as searchCharacters when we create our store
    //Right now since we're using search characters as our only reducer we don't need to route but other wise we'd have to do
    //something like state.searchCharacters.searchField to get the props value.
    searchField: state.searchCharacters.searchField,
    characters: state.requestCharacters.characters,
    isPending: state.requestCharacters.isPending,
    error: state.requestCharacters.error
  }
}

//Dispatch is what triggers an action to be sent to a reducer
const mapDispatchToProps = (dispatch) => {
  //A prop we have called onSearchChange which is itself a function that recieves event as a params
  //And returns a function to dispatch the setSearchField action so that the reducer becomes aware
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    //We have below a higher order function dispatch takes in another func requestCharacters
    onRequestCharacters: () => dispatch(requestCharacters())
  }
}


//Containers are smart components that contain state
class App extends Component {
  //Constructors used to create state when not using redux
  // constructor() {
  //   super()
  //   this.state = {
  //     characters: [],
  //
  //   }
    //Our App has two states characters and searchfield and any component that uses state has the class syntax form.
    //Our state is what changes in our app, the state is used by the virtual DOM to render. The state can pass down props like we did with onSearchChange
    //The onSearchChange method updated the state of the searchfield to whatever was inputted by the user( event.target.value);
    //Once we recieved this value we can then filter the characters state to only include what was typed in by the user.
    //Components that have state are called smart components and they usually have the class syntax
  // }

//Built in react funcs don't need arrows
  componentDidMount(){
    this.props.onRequestCharacters();

  }

//Whenever you make your own methods in react use the arrow functions so the context of this is in the right place.
  // onSearchChange = (event) =>{
  //   this.setState({searchfield: event.target.value});
  //
  // }


  render(){
    const {characters, searchField,onSearchChange} = this.props;
    const filteredChars = characters.filter(character =>{
      return character.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if(!characters.length){
      return <h1 className = "tc f1"> Loading...</h1>
    }
    return(
      <div className="tc">
        <h1 className="f1"> Character Select </h1>
        <SearchBox searchChange = {onSearchChange} />
        <Scroll>
          <CardList characters = {filteredChars}/>
        </Scroll>
      </div>
    );
  }

}

//Connect is a higher order function, a function that returns another function so connect will run and then return
//The second part that will then render the App container
//
export default connect(mapStateToProps, mapDispatchToProps)(App);
