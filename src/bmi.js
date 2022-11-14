import React, { Component } from "react";
import "./bmi.css";
import { nanoid } from 'nanoid'
import SliceCounter from "./sliceCounter";

export default class Bmi extends Component {
  constructor(props){
    super(props)

    this.state = {
        input:"",
        brand:"",
        selectphsize:"",
        selectphcrust:"",
        selectphtopping:"",
        selectdomsize:"",
        selectdomrange:"",
        selectdomtopping:"",
        size:"",
        chosenPH:"",
        chosenDom:"",
        crust:"",
        toppingVisibiltyPH:"hideLargePizzaOptions",
        toppingVisibiltyPHFit:"hideLargePizzaOptions",
        toppingVisibiltyPHNorm:"",
        topping:"",

        crustVisibilty:"",
        crustVisibiltyPersonalPan:"hideLargePizzaOptions",

        //states go brrr

        valuechosendom:"",
        vegeplantchosendom:"",
        veganchosendom:"",
        extravalchosendom:"",
        traditionalchosendom:"",
        gourmetchosendom:"",
        impossiblechosendom:"",

        domSizeVisible:"domSizeVisible",

        classic:"Classic",
        extraLarge:"ExtraLarge",
        deepPan:"DeepPan",
        thinNCrispy:"ThinNCrispy",
        glutenFree:"GlutenFree",
        mini:"Mini",

        objtobepassed:{},
        listtobemapped:[],

        servingCount:0,
    }
  }


  handleSubmit = (e) => {
    e.preventDefault()

    if(this.state.selectphsize===""||this.state.selectphcrust===""||this.state.selectphtopping==""){
      console.log("dont be a fag")
      return<p>open the console</p>
    }

    this.setState({
      // brand:  this.state.input,
      // size: this.state.selectphsize || this.state.selectdomsize,
      // crust: this.state.selectphcrust || this.state.selectdomrange,
      // topping: this.state.selectphtopping || this.state.selectdomtopping,

      objtobepassed: {
        "Brand":this.state.input,
        "Size":this.state.selectphsize || this.state.selectdomsize,
        "Crust":this.state.selectphcrust|| this.state.selectdomrange,
        "Topping":this.state.selectphtopping|| this.state.selectdomtopping,
        id : nanoid(),  //yes i cheated
        count: 1,
      },
      
      
        
  })

    setTimeout(()=>{
      this.setState({
        listtobemapped: [...this.state.listtobemapped, this.state.objtobepassed]
      })
    },100)

    setTimeout(()=>{ //settimeout is like duct tape
      this.props.passdata(this.state.listtobemapped)
    },150)
    
    
  }

  destroyList = (id) =>{
    let newarr = this.state.listtobemapped.filter(obj => obj.id !== id)
    this.setState({
      listtobemapped: newarr
    })
    setTimeout(()=>{
      this.props.passdata(this.state.listtobemapped)
    },100) //im starting to understand how spagethii is born
    
  }

  updatecount = (count,id) => {
    let newarr = this.state.listtobemapped.filter(obj => obj.id !== id) //newarr is the arr without the obj going to be modified
    let newobj = this.state.listtobemapped.filter(obj => obj.id === id) //newobj is the obj going to be modified
    //add the count to newobj then add it back to newarr
    console.log(newobj)//array with 1 obj inside
    let targetobj = newobj[0]
    targetobj.count = count
    console.log("targetobj",targetobj)
    newarr.push(targetobj)
    console.log("newarr",newarr)
    this.setState({
      listtobemapped: newarr
    })
  }

  handleChange = (e) => {
    
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name)
    // console.log(value)

    this.setState({
      [name]: value,
    });
      
    setTimeout(() => {//give sometime for the state above to update on submit so the inside code works
      if(this.state.input === "PH"){
        this.setState({
          chosenPH:"chosen",
          chosenDom:"",
          selectdomsize:"",
          selectdomrange:"",
          selectdomtopping:"",
        })
      }
      if(this.state.input ==="Dominos"){
        this.setState({
          chosenDom:"chosen",
          chosenPH:"",
          selectphcrust:"",
          selectphsize:"",
          selectphtopping:"",
        })
      }


      if(this.state.selectphcrust === "Hand-Tossed-Style"){
        this.setState({
          toppingVisibiltyPH:"",
          toppingVisibiltyPHFit:"hideLargePizzaOptions"
        })
      } else {
        this.setState({
          toppingVisibiltyPH:"hideLargePizzaOptions",
          toppingVisibiltyPHFit:"hideLargePizzaOptions",
        })
      }
      if(this.state.selectphcrust ==="Fit 'N Delicious"){
        this.setState({
          toppingVisibiltyPHFit:"",
          toppingVisibiltyPH:"hideLargePizzaOptions",
          toppingVisibiltyPHNorm:"hideLargePizzaOptions",
        })
      } else{
        this.setState({
          toppingVisibiltyPHFit:"hideLargePizzaOptions",
          toppingVisibiltyPHNorm:"",
        })
      }
      if(this.state.selectphsize === "Large-Personal-9-inch" || this.state.selectphsize === "Personal-6-inch"){
        this.setState({
          crustVisibilty:"hideLargePizzaOptions",
          crustVisibiltyPersonalPan:""
        })
      } else {
        this.setState({
          crustVisibilty:"",
          crustVisibiltyPersonalPan:"hideLargePizzaOptions"
        })
      }

      
      if(this.state.selectdomrange==="Value-Range"){
        this.setState({
          valuechosendom:"chosen",
          vegeplantchosendom:"",
          veganchosendom:"",
          extravalchosendom:"",
          traditionalchosendom:"",
          gourmetchosendom:"",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Vege-Plant-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"chosen",
          veganchosendom:"",
          extravalchosendom:"",
          traditionalchosendom:"",
          gourmetchosendom:"",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Vegan-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"",
          veganchosendom:"chosen",
          extravalchosendom:"",
          traditionalchosendom:"",
          gourmetchosendom:"",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Extra-Val-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"",
          veganchosendom:"",
          extravalchosendom:"chosen",
          traditionalchosendom:"",
          gourmetchosendom:"",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Traditional-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"",
          veganchosendom:"",
          extravalchosendom:"",
          traditionalchosendom:"chosen",
          gourmetchosendom:"",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Gourmet-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"",
          veganchosendom:"",
          extravalchosendom:"",
          traditionalchosendom:"",
          gourmetchosendom:"chosen",
          impossiblechosendom:""
        })
      }
      if(this.state.selectdomrange==="Impossible-Range"){
        this.setState({
          valuechosendom:"",
          vegeplantchosendom:"",
          veganchosendom:"",
          extravalchosendom:"",
          traditionalchosendom:"",
          gourmetchosendom:"",
          impossiblechosendom:"chosen"
        })
      }


      if(this.state.selectdomtopping !== ""){ //dominoes topping has been selected
        //display the fucking thing
        this.setState({
          domSizeVisible:""
        })
        //now we can either have an if statement for EVERY SINGLE TOPPING or ???

        if(this.state.selectdomrange === "Value-Range"){
          //all 6 crust is avail for all toppings, do nothing
          this.setState({
            classic:"",
            extraLarge:"",
            deepPan:"",
            thinNCrispy:"",
            glutenFree:"",
            mini:"",
          })
        }
  
        if(this.state.selectdomrange === "Vege-Plant-Range" || this.state.selectdomrange === "Vegan-Range"){
          //all topping got 5 crust avail except Mini crust, act accordingly
          this.setState({
            classic:"",
            extraLarge:"",
            deepPan:"",
            thinNCrispy:"",
            glutenFree:"",
            mini:"Mini",
          })
        }
  
        if(this.state.selectdomrange === "Extra-Val-Range"){
          //all toppings execpt BBQ Meatlovers have 5 crust avail (no Mini crust) 
          //BBQ Meatlover got all 6 crust
          if(this.state.selectdomtopping === "BBQ Meatlovers"){
            this.setState({
              classic:"",
              extraLarge:"",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"",
            })
          } else {
            this.setState({
              classic:"",
              extraLarge:"",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"Mini",
            })
          }
        }
        //here comes the cancer and pain
  
        if(this.state.selectdomrange === "Traditional-Range"){ 
          //Double Bacon CB, Mr Wedge, chicken supreme has 4 crust -done
          //Godfather, Buffalo Chicken has 5 crust 
          //Supreme has all 6 crust
          if(this.state.selectdomtopping === "Double Bacon Cheeseburger" || this.state.selectdomtopping === "Mr Wedge"){
            this.setState({
              classic:"",
              extraLarge:"",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"GlutenFree",
              mini:"Mini",
            })
          } else if(this.state.selectdomtopping === "Chicken Supreme"){
            this.setState({
              classic:"",
              extraLarge:"ExtraLarge",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"Mini",
            })
          } else if(this.state.selectdomtopping === "Godfather" || this.state.selectdomtopping === "Buffalo Chicken"){
            this.setState({
              classic:"",
              extraLarge:"",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"Mini",
            })
          } else {
            this.setState({
              classic:"",
              extraLarge:"",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"",
            })
          }
        }

        if(this.state.selectdomrange === "Gourmet-Range"){
          //all got 5 crust
          this.setState({
            classic:"",
            extraLarge:"",
            deepPan:"",
            thinNCrispy:"",
            glutenFree:"",
            mini:"Mini",
          })
        }
        if(this.state.selectdomrange === "Impossible-Range"){
          //cheeseburger(CB), Hamburger, Godfather has 3 crust avail
          //BBQ Burger, El Scorcho, double beef&onion has 4 crust
          //supreme has 5 crust
          if(this.state.selectdomtopping === "Impossible Cheeseburger" || this.state.selectdomtopping === "Impossible Hamburger" || this.state.selectdomtopping === "Impossible Godfather"){
            this.setState({
              classic:"",
              extraLarge:"ExtraLarge",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"GlutenFree",
              mini:"Mini",
            })
          } else if(this.state.selectdomtopping === "Impossible BBQ Burger" || this.state.selectdomtopping === "Impossible El Scorcho" || this.state.selectdomtopping === "Impossible Double Beef & Onion"){
            this.setState({
              classic:"",
              extraLarge:"ExtraLarge",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"Mini",
            })
          } else {
            this.setState({
              classic:"",
              extraLarge:"ExtraLarge",
              deepPan:"",
              thinNCrispy:"",
              glutenFree:"",
              mini:"",
            })
          }
        }
      }
      //this shit actually worked on the first try lmao
     //i hereby solemnly apologise to anyone that had to read that 


    }, 100);

    
  };
//http://quikorder.pizzahut.com/QOcontent2/Files/PDF/NutritionInformation.pdf
//https://www.dominos.co.nz/menu/nutritional-information#nutritional-info-menu-258dc0bb-469e-4b5f-94da-5249486ec75e
//wtf no singapore nutritional info

  render(){
    return(
        <div style={{position:"relative"}}>
            <div className="brandSelect">
              <label>Which brand to support?</label>
                <select name="input" value={this.state.input} onChange={(e)=>{this.handleChange(e)}}>
                    <option>Choose brand</option>
                    <option value={"PH"}>PH</option>
                    <option value={"Dominos"}>Dominos</option>
                </select>
            </div>
          
            <form onSubmit={(e)=>{this.handleSubmit(e)}} className={"phSelect "+`${this.state.chosenPH}`}>
              <div className="formContainer">
                <div>
                  <label>What is a man craving: </label>
                  <br></br>
                  <select name="selectphsize" value={this.state.selectphsize} onChange={(e) => {this.handleChange(e)}}>
                    <option style={{color:"grey"}}>Choose a Size</option>
                    <option value={"Personal-6-inch"}>Personal (6-inch)</option>
                    <option value={"Large-Personal-9-inch"}>Large Personal (9-inch)</option>
                    <option value={"Medium-12-inch"}>Medium (12-inch)</option>
                    <option value={"Large-14-inch"}>Large (14-inch)</option>
                  </select>
                </div>
                <div>
                  <label>Type of crust:</label>
                  <br></br>
                  <select name="selectphcrust" value={this.state.selectphcrust} onChange={(e) => {this.handleChange(e)}}>
                    <option className={`${this.state.crustVisibilty}`}>Choose Crust Type</option>
                    <option className={`${this.state.crustVisibilty}`}>Thin 'N Cripsy</option>
                    <option className={`${this.state.crustVisibilty}`} value={"Hand-Tossed-Style"}>Hand-tossed-Style</option>
                    <option className={`${this.state.crustVisibilty}`} value={"Fit 'N Delicious"} style={this.state.selectphsize==="Large-14-inch" || this.state.selectphsize==="Large-Personal-9-inch" || this.state.selectphsize==="Personal-6-inch"?{display:"none"}:{display:"block"}}>Fit 'N Delicious</option>
                    <option className={`${this.state.crustVisibilty}`}>Pan</option>
                    <option className={`${this.state.crustVisibiltyPersonalPan}`}>Personal Pan</option>
                    <option style={this.state.selectphsize==="Large-14-inch"?{display:"block"}:{display:"none"}}>Stuffed Crust (Large only)</option>
                  </select>
                </div>
                <div>
                <label>Topping of Choice:</label>
                <br></br>
                  <select name="selectphtopping" value={this.state.selectphtopping} onChange={(e)=>{this.handleChange(e)}}>
                    <option>Choose a Toppping</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Cheese Only</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Pepperoni</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Supreme</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Pepperoni & Mushroom</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Italian Sausage & Red Onion</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Ham & Pineapple</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Veggie Lover's®</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Meat Lover's®</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Pepperoni Lover's®</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Hawaiian Luau</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Dan's Original</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Triple Meat Italiano</option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Spicy Sicilian </option>
                    <option className={`${this.state.toppingVisibiltyPHNorm}`}>Ultimate Cheese Lover's</option> 
                    <option className={`${this.state.toppingVisibiltyPH}`}>Cheese Only Garlic Parmesan</option>  {/* //this point onwards is only for hand-tossed */}
                    <option className={`${this.state.toppingVisibiltyPH}`}>Pepperoni Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Supreme Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Pepperoni & Mushroom Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Italian Sausage & Red Onion Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Ham & Pineapple Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Veggie Lover's® Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Meat Lover's® Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Pepperoni Lover's® Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Hawaiian Luau Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Dan's Original Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Triple Meat Italiano Garlic Parmesan </option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Spicy Sicilian Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPH}`}>Ultimate Cheese Lover's Garlic Parmesan</option>
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Chicken, Red Onion & Green Pepper</option> { /* this point onwards is only for fit n fucked up pizza */}
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Chicken, Mushrooms & Jalapeño</option>
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Ham, Red Onion & Mushroom</option>
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Ham, Pineapple & Diced Red Tomato</option>
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Green Pepper, Red Onion & Diced Red Tomato</option>
                    <option className={`${this.state.toppingVisibiltyPHFit}`}>Diced Red Tomato, Mushroom & Jalapeño</option>
                  </select>
                </div>
                <input type={"submit"}></input>
              </div>
              
              
            </form>
          
            <form onSubmit={(e) => {this.handleSubmit(e)}} className={"domSelect "+`${this.state.chosenDom}`}>
              <div className="formContainer">
                <div>
                <label>Type of Range:</label>
                <br></br>
                  <select name="selectdomrange" value={this.state.selectdomrange} onChange={(e) => {this.handleChange(e)}}>
                    <option>Select One</option>
                    <option value={"Value-Range"}>Value Range</option>
                    <option value={"Vege-Plant-Range"}>Vegetarian Plant-based Range</option>
                    <option value={"Vegan-Range"}>Vegan Range</option>
                    <option value={"Extra-Val-Range"}>Extra Value Range</option>
                    <option value={"Traditional-Range"}>Traditional Range</option>
                    <option value={"Gourmet-Range"}>Gourmet Range</option>
                    <option value={"Impossible-Range"}>Impossible Range</option>
                  </select>
                </div>
                <div>
                  <label>Topping of Choice</label>
                  <br></br>
                  <select name="selectdomtopping" value={this.state.selectdomtopping} onChange={(e)=>{this.handleChange(e)}}>
                    <option>Select Range</option>
                    {/* Value Range */}
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Simply Cheese</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Beef & Onion</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Vege Trio</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Cheezy Garlic</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Pepperoni</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Hawaiian</option>
                    <option className={"ValueRange "+`${this.state.valuechosendom}`}>Ham & Cheese</option>
                    {/* Vegetarian Plant Based Range */}
                    <option className={"VegePlantRange "+`${this.state.vegeplantchosendom}`}>Vegetarian Plant Based El Scorcho</option>
                    <option className={"VegePlantRange "+`${this.state.vegeplantchosendom}`}>Vegetarian Plant Based Godfather</option>
                    <option className={"VegePlantRange "+`${this.state.vegeplantchosendom}`}>Vegetarian Plant-Based Beef & Onion</option>
                    {/* Vegan Range */}
                    <option className={"VeganRange "+`${this.state.veganchosendom}`}>Vegan Godfather</option>
                    <option className={"VeganRange "+`${this.state.veganchosendom}`}>Vegan El Scorcho</option>
                    {/* Extra Value Range */}
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>Vegorama</option>
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>Mega Pepperoni</option>
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>BBQ Meatlovers</option>
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>El Scorcho</option>
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>BBQ Sausage & Bacon</option>
                    <option className={"ExtraValRange "+`${this.state.extravalchosendom}`}>3 Meats</option>
                    {/* Traditional Range */}
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Double Bacon Cheeseburger</option>
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Mr Wedge</option>
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Supreme</option>
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Godfather</option>
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Buffalo Chicken</option>
                    <option className={"TraditionalRange "+`${this.state.traditionalchosendom}`}>Chicken Supreme</option>
                    {/* Gourmet Range */}
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Chicken, Bacon & Aioli</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Mega Meatlovers</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Garlic Prawn</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Chicken & Camembert</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Peri Peri Chicken</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>BBQ Chicken & Rasher Bacon</option>
                    <option className={"GourmetRange "+`${this.state.gourmetchosendom}`}>Apricot Chicken</option>
                    {/* Impossible Range */}
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible Cheeseburger</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible Hamburger</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible BBQ Burger</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible Godfather</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible El Scorcho</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible Double Beef & Onion</option>
                    <option className={"ImpossibleRange "+`${this.state.impossiblechosendom}`}>Impossible Supreme</option>
                  </select>
                </div>
                
                <div>
                  <label>Size Choice?: </label>
                  <br></br>
                  <select className={`${this.state.domSizeVisible}`} name="selectdomsize" value={this.state.selectdomsize} onChange={(e)=>{this.handleChange(e)}} >
                    <option style={{color:"grey"}}>Choose a type</option>
                    <option className={`${this.state.classic}`} value={"Classic-crust"}>Classic Crust</option>
                    <option className={`${this.state.extraLarge}`} value={"Extra-large"}>Extra Large</option>
                    <option className={`${this.state.deepPan}`} value={"Deep-pan"}>Deep Pan</option>
                    <option className={`${this.state.thinNCrispy}`} value={"Thin-N-Crispy"}>Thin N Cripsy</option>
                    <option className={`${this.state.glutenFree}`} value={"Gluten-Free"}>Gluten Free</option>
                    <option className={`${this.state.mini}`} value={"Mini"}>Mini</option>
                  </select>
                </div>
                <input type={"submit"}></input>
              </div> 
              
            </form>
                
           
            

            <div className="shoppingListContainer"> 
                <h3>Bucket List:</h3>
                
                  {/* {console.log(this.state.objtobepassed)} */}
                  {/* {console.log("listtobemapped: ", this.state.listtobemapped)} */}
                  {this.state.listtobemapped.map((obj) => <div className="shoppingListBox" key={obj.id}>
                  
                  <div className="sliceCounter">
                    <button onClick={()=>this.destroyList(obj.id)}>X</button>
                    <SliceCounter id={obj.id} updatecount={this.updatecount}/>
                  </div>
                  
                    <ul>  
                      <li>{obj.Brand}</li>
                      <li>{obj.Size}</li>
                      <li>{obj.Crust}</li>
                      <li>{obj.Topping}</li>
                    </ul>
                  </div>)}
                <button onClick={()=>this.props.buttonTranslate()}>Go Calculate</button>
            </div>

            
        </div>
    )
  }

  
}

