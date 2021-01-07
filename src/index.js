import React, { useContext, useState } from "react"
import ReactDOM from "react-dom"
import "./style.css"

const AppContext = React.createContext(null)

console.log("ok!")

function  App() {
	const [value, setValue] = useState(0)
	const [secondary, setSecondary] = useState(null)
	const [operation, setOp] = useState(null)
	function factorial(n){
		if(n == 0 || n == 1)
		return 1
		else
		return n * factorial(n - 1)
	}
	function finish(){
		switch(operation){
			case "log":{
				setValue(Math.log(value) / Math.log(secondary))
				setOp(null)
				setSecondary(null)
				break
			}
			case "pow":{
				setValue(Math.pow(secondary, value))
				setOp(null)
				setSecondary(null)
				break
			}
			case "root":{
				setValue(Math.pow(secondary, 1/value))
				setOp(null)
				setSecondary(null)
				break
			}
			case "div":{
				setValue(secondary/value)
				setOp(null)
				setSecondary(null)
				break
			}
			case "BC":{
				setValue(factorial(secondary)/(factorial(value)*factorial(secondary - value)))
				setOp(null)
				setSecondary(null)
				break
			}
			case "multiplication":{
				setValue(secondary*value)
				setOp(null)
				setSecondary(null)
				break
			}
			case "sub":{
				setValue(secondary-value)
				setOp(null)
				setSecondary(null)
				break
			}
			case "plus":{
				setValue(secondary+value)
				setOp(null)
				setSecondary(null)
				break
			}
			case "mod":{
				setValue(secondary%value)
				setOp(null)
				setSecondary(null)
				break
			}
			default: invalid()
		}
	}
	function invalid(){
		setValue("Invalid format")
	}
	function increse(){
		if(value != "Invalid format")
		setValue(value + 1)
	}
	function Power2(){
		if(value != "Invalid format")
		setValue(Math.pow(2, value))
	}
	function Power10(){
		if(value != "Invalid format")
		setValue(Math.pow(10, value))
	}
	function Exp(){
		if(value != "Invalid format")
		setValue(Math.pow(Math.E, value))
	}
	function NaturalL(){
		if(value != "Invalid format")
		setValue(Math.log(value))
	}
	function LogBase(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("log")
			setSecondary(value)
			setValue(0)
		}
	}
	function Canc(){
		setValue(0)
		setSecondary(null)
		setOp(null)
	}
	function Power(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("pow")
			setSecondary(value)
			setValue(0)
		}
	}
	function Root(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("root")
			setSecondary(value)
			setValue(0)
		}
	}
	function Square(){
		if(value != "Invalid format")
		setValue(value * value)
	}
	function SquareRoot(){
		if(value != "Invalid format")
		setValue(Math.sqrt(value))
	}
	function Inverse(){
		if(value != "Invalid format")
		setValue(1/value)
	}
	function Fraction(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("div")
			setSecondary(value)
			setValue(0)
		}
	}
	function BinomialCox(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("BC")
			setSecondary(value)
			setValue(0)
		}
	}
	function Number(n){
		if(value == 0 || value == "Invalid format")
		setValue(n)
		else if (value > 0)
			setValue(n + value*10)
		else
			setValue(value*10 - n)
	}
	function Multi(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("multiplication")
			setSecondary(value)
			setValue(0)
		}
	}
	function Sinus(){
		if(value != "Invalid format")
		setValue(Math.sin(value))
	}
	function ArchSinus(){
		if(value != "Invalid format")
		setValue(Math.asin(value))
	}
	function Sub(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("sub")
			setSecondary(value)
			setValue(0)
		}
	}
	function Cosinus(){
		if(value != "Invalid format")
		setValue(Math.cos(value))
	}
	function ArchCosinus(){
		if(value != "Invalid format")
		setValue(Math.acos(value))
	}
	function Plus(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("plus")
			setSecondary(value)
			setValue(0)
		}
	}
	function Tangent(){
		if(value != "Invalid format")
		setValue(Math.tan(value))
	}
	function ArchTangent(){
		if(value != "Invalid format")
		setValue(Math.atan(value))
	}
	function Opposite(){
		if(value != "Invalid format")
		setValue(-value)
	}
	function Module(){
		if(value == "Invalid format")
		invalid()
		else{
			setOp("mod")
			setSecondary(value)
			setValue(0)
		}
	}


	return (
		<div className = "App">
			<AppContext.Provider value={value}>
				<Display testo={"Y = "}/>
			</AppContext.Provider>
			<AppContext.Provider value={operation}>
				<Display testo={"Function: "}/>
			</AppContext.Provider>
			<AppContext.Provider value={secondary}>
				<Display testo={"X = "}/>
			</AppContext.Provider>
			<br></br>

			<AppContext.Provider value={"2^X"}>
				<button onClick={()=>{Power2()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"10^X"}>
				<button onClick={()=>{Power10()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"e^X"}>
				<button onClick={()=>{Exp()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"ln(X)"}>
				<button onClick={()=>{NaturalL()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"logX(Y)"}>
				<button onClick={()=>{LogBase()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"CANCEL"}>
				<button onClick={()=>{Canc()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"X^Y"}>
				<button onClick={()=>{Power()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"Y√X"}>
				<button onClick={()=>{Root()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"X^2"}>
				<button onClick={()=>{Square()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"√X"}>
				<button onClick={()=>{SquareRoot()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"1/X"}>
				<button onClick={()=>{Inverse()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"/"}>
				<button onClick={()=>{Fraction()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"BC(X:Y)"}>
				<button onClick={()=>{BinomialCox()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"X!"}>
				<button onClick={()=>{setValue(factorial(value))}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"7"}>
				<button onClick={()=>{Number(7)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"8"}>
				<button onClick={()=>{Number(8)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"9"}>
				<button onClick={()=>{Number(9)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"*"}>
				<button onClick={()=>{Multi()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"Sin"}>
				<button onClick={()=>{Sinus()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"ASin"}>
				<button onClick={()=>{ArchSinus()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"4"}>
				<button onClick={()=>{Number(4)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"5"}>
				<button onClick={()=>{Number(5)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"6"}>
				<button onClick={()=>{Number(6)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"-"}>
				<button onClick={()=>{Sub()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"Cos"}>
				<button onClick={()=>{Cosinus()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"ACos"}>
				<button onClick={()=>{ArchCosinus()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"1"}>
				<button onClick={()=>{Number(1)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"2"}>
				<button onClick={()=>{Number(2)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"3"}>
				<button onClick={()=>{Number(3)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"+"}>
				<button onClick={()=>{Plus()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"Tan"}>
				<button onClick={()=>{Tangent()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"ATan"}>
				<button onClick={()=>{ArchTangent()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"+/-"}>
				<button onClick={()=>{Opposite()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"0"}>
				<button onClick={()=>{Number(0)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"MOD"}>
				<button onClick={()=>{Module()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"="}>
				<button onClick={()=>{finish()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"e"}>
				<button onClick={()=>{setValue(Math.E)}}><Half/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"PI"}>
				<button onClick={()=>{setValue(Math.PI)}}><Half/></button>
			</AppContext.Provider>
		</div>
	)
}
function Half(){
	const ctx = useContext(AppContext)
	return (
		<div>
			<div className = "meta">{ctx}</div>
		</div>
	)
}
function Display(props){
	const ctx = useContext(AppContext)
	if(ctx != null){
		return (
			<div>
				<div className = "schermo">{props.testo}{ctx}</div>
			</div>
		)
	}
	else{
		return (
			<div>
				<div className = "schermo">{ctx}</div>
			</div>
		)
	}

}
function Buttons(){
	const ctx = useContext(AppContext)
	return (
		<div>
			<div className = "tasto">{ctx}</div>
		</div>
	)
}

var rootNode = document.getElementById("app")
ReactDOM.render(
<React.StrictMode>
<App/>
</React.StrictMode>,
rootNode)