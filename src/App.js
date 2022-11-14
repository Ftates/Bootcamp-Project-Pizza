import './App.css';
import { Component } from 'react';
import Bmi from './bmi';
import Helpme from './helpme';



export default class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      scrollDown : false,
      translate: 0,
      color:"green",
      currentSelection:{},
      shoppingList:[],
    }   


   
  }

 handleScroll = (event) => {
  window.addEventListener('wheel', event = (event) =>  {
    if (event.deltaY < 0){
      //scrolling up
      this.setState({
        translate: this.state.translate + 745
      })
    }
    else if (event.deltaY > 0){
      //scrolling down
        this.setState({
          translate: this.state.translate -745
        })
    }
  });
 }

  checkState=() =>{
    console.log(this.state.translate)
  }


  passdata = (childData) => { //this will now pass the list of obj
    this.setState({
      currentSelection : childData
    })
  }

  handleCalculate = (listtobemapped) => { 
    
  }
  
  buttonTranslate = (input) => {
    this.setState({
      translate : -2235
    }) 
  }

 //this.state.translate == 0 ? onWheel={this.handleScroll} : undefined

  render(){
    return (
      <div onWheel={this.state.translate >= 744 ? undefined : this.state.translate == -1490 ? undefined : this.state.translate !==0 ? undefined : this.handleScroll } className="App">
          <div className="home-wrap" style={{position: "relative", height: "745px", transition: "all 0.6s ease-in-out 0s", transform: `translate3d(0px,${this.state.translate.toString()+'px'}, 0px)`}}>
            <section className='home-page'>
              <header className="App-header">
                Pitza
              </header>
              <div className='pizzaTable'>
                <div className='pizzaBox'>
            
                  <div className='dropdown-content'>
                    <button onClick={()=>{this.setState({translate:-1490})}}>Select Pizzas</button>
              
                  </div>
                  <img className='rotatingWindow' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TSfKd7MPWOtis0sLp0Vj5Bp4uLNIEIsKhg&usqp=CAU'/>
                </div>
                <div className='pizzaBox'>
                  <img className='rotatingWindow' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3TSfKd7MPWOtis0sLp0Vj5Bp4uLNIEIsKhg&usqp=CAU'/>
                  <div className='dropdown-content'>
                    <button onClick={()=>{this.setState({translate:-2235})}}>Calory Counter</button>
              
                  </div>
                </div>
                <div className="pizzaBox">
                  <img className='rotatingWindow'  alt='stop giving me shitty errors' src={require('./things/poordog.jpg')}/>
                  <div className='dropdown-content'>
                    <button>I do nothing</button>
              
                  </div>
                </div>
                <div className='pizzaBox'>
                  <img className='rotatingWindow'  alt='stop giving me shitty errors' src='https://i.ytimg.com/vi/E4r5ckveXD8/maxresdefault.jpg'/>
            
                    <div className='dropdown-content'>
                      <button>Im useless</button>
                    </div>
                </div>     
              </div>
            </section>

            <section className='home-page wrapper-page'>
              <div className='camp-wrap'>
                <ul className='camp-container'>
                  <li className='camp-box'>
                    <img src='https://st4.depositphotos.com/10614052/24611/i/600/depositphotos_246113180-stock-photo-delicious-pizza-grey-background-space.jpg'  alt='stop giving me shitty errors'></img>
                  </li>
                  <li className='camp-box'>
                    <img src='https://st4.depositphotos.com/10614052/24611/i/600/depositphotos_246113252-stock-photo-pizza-tomato-sauce-ingredients-table.jpg'  alt='stop giving me shitty errors'></img>
                  </li>
                  <li className='camp-box'>
                    <img src='https://st4.depositphotos.com/10614052/25045/i/600/depositphotos_250453686-stock-photo-slices-of-delicious-pizza-on.jpg'  alt='stop giving me shitty errors'></img>
                  </li>
                </ul>
              </div>  
              <div className='camp-logo'>

              </div>
              <div className='role-wrap'>

              </div>
            </section>

            <section className='home-page bmi-page'>
              <Bmi passdata={this.passdata} handleCalculate={this.handleCalculate} buttonTranslate={this.buttonTranslate}/>
              
              
            </section>

            <section className='home-page last-page'>
              <Helpme currentSelection = {this.state.currentSelection}/>
            </section>

          </div>

        
        
        
        
        
        

        
      </div>
    );
  }

}
  


