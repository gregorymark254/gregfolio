import React from 'react'
import { BsArrowDownCircle } from "react-icons/bs";

const Home = () => {

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  return (
    <div className="min-h-screen">
      <section className="hero">
        <div className="hero-inner">
          <h1><b>HI, I'M GREGORY MARK.</b></h1>
          <h1>Web Developer<b><span className="typewrite" data-period="2000" data-type='[ "WEB DEVELOPER.", "WEB DESIGNER." ,"WEB DEVELOPER.", "WEB DESIGNER." ]'>
           <div className="wrap"></div></span></b>
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

export default Home
