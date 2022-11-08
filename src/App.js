import './App.css';
import { Component } from 'react';


export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      scrollDown : false,
      translate: 0,
      color:"green",
    }   
   
  }

 handleScroll = (event) => {
  window.addEventListener('wheel', event = (event) =>  {
    if (event.deltaY < 0){
      console.log('scrolling up');
      this.handleClickRed();
    }
    else if (event.deltaY > 0){
      console.log('scrolling down');
      let scroll = () => {
        this.setState({
          translate: this.state.translate -745
        })
      }
      scroll()
    }
  });
 }


 handleClickRed = () => {
  this.setState({
    translate: this.state.translate + 745
  })
 }

 changeColor = () => {
  this.setState({
    color:"blue"
  })
 }

 

  render(){
    return (
      <div onWheel={this.handleScroll} className="App">
        
          <div className="home-wrap" style={{position: "relative", height: "745px", transition: "all 0.6s ease-in-out 0s", transform: `translate3d(0px,${this.state.translate.toString()+'px'}, 0px)`}}>
            <section className='home-page'>
              <header className="App-header">
                Pitza
              </header>
              <div className='pizzaTable'>
                <div className='pizzaBox'>
            
                  <div className='dropdown-content'>
                    <button>Pigza</button>
              
                  </div>
                  <button className='rotatingWindow'>Cheesetarian</button>
                </div>
                <div className='pizzaBox'>
                  <button className='rotatingWindow'>Cheesetarian</button>
                  <div className='dropdown-content'>
                    <button>Beachza</button>
              
                  </div>
                </div>
                <div className="pizzaBox">
                  <img className='rotatingWindow'/>
                  <div className='dropdown-content'>
                    <button>Peachza</button>
              
                  </div>
                </div>
                <div className='pizzaBox'>
                  <img className='rotatingWindow'/>
            
                    <div className='dropdown-content'>
                      <button>Pitza</button>
                    </div>
                </div>     
              </div>
            </section>

            <section className='home-page'>
              <div className=''>
                <p style={{backgroundColor:"red" , height:"100vh", width:"100vw"}}>test</p>
                <button onClick={() => this.handleClickRed()}>whick</button>
              </div>  
            </section>

            <section className='home-page'>
              <div>
                <p style={{backgroundColor:`${this.state.color}` , height:"100vh", width:"100vw", zIndex:"-1", position:"relative"}}>test</p>
                <button onClick={() => this.handleClickRed()} style={{zIndex:"10" , position:"absolute", top:"0px"}}>sadsadsa</button>
              </div>
            </section>

            <section className='home-page last-page'>
              <div>
                <p style={{backgroundColor:"white" , height:"100vh", width:"100vw"}}>test</p>
              </div>
            </section>

          </div>

        
        
        
        
        
        

        
      </div>
    );
  }

}
  


