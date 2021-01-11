import React, { useContext, useState } from "react"
import ReactDOM from "react-dom"
import "./style.css"

const AppContext = React.createContext(null)

function  App() {
	const [value, setValue] = useState(0)
	const [secondary, setSecondary] = useState(null)
	const [operation, setOp] = useState(null)
	const [base, setBase] = useState("DEC")
	function acceptable(){
		if(value != "Invalid format" && base == "DEC")
			return true
		else
			return false
	}
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
		setBase("DEC")
	}
	function Power2(){
		if(acceptable())
		setValue(Math.pow(2, value))
	}
	function Power10(){
		if(acceptable())
		setValue(Math.pow(10, value))
	}
	function Exp(){
		if(acceptable())
		setValue(Math.pow(Math.E, value))
	}
	function NaturalL(){
		if(acceptable())
		setValue(Math.log(value))
	}
	function LogBase(){
		if(!acceptable())
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
		setBase("DEC")
	}
	function Power(){
		if(!acceptable())
		invalid()
		else{
			setOp("pow")
			setSecondary(value)
			setValue(0)
		}
	}
	function Root(){
		if(!acceptable())
		invalid()
		else{
			setOp("root")
			setSecondary(value)
			setValue(0)
		}
	}
	function Square(){
		if(acceptable())
		setValue(value * value)
	}
	function SquareRoot(){
		if(acceptable())
		setValue(Math.sqrt(value))
	}
	function Inverse(){
		if(acceptable())
		setValue(1/value)
	}
	function Fraction(){
		if(!acceptable())
		invalid()
		else{
			setOp("div")
			setSecondary(value)
			setValue(0)
		}
	}
	function BinomialCox(){
		if(!acceptable())
		invalid()
		else{
			setOp("BC")
			setSecondary(value)
			setValue(0)
		}
	}
	function Number(n){
		if(base == "DEC"){
			if(value == 0 || value == "Invalid format")
			setValue(n)
			else if (value > 0)
				setValue(n + value*10)
			else
				setValue(value*10 - n)
		}
	}
	function Multi(){
		if(!acceptable())
		invalid()
		else{
			setOp("multiplication")
			setSecondary(value)
			setValue(0)
		}
	}
	function Sinus(){
		if(acceptable())
		setValue(Math.sin(value))
	}
	function ArchSinus(){
		if(acceptable())
		setValue(Math.asin(value))
	}
	function Sub(){
		if(!acceptable())
		invalid()
		else{
			setOp("sub")
			setSecondary(value)
			setValue(0)
		}
	}
	function Cosinus(){
		if(acceptable())
		setValue(Math.cos(value))
	}
	function ArchCosinus(){
		if(acceptable())
		setValue(Math.acos(value))
	}
	function Plus(){
		if(!acceptable())
		invalid()
		else{
			setOp("plus")
			setSecondary(value)
			setValue(0)
		}
	}
	function Tangent(){
		if(acceptable())
		setValue(Math.tan(value))
	}
	function ArchTangent(){
		if(acceptable())
		setValue(Math.atan(value))
	}
	function Opposite(){
		if(acceptable())
		setValue(-value)
	}
	function Module(){
		if(!acceptable())
		invalid()
		else{
			setOp("mod")
			setSecondary(value)
			setValue(0)
		}
	}
	function toDecimal(){
		let res = 0
		switch(base){
			case "DEC":{
				return
			}
			case "BIN":{
				let num = value
				let ind = 0
				while(num > 0){
					let last = num%10
					res += Math.pow(2, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				setBase("DEC")
				setValue(res)
				return
			}
			case "OCT":{
				let num = value
				let ind = 0
				while(num > 0){
					let last = num%10
					res += Math.pow(8, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				setBase("DEC")
				setValue(res)
				return
			}
			case "HEX":{
				res = parseInt(value, 16)
				setBase("DEC")
				setValue(res)
			}
		}
	}
	function toBinary(){
		let res = 0
		switch(base){
			case "DEC":{
				let digits = []
				let num = value
				while(num > 0){
					digits.push(num%2)
					num = Math.floor(num/2)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("BIN")
				setValue(res)
				return
			}
			case "BIN":{
				return
			}
			case "OCT":{
				let num = value
				let ind = 0
				let dec = 0
				while(num > 0){
					let last = num%10
					dec += Math.pow(8, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				let digits = []
				while(dec > 0){
					digits.push(dec%2)
					dec = Math.floor(dec/2)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("BIN")
				setValue(res)
				return
			}
			case "HEX":{
				let dec = parseInt(value, 16)
				let digits = []
				while(dec > 0){
					digits.push(dec%2)
					dec = Math.floor(dec/2)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("BIN")
				setValue(res)
				return
			}
		}
	}
	function toOctal(){
		let res = 0
		switch(base){
			case "DEC":{
				let digits = []
				let num = value
				while(num > 0){
					digits.push(num%8)
					num = Math.floor(num/8)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("OCT")
				setValue(res)
				return
			}
			case "BIN":{
				let num = value
				let ind = 0
				let dec = 0
				while(num > 0){
					let last = num%10
					dec += Math.pow(2, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				let digits = []
				while(dec > 0){
					digits.push(dec%8)
					dec = Math.floor(dec/8)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("OCT")
				setValue(res)
				return
			}
			case "OCT":{
				return
			}
			case "HEX":{
				let dec = parseInt(value, 16)
				let digits = []
				while(dec > 0){
					digits.push(dec%8)
					dec = Math.floor(dec/8)
				}
				for(let i = digits.length - 1; i >= 0; i--){
					res = res + digits[i]
					if (i != 0)
					res = res * 10
				}
				setBase("OCT")
				setValue(res)
				return
			}
		}
	}
	function toHexadecimal(){
		let res = ""
		switch(base){
			case "DEC":{
				res = value.toString(16)
				setBase("HEX")
				setValue(res)
				return
			}
			case "BIN":{
				let num = value
				let ind = 0
				let dec = 0
				while(num > 0){
					let last = num%10
					dec += Math.pow(2, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				res = dec.toString(16)
				setBase("HEX")
				setValue(res)
				return
			}
			case "OCT":{
				let num = value
				let ind = 0
				let dec = 0
				while(num > 0){
					let last = num%10
					dec += Math.pow(8, ind)*last
					ind++
					num = Math.floor(num/10)
				}
				res = dec.toString(16)
				setBase("HEX")
				setValue(res)
				return
			}
			case "HEX":{
				return
			}
		}
	}
	return (
		<div className = "App">
			<AppContext.Provider value={value}>
				<Display testo={"X = "}/>
			</AppContext.Provider>
			<AppContext.Provider value={operation}>
				<Display testo={"Function: "}/>
			</AppContext.Provider>
			<AppContext.Provider value={secondary}>
				<Display testo={"Y = "}/>
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
			<AppContext.Provider value={"logY(X)"}>
				<button onClick={()=>{LogBase()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"CANCEL"}>
				<button onClick={()=>{Canc()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"Y^X"}>
				<button onClick={()=>{Power()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"X√Y"}>
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

			<AppContext.Provider value={"BC(Y:X)"}>
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
			<AppContext.Provider value={"Y%X"}>
				<button onClick={()=>{Module()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"="}>
				<button onClick={()=>{finish()}}><Buttons/></button>
			</AppContext.Provider>

			<br></br>

			<AppContext.Provider value={"e"}>
				<button onClick={()=>{setValue(Math.E)}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"DEC"}>
				<button onClick={()=>{toDecimal()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"BIN"}>
				<button onClick={()=>{toBinary()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"OCT"}>
				<button onClick={()=>{toOctal()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"HEX"}>
				<button onClick={()=>{toHexadecimal()}}><Buttons/></button>
			</AppContext.Provider>
			<AppContext.Provider value={"PI"}>
				<button onClick={()=>{setValue(Math.PI)}}><Buttons/></button>
			</AppContext.Provider>
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
let rootNode = document.getElementById("app")
ReactDOM.render(
<React.StrictMode>
<App/>
</React.StrictMode>,
rootNode)