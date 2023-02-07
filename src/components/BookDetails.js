import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsStar, BsFillCartPlusFill, BsCheck2Circle } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { MdStoreMallDirectory } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineLike, AiOutlineTwitter } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import "../styles/BookDetails.css";

function BookDetails() {
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  const [price, setPrice] = useState("");

  let { id } = useParams();

  // let id = 4

  const detailData = () => {
    fetch(`http://localhost:5004/Books/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setImage(data.imgUrl);
        setAuthor(data.author);
        setDescription(data.description);
        setPrice(data.price);
        setReview(data.review);
        setTitle(data.title);
      });
  };
  // console.log(image)

  useEffect(
    function() {
      detailData();
    },
    [id]
  );

  const styles = {
    fontWeight: "lighter",
    color: "#ea4c89",
    marginLeft: 5,
  };

  const cart = {
    color: "rgb(13, 44, 92)",
    marginLeft: 10,
  };

  const check = {
    color: "green",
  };

  const socialMedia = {
    backgroundColor: "skyBlue"
  };
  return (
    <div className="detailsContainer">
      <div className="flex">
        <div className="left">
          <img
            style={{ width: 290, height: 430, marginRight: 50 }}
            src={image}
            alt=""
          />
          <div className="socialMedia">
            <div className="socialLink blue">
              <AiOutlineLike size={16}/>
              <h6 className="socialH6">like</h6>
            </div>
            <div className="socialLink skyBlue">
              <AiOutlineTwitter size={16}/>
              <h6 className="socialH6">tweet</h6>
            </div>
            <div className="socialLink red">
              <ImPinterest2 size={16}/>
              <h6 className="socialH6">save</h6>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="negative title">
            <h3 className="detailsTitle">
              {title} <br />{" "}
              <i className="author">
                {" "}
                <b className="by">by</b> {author}
              </i>
            </h3>
          </div>

          <div className="reviews">
            <h3 className="detailsTitle reviewH6">reviews</h3>
            <div className="stars">
              <BsStar style={styles} size={23} />
              <BsStar style={styles} size={23} />
              <BsStar style={styles} size={23} />
              <BsStar style={styles} size={23} />
              <BsStar style={styles} size={23} />
            </div>
            <h6 className="numberOfRev">no reviews</h6>
            <Link to="/purchase" className="writeARev">
              leave your review
            </Link>
          </div>

          <div className="price">
            <h6 className="buyBook">Buy-A-Book</h6> <br />{" "}
            <h6 className="retail">retail price {price}</h6>
          </div>

          <div className="saleContainer">
            <div className="cart">
              <button className="cartBtn">
                add to cart{" "}
                <BsFillCartPlusFill className="cart" style={cart} size={20} />{" "}
              </button>
              <h6 className="wishlist">
                <GrFormAdd size={14} />{" "}
                <h5 className="addWishList">add to wishlist</h5>
              </h6>
            </div>

            <div className="available">
              <div className="transyFlex delivery">
                <TbTruckDelivery size={20} />{" "}
                <h6 className="deliveryH6">for delivery</h6>
              </div>
              <div className="availableContent">
                {" "}
                <BsCheck2Circle size={20} style={check} />{" "}
                <h6 className="stockH6">in stock</h6>
              </div>
              <h6 className="shipping">
                <b className="free">free</b> shipping for registered member
              </h6>
              <div className="store">
                <div className="transyFlex">
                  <MdStoreMallDirectory />{" "}
                  <h6 className="storeH6">buy online pickup at store</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="overView">overview</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default BookDetails;
