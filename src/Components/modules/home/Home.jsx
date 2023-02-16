import React from "react";
import "./Home.scss";
import Hanheader from "../../../assets/homeAssets/HAndheader.png";
import Persentage from "../../../assets/homeAssets/persntage.png";
import GetStart from "../../../assets/homeAssets/getstrt.png";
import Starimg from "../../../assets/homeAssets/star.png";
import Chckimg from "../../../assets/homeAssets/chck.png";
import Teliimg from "../../../assets/homeAssets/teli.png";
import paypal from "../../../assets/homeAssets/paypal.png";
import LastT from "../../../assets/homeAssets/lttrans.png";

const Home = () => {
  return (
    <>
      <div className="subheader-container">
        <div className="subheader-container-content">
          <div className="subheader-container-content-left">
            <div className="subheader-container-content-left-discountbox">
              <img src={Persentage} alt="persentage" />
              <p>
                <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
              </p>
            </div>
            <div className="subheader-container-content-left-headtext">
              <p>The Next</p>
              <span>Generation</span>
              <p>Payment Method.</p>
            </div>
            <img src={GetStart} alt="GetStart" />
            <p>
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </p>
          </div>
          <div className="subheader-container-content-right">
            <img src={Hanheader} alt="subheader-Img" />
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="container3-content">
          <Numberactivity />
          <p>|</p>
          <Numberactivity />
          <p>|</p>
          <Numberactivity />
        </div>
      </div>
      <div className="container4">
        <div className="container4-content">
          <div className="container4-content-left">
            <h1>You do the business, we’ll handle the money.</h1>
            <p>
              With the right credit card, you can improve your financial life by
              building credit, earning rewards and saving money. But with
              hundreds of credit cards on the market.
            </p>
            <button>Get Started</button>
          </div>
          <div className="container4-content-right">
            <BussinessCards
              tittle="Rewards"
              data="The best credit cards offer some tantalizing combinations of
            promotions and prizes"
              Star={Starimg}
            />
            <BussinessCards
              tittle="100% Secured"
              data="We take proactive steps make sure your information and transactions are secure."
              Star={Chckimg}
            />
            <BussinessCards
              tittle="Balance Transfer"
              data="A balance transfer credit card can save you a lot of money in interest charges."
              Star={Teliimg}
            />
          </div>
        </div>
      </div>
      <div className="transaction-container5">
        <div className="transaction-container5-content">
          <div className="transaction-container5-content-left">
            <div className="transaction-container5-content-left-paypal-container">
              <div className="transaction-container5-content-left-paypal-container-content">
                <div className="transaction-container5-content-left-paypal-container-content-row1">
                  <div className="transaction-container5-content-left-paypal-container-content-row1-left">
                    <div>
                      <img src={paypal} alt="paypal" />
                    </div>
                  </div>
                  <div className="transaction-container5-content-left-paypal-container-content-row1-right">
                    <h1>Paypal</h1>
                    <p>Checkout</p>
                  </div>
                </div>
                <div className="transaction-container5-content-left-paypal-container-content-row2">
                  <div className="transaction-container5-content-left-paypal-container-content-row2-left">
                    <p>Total</p>
                    <h2>$210</h2>
                  </div>
                  <div className="transaction-container5-content-left-paypal-container-content-row2-right">
                    <button>Change</button>
                  </div>
                </div>
                <div className="transaction-container5-content-left-paypal-container-content-row3">
                  <button>Make Payment</button>
                </div>
              </div>
            </div>
              <div className="transaction-container5-content-left-tcard">
                <div className="transaction-container5-content-left-tcard-content">
                  <img src={LastT} alt="transactionCard" />
                </div>
              </div>
          </div>
          <div className="transaction-container5-content-right"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

const Numberactivity = () => {
  return (
    <div className="nactivity">
      <div className="nactivity-content">
        <p>300+</p>
        <h2>user active</h2>
      </div>
    </div>
  );
};

const BussinessCards = ({ tittle, data, Star }) => {
  return (
    <div className="bscard">
      <div className="bscard-content">
        <div className="bscard-content-left">
          <img src={Star} alt="star" />
        </div>
        <div className="bscard-content-right">
          <h2> {tittle} </h2>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};
