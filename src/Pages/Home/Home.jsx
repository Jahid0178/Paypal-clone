import React from "react";
import Banner from "../../components/Home/Banner/Banner";
import Brands from "../../components/Home/Brands/Brands";
import BuyNowPayLater from "../../components/Home/BuyNowPayLater/BuyNowPayLater";
import CheckCrypto from "../../components/Home/CheckCrypto/CheckCrypto";
import ConnectPaypal from "../../components/Home/ConnectPaypal/ConnectPaypal";
import GiveWithPaypal from "../../components/Home/GiveWithPaypal/GiveWithPaypal";
import SendMoney from "../../components/Home/SendMoney/SendMoney";
import TouchFreePayment from "../../components/Home/TouchFreePayment/TouchFreePayment";
import WorldwideUser from "../../components/Home/WorldwideUser/WorldwideUser";

const Home = () => {
  return (
    <div>
      <Banner />
      <ConnectPaypal />
      <BuyNowPayLater />
      <CheckCrypto />
      <TouchFreePayment />
      <SendMoney />
      <GiveWithPaypal />
      <Brands />
      <WorldwideUser />
    </div>
  );
};

export default Home;
