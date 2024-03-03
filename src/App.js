
import { useEffect, useState } from 'react';
import './App.css';
import { colorNames } from './contant/constants';

function App() {
  const [addNumber, setAddNumber] = useState("")
  const [addwidth, setAddWidth] = useState('')
  const [height, setHeight] = useState("")
  const [containerWIdth, setContainerWidth] = useState("")
  const [flextItem, setFlexItem] = useState([])



  useEffect(() => {
    let tempArr = Array.from({ length: addNumber })
    setFlexItem(tempArr)
  }, [addNumber])


  function getColorName(){
   let randomNo=Math.random()*29;
   randomNo=parseInt(randomNo)
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
        <input className='input-box' type="number"
          onChange={(e) => setAddNumber(e.target.value)}
          placeholder='number of item'
        />
        <input className='input-box' type="text"
          onChange={(e) => setAddWidth(e.target.value)}
          placeholder='Width of Item'
        />
        <input className='input-box' type="text"
          placeholder='Height of Item'
          onChange={(e) => setHeight(e.target.value)} />

        <input className='input-box' type="text" placeholder='container width'
          onChange={(e) => setContainerWidth(e.target.value)} />
      </div>

      <div className='flex-container' style={{ width: containerWIdth ? containerWIdth : "60%" }}>
        {flextItem?.map((itm) => (<div className='flex-box'
          style={{ width: addwidth ? addwidth : "100px", height: height ? height : "100px", backgroundColor: getColorName() }}></div>))}
      </div>
    </div>
  );
}

export default App;
