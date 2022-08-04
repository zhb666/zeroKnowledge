import React, { useEffect, useState } from "react";
import { Progress, Button, Steps } from "antd";
import { ajaxGet, ajaxPost } from "../../axios/http";
import { URL } from "../../config/index";

import "./index.scss";

const { Step } = Steps;

const Details = props => {
  const [data, setData] = useState({});

  const get_projects = async () => {
    let id = props.location.state.id;
    const res = await ajaxGet(URL + `/projects/${id}`, {}, { timeout: 10000 });
    setData(res);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    get_projects();
  }, []);

  return (
    <div className="Details animated fadeInLeft">
      <div className="Details_top">
        <h3>{data.name}</h3>
        <h5>{data.description}</h5>
        <div className="Details_ation">
          <div className="Details_ationL">
            <img
              src="https://ksr-ugc.imgix.net/assets/038/091/654/8f189220f87f79dec6fea3888b7dd9a3_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658948268&auto=format&frame=1&q=92&s=a1e0a12c9918373386c149fba1b254aa"
              alt=""
            />
          </div>
          <div className="Details_ationR">
            <Progress
              percent={(data.pledgedCKB / data.startupCKB) * 100}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068"
              }}
              size="small"
            />
            <div className="money">
              <p>
                目标数:{data.targetCKB} <br />
                <span>已認繳 {data.pledgedCKB}</span>
              </p>
            </div>
            <div className="zhichizhe">
              <p>
                25 <br />
                <span>名支持者</span>
              </p>
            </div>
            <div className="zhichizhe">
              <p>
                18 <br />
                <span>天剩余</span>
              </p>
            </div>
            <Button className="button" type="primary" block>
              支持這個專案
            </Button>
          </div>
        </div>
      </div>

      <div className="steps_div">
        <Steps
          current={0}
          percent={(data.pledgedCKB / data.startupCKB) * 100}
          className="steps_s"
        >
          {data.milestones &&
            data.milestones.map((item, index) => {
              return (
                <Step
                  key={index}
                  title={item.dueDate}
                  subTitle="Left 00:00:00"
                  description={item.description}
                />
              );
            })}
          {/* <Step
            title="2022-12-31"
            subTitle="Left 00:00:00"
            description="发布 demo 版本(3个关卡), 需要资金 30 %"
          />
          <Step
            title="2023-12-01 "
            subTitle="Left 00:00:00"
            description="发布玩家可玩版本, 需要资金 60 % "
          />

          <Step
            title="2024-12-01"
            subTitle="Left 00:00:00"
            description="发布最终版本, 需要资金 100 % "
          /> */}
        </Steps>
      </div>

      {/* Details */}
      <div className="Details_list">
        <h3>背景故事</h3>
        <img
          className="imgss"
          src="https://ksr-ugc.imgix.net/assets/036/567/809/8b8041e7504497fc45bebe36daa9f723_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1646570882&gif-q=50&lossless=true&s=84c0c895f64612be0ad2f8859ff5669e"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/070/183/7514995822750ff909054266afd201b5_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658799426&gif-q=50&lossless=true&s=a7a350404ca80d3d2866905b4971ad93"
          alt=""
        />
        <p>
          We released a demo of the game on Steam in June. On the back of the
          positive comments we received from our players, we’re raising funds to
          create three new co-op mystery stories. (The base game will be free,
          so your friends can join you at no additional cost.)
        </p>
        <p>Hear what the developers say about their campaign - </p>
        <img
          src="https://ksr-ugc.imgix.net/assets/038/066/096/1eeb93b9eeb28a26e1b3d2f358f7a633_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1658770718&gif-q=50&lossless=true&s=9f5e6aa688d3d973a56045c371b8e776"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/082/481/0224eb3fdea2f08f276dd4b6642862d9_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658879182&gif-q=50&q=92&s=844e7ab083c9a23e74bc3f5787a3b8e8"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/082/481/0224eb3fdea2f08f276dd4b6642862d9_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658879182&gif-q=50&q=92&s=844e7ab083c9a23e74bc3f5787a3b8e8"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/036/567/992/ed572d1d729916121d1896d42f39bbf9_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1646573141&gif-q=50&lossless=true&s=bd3481b968c42063bfd3d5a337ec0c1a"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/036/567/992/ed572d1d729916121d1896d42f39bbf9_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1646573141&gif-q=50&lossless=true&s=bd3481b968c42063bfd3d5a337ec0c1a"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/036/567/995/4c21109df9ce0dc7de56d541e2c899f2_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1646573154&gif-q=50&lossless=true&s=a9aad9b91acf2d7a08fedc4565a240f8"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/036/569/351/5ff12c1917cc614244b9c0e7ef575e50_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1646588271&gif-q=50&q=92&s=71dceade587eeb6cc98bdcf3ebf85c70"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/070/341/17a64e44ce3939d9185d77c16629225e_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658800805&gif-q=50&q=92&s=5520d523766ce0ddd770f7629af7dbb9"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/066/168/8f2bd04d9a79baff9bda45e4b3f92bff_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658771227&gif-q=50&q=92&s=43784040d3d8396efc4ee9b2fffe4eb6"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/070/370/bed899de008a91cd2cb179aca3dfda6a_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658801124&gif-q=50&q=92&s=6a4e02180d2c7d2ffb7a354177cc90e5"
          alt=""
        />
        <img
          src="https://ksr-ugc.imgix.net/assets/038/066/231/ad7d99ff4972565c726fe0d247c66e84_original.gif?ixlib=rb-4.0.2&w=680&fit=max&v=1658771621&gif-q=50&q=92&s=6a12b8d4e7a1672a4754c92ee5f97e3b"
          alt=""
        />
        <img src="" alt="" />
        <p>風險與挑戰</p>
        <p>
          "Ideas are worth nothing unless executed" is the motto of our team. It
          took us less than six months to build the first playable prototype of
          Whispers in the West and another six months to bring it to Steam. We
          developed our custom narrative engine to support the game’s unique
          multiplayer storytelling. We are confident that by Q1 2023 we will be
          able to deliver three new stories, if not earlier. However, game
          development is a process full of surprises. New technical issues may
          arise, and unforeseen changes in the tools we use may cause delays in
          delivery. Our team’s previous experience means that we are adaptable
          and always prepared to face the challenges ahead. We regularly conduct
          external playtests to ensure the quality of the game, and we always
          appreciate receiving feedback from the community. Although it's not
          possible to please everyone, we listen to our audience and are fully
          committed to delivering the best experience we can for our players.
        </p>
      </div>
    </div>
  );
};

export default Details;
