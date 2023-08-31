import { useState } from "react"

export default function Calculator() {
   
    const [unit,setUnit] = useState(0)
    const [tenth, setTenth]  = useState(0)
    const [hundredth, setHundredth] = useState(0)
    const [thousandth, setThousandth] = useState(0)

    const handleChangeU = (e) => {
        const unitValue = e.target.value
        setUnit(unitValue)
    }
    
    const handleChangeD = (e) => {
        setTenth(e.target.value)
    }
    
    const handleChangeC = (e) => {
        setHundredth(e.target.value)
    }
    
    const handleChangeM = (e) => {
        setThousandth(e.target.value)
    }

    let add = parseInt(unit) + parseInt(tenth) + parseInt(hundredth) + parseInt(thousandth) 
    
    return (
        <>
            <section className='p-5'>
                <h3 className="text-center fw-bold">Calculadora para números en el rango de 1 a 3999</h3>
                <div className="container p-5">
                    <span>Escoge el número que deseas convertir:</span>
                    <select onChange={handleChangeM} >
                        <option value='0' >-</option>
                        <option value='1000' >M</option>
                        <option value='2000' >MM</option>
                        <option value='3000' >MMM</option>                        
                    </select>
                    <select onChange={handleChangeC} >
                        <option value='0' > - </option>
                        <option value='100' >C</option>
                        <option value='200' >CC</option>
                        <option value='300' >CCC</option>
                        <option value='400' >CD</option>
                        <option value='500' >D</option>
                        <option value='600' >DC</option>
                        <option value='700' >DCC</option>
                        <option value='800' >DCCC</option>
                        <option value='900' >CM</option>
                    </select>
                    <select onChange={handleChangeD} >
                        <option value="0" >-</option>                        
                        <option value="10" >X</option>
                        <option value="20" >XX</option>
                        <option value="30" >XXX</option>
                        <option value="40" >XL</option>
                        <option value="50" >L</option>
                        <option value="60" >LX</option>
                        <option value="70" >LXX</option>
                        <option value="80" >LXXX</option>
                        <option value="90" >XC</option>
                    </select>
                    <select onChange={handleChangeU} >
                        <option value="0" >-</option>
                        <option value="1" >I</option>
                        <option value="2" >II</option>
                        <option value="3" >III</option>
                        <option value="4" >IV</option>
                        <option value="5" >V</option>
                        <option value="6" >VI</option>
                        <option value="7" >VII</option>
                        <option value="8" >VIII</option>
                        <option value="9" >IX</option>
                    </select>        
                    &nbsp;           
                    <span>Resultado {add}</span>
                </div>

            </section>
        </>
    )
}
