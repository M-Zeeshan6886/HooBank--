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
import Check from "../../../assets/homeAssets/chck.svg";
import Apple from "../../../assets/homeAssets/apple.svg";
import pStore from "../../../assets/homeAssets/playstore.svg";
import method from "../../../assets/homeAssets/method.png";
import airbn from "../../../assets/homeAssets/airbnb.png";
import binance from "../../../assets/homeAssets/binance.png";
import conbase from "../../../assets/homeAssets/conbase.png";
import dropbase from "../../../assets/homeAssets/dropbox.png";
import pfcard from "../../../assets/homeAssets/pfcard.png";
import Fimg from "../../../assets/homeAssets/pfimg.png";

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
            <div className="transaction-container5-content-left-success">
              <img src={Check} alt="Check-img" />
              <p>Great! Your Payment is sucessfully</p>
            </div>
          </div>
          <div className="transaction-container5-content-right">
            <div className="transaction-container5-content-right-content">
              <h1>Easily control your billing & invoicing.</h1>
              <p>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
              <div className="transaction-container5-content-right-content-btns">
                <img src={Apple} alt="Apple-img" />
                <img src={pStore} alt="Playstore-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="method-container">
        <div className="method-container-content">
          <div className="method-container-content-left">
            <h1>Find a better card deal in few easy steps.</h1>
            <p>
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
              aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button>Get Started</button>
          </div>
          <div className="method-container-content-right">
            <img src={method} alt="method" />
          </div>
        </div>
      </div>
      <div className="container6">
        <div className="container6-content">
          <div className="container6-content-left">
            <h1>What people are saying about us</h1>
          </div>
          <div className="container6-content-right">
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
      </div>

      <div className="pfcard-container">
        <div className="pfcard-container-content">
          <PfCards
            pftext="Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver."
            pfName="Herman Jensen"
            Pfimg={Fimg}
          />
          <PfCards
            pftext="Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver."
            pfName="Steve Mark"
            Pfimg={Fimg}
          />
          <PfCards
            pftext="It is usually people in the money business, finance, and international trade that are really rich."
            pfName="Kenn Gallagher"
            Pfimg={Fimg}
          />
        </div>
      </div>
      <div className="companyNames">
        <div className="companyNames-content">
          <img src={airbn} alt="airbnd" />
          <img src={conbase} alt="airbnd" />
          <img src={binance} alt="airbnd" />
          <img src={dropbase} alt="airbnd" />
        </div>
      </div>
      <div className="service-container">
        <div className="service-container-content">
          <div className="service-container-content-left">
            <h1>Let's try out service now!</h1>
            <p>
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
          <div className="service-container-content-right">
            <button>Get Started</button>
          </div>
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

const PfCards = ({ pftext, pfName, Pfimg }) => {
  return (
    <div className="pfcards">
      <div className="pfcards-content">
        <img src={pfcard} alt="pfcards" />
        <p>{pftext}</p>
        <div className="pfcards-content-profile">
          <div className="pfcards-content-profile-left">
            <img src={Pfimg} alt="profile" />
          </div>
          <div className="pfcards-content-profile-right">
            <h1> {pfName} </h1>
            <p>Founder & Leader</p>
          </div>
        </div>
      </div>
    </div>
  );
};
