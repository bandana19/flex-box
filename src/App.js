
import { useEffect, useState } from 'react';
import './App.css';
import { colorNames } from './contant/constants';

function App() {
  const [addNumber, setAddNumber] = useState("")
  const [addwidth, setAddWidth] = useState('')
  const [height, setHeight] = useState("")
  const [containerWIdth, setContainerWidth] = useState("")
  const [flextItem, setFlexItem] = useState([])

  // select-options
  const [contant, setContant] = useState('space-between');
  const [direction, setDirction] = useState("row")


  function itemDirection(e) {
    setDirction(e.target.value)
  }

  function changeContant(e) {
    setContant(e.target.value)
  }

  useEffect(() => {
    let tempArr = Array.from({ length: addNumber })
    setFlexItem(tempArr)
  }, [addNumber])


  function getColorName() {
    let randomNo = Math.random() * 29;
    randomNo = parseInt(randomNo)
    return colorNames[randomNo];
  }

  return (
    <div>
      <div className='input-box'>
        <p className='add-box'>Add Box Number</p>
        <p>Add width of item box</p>
        <p>Add height of item box</p>
        <p>Add container width</p>
      </div>
      <div className='input-flex-box'>
        <input className='input-flex1' type="number"
          onChange={(e) => setAddNumber(e.target.value)}
          placeholder='number of item'
        />
        <input className='input-flex2' type="text"
          onChange={(e) => setAddWidth(e.target.value)}
          placeholder='Width of Item'
        />
        <input className='input-flex3' type="text"
          placeholder='Height of Item'
          onChange={(e) => setHeight(e.target.value)} />

        <input className='input-flex4' type="text" placeholder='container width'
          onChange={(e) => setContainerWidth(e.target.value)} />
      </div>
      <h4 className='title'>Select only one option</h4>
     
      <div className='justify-item'>
        <label className='f-start'>Flex-Start</label>
        <input className="radio" type="radio"
          value="start"
          checked={contant === "start"}
          onChange={changeContant} />

        <label className='fc'>Flex-Center</label>
        <input className="center" type="radio"
          value="center"
          checked={contant === "center"}
          onChange={changeContant} />

        <label className='f-end'>Flex-End</label>
        <input className="end" type="radio"
          value="end"
          checked={contant === "end"}
          onChange={changeContant} />
      </div>
      <div className='justify-contant'>
        <label>Justify-Between</label>
        <input type="radio"
          value="space-between"
          checked={contant === "space-between"}
          onChange={changeContant}
        />

        <label className='j-r'>Justify-Around</label>
        <input type="radio"
          value="space-around"
          checked={contant === "space-around"}
          onChange={changeContant}
        />

        <label className='j-evenly'>Justify-Evenly</label>
        <input type="radio"
          value="space-evenly"
          checked={contant === "space-evenly"}
          onChange={changeContant}
        />
      </div>

      <div className='radio-button'>
        <label className='flr'>Flex-Dairation-Row</label>
        <input type="radio" value="row" checked={direction === "row"} onChange={itemDirection} />

        <label className='row-reveser'>Row-Reverse</label>
        <input type="radio" value="row-reverse" checked={direction === "row-reverse"} onChange={itemDirection} />

        <label>Flex-Dairation-Column</label>
        <input type="radio" value="column" checked={direction === "column"} onChange={itemDirection} />

        <label className='col-r'>Column-Reverse</label>
        <input type="radio" value="column-reverse" checked={direction === "column-reverse"} onChange={itemDirection} />
      </div>
      <div className='flex-container' style={{ width: containerWIdth ? containerWIdth : "60%", justifyContent: contant, flexDirection: direction }}>
        {flextItem?.map((itm) => (<div className='flex-box'
          style={{
            width: addwidth ? addwidth : "100px",
            height: height ? height : "100px", backgroundColor: getColorName()
          }}></div>))}
      </div>
    </div>
  );
}

export default App;
