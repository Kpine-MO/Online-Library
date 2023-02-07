import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Home.css";
import SliderCards from "./SliderCards";
function Home() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5004/Books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="homeContainer">
      <div className="landingPage">
        <div className="homeLeft">
          <div className="backG"></div>
          <p className="logoName">WebLib</p>
          <h1 className="headerTop">
            discover libraries full of content <br />{" "}
            <b className="headerBottom">with our annual subscription</b>{" "}
          </h1>
          <p className="aboutP">
            With a controlled component, the input’s value is always driven by
            the React state. While this means you have to type a bit more code,
            you can now pass the value to other UI elements too, or reset it
            from other event handlers.
          </p>
          <div className="btnContainer">
            <Link to="/library">
              <button className="homebtn colored">Library</button>
            </Link>
            <Link to="/donations ">
              <button className="homebtn notColored">Comments</button>
            </Link>
          </div>
        </div>
        <div className="rightContent">
          <div className="illustrations"></div>

          <div className="popular">
            <h2>popular authors</h2>
            <div>
              <div>
                <div className="profile">
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/3186558/pexels-photo-3186558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                  <div className="reads">
                    <h5>terry hayes</h5>
                    <p>200k reads this week</p>
                  </div>
                  <button className="moreBtn">more</button>
                </div>
                <div className="profile">
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/3775168/pexels-photo-3775168.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                  <div className="reads">
                    <h5>terry hayes</h5>
                    <p>200k reads this week</p>
                  </div>
                  <button className="moreBtn">more</button>
                </div>
                <div className="profile">
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  />
                  <div className="reads">
                    <h5>terry hayes</h5>
                    <p>200k reads this week</p>
                  </div>
                  <button className="moreBtn">more</button>
                </div>
                <div className="profile">
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                  <div className="reads">
                    <h5>terry hayes</h5>
                    <p>200k reads this week</p>
                  </div>
                  <button className="moreBtn">more</button>
                </div>
              </div>
            </div>
            <button className="seeMoreBtn">see more</button>
          </div>
        </div>
      </div>
      <div className="slider">
        <h3 className="libraryH">browse huge library filled <br/> with worlds bestsellers</h3>
        <button className="libraryBtn">show more</button>
      <Carousel responsive={responsive}>
          {allBooks.map((book, i) => {
            return (
              <div className="smallerCards">
                <SliderCards
                key={i}
                title={book.title}
                author={book.author}
                image={book.imgUrl}
                alt={book.title}
                id={book.id}
              />
              </div>
            );
          })}
      </Carousel>
      </div>
    </div>
  );
}

export default Home;
