import "./App.css";
import React, { Component } from "react";

class CarouselIndicator extends Component {
  render() {
    return (
      <li class="indicator">
        <a/>
      </li>
    );
  }
}

class App extends Component {
  state = {
    slide: [
      { id: 0, url: "img/img1.png", text: "Test 1" },
      { id: 1, url: "img/img2.png", text: "Test 2" },
      { id: 2, url: "img/img3.png", text: "Test 3" }
    ],
    nb: -480,
    calc: 0
  };

  slide = () => {
    let car = document.getElementsByClassName('container')[0]
    let new_pos = this.state.calc + this.state.nb;

    if (new_pos < this.state.nb * (this.state.slide.length - 1)) new_pos = 0;

    car.style.transform = "translateX(" + new_pos + "px)";
    this.setState({ calc: new_pos });
  };

  render() {
    return (
      <div class="carousel-wrapper">
        <div class="carousel">
          <ul class="container">
            {this.state.slide.map((item) => (
              <li class="carousel_div" id={item.id}>
                <div class="carousel_div_content">
                  <div class="flex_item img_container">
                    <img src={item.url} alt={item.text}></img>
                  </div>
                  <div class="flex_item text_container">
                    <p>{item.text}</p>
                    <button class="info_btn">INFO</button>
                  </div>
                </div> 
              </li>
            ))}
          </ul>
          <div class="indicator_container">
            {this.state.slide.map((item) => (
              <CarouselIndicator />
            ))}
          </div>
          <button onClick={this.slide}>next</button>
        </div>
      </div>
    );
  }
}

export default App;
