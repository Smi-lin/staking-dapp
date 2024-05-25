import React from "react";
import StakedAmount from "./StakedAmount";
import Rewardrate from "./Rewardrate";
import EarnedReward from "./EarnedReward";
import StakeToken from "../StakeToken/StakeToken";
import TokenApproval from "../StakeToken/TokenApproval";
import Stake from "../Stake/Stake";
import Approval from "../Stake/Approval";
import Withdraw from "../Withdraw/Withdraw";
import Footer from "../Footer/Footer";

const DisplayPanel = () => {
  return (
    <div className=" mt-20">
      <div className="flex justify-around">
        <div className="text-4xl font-medium">
          <h1>Connected Account</h1>
        </div>
        <div>
          <h2 className="text-4xl font-medium">Connected Account</h2>
          <p className="text-center text-[15px] mt-6">Unsupported </p>
        </div>
      </div>
      <div className="flex justify-around px-40 mt-7">
        <StakedAmount />
        <Rewardrate />
        <EarnedReward />
      </div>
      <div className="flex justify-around mt-20">
        <StakeToken />
        <TokenApproval />
      </div>
      <div className="flex justify-around mt-20">
        <Stake/>
        <Approval/>
      </div>
      <div className="ml-[15rem] mt-20">
        <Withdraw/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default DisplayPanel;
