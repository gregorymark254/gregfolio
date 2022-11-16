import React from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'

const Home = () => {

  return (
    <div className="min-h-screen">
      <section className="hero">
        <div className="hero-inner">
          <h1><b>HI, I'M GREGORY MARK.</b></h1>
          <h1>
            <div id="container">
              <div id="text"></div>
            </div>
          </h1>
          <br />
          <a href="#projects" className="hover:bg-[#E45826] bg-[#F55353] rounded-md px-8 py-4">My Works</a>
          <div className="flex justify-center items-center mt-10 animate-bounce">
            <h2><BsArrowDownCircle/></h2>
          </div>
        </div>
      </section>
    </div>
  )
}

// List of sentences
var _CONTENT = [ "Web Developer", "Web Designer" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);


export default Home
