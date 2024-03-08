import React from 'react'
import Questions from './Questions';

export default function Quiz() {

  //Create button Next and Prev
  function onNext(){
    console.log('On Next Click');
  }

  function onPrev(){
    console.log('On onPrev Click');
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Applications</h1>

      {/* display questions */}

      <Questions/>

      
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext} >Next</button>

      </div>
      
    </div>
  )
}
