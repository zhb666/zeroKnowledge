import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import {
  notification,
  Avatar,
  List,
  Space,
  Button,
  Modal,
  Carousel,
  Progress,
  Form,
  Input
} from "antd";

import "./index.css";

const datas = [
  {
    href: "",
    progress: 100,
    title: "Whispers in the West 🤠",
    avatar:
      "https://ksr-ugc.imgix.net/assets/038/091/654/8f189220f87f79dec6fea3888b7dd9a3_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1658948268&auto=format&frame=1&q=92&s=a1e0a12c9918373386c149fba1b254aa",
    description:
      "A multiplayer murder mystery game from Team Dissonant coming to Steam",
    content:
      "We released a demo of the game on Steam in June. On the back of the positive comments we received from our players, we’re raising funds to create three new co-op mystery stories. The game comes with multiple stories, each of which is an hour-long mystery waiting to be solved. While the core game is free, each story will be offered as DLC add-ons. The stories need only be purchased by the host; other players can join the game even if they don’t own the script."
  },
  {
    href: "",
    progress: 60,
    title: "The Secret of the Mermaid",
    avatar:
      "https://ksr-ugc.imgix.net/assets/037/935/692/b0a5bb502094313c575d3a76a7de3001_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1657650282&auto=format&frame=1&q=92&s=1472c0aa277619de934a64ccde340207",
    description:
      "A live, journal–based Keepsake Game played by assisting an artist and scientist seeking the Mermaid's Secret in Rome.",
    content:
      "Both Clarissa and Dr. Dann need your help. The Mermaid is a profound Mystery, one that has confounded humanity for millennia. It is high time that a dedicated band of Mermaid Lovers got to the bottom of the Mystery, thus bringing the Healing only she can offer from out of her Watery Realm.  Ever since you were a child, you have loved Mermaids. You have heard fantastic tales about their shape–shifting prowess, their ability to raise raging storms or subdue wild tempests, and their healing powers. The Mermaid seems to hold some special secret for all humanity, one we have yet to discover."
  },
  {
    href: "",
    progress: 20,
    title: "My Uterus - My Choice",
    avatar:
      "https://ksr-ugc.imgix.net/assets/038/097/908/2b59ba0bc452b0391085e1b682b9285f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1659000739&auto=format&frame=1&q=92&s=8e665528c149e1a2884a6bc7dca73891",
    description:
      "Hilf uns gemeinsam ein nachhaltiges T-Shirt zu produzieren das die Selbstbestimmung der Frauen fördert. MAYLOU x VULVASHOP",
    content:
      "Es ist wirklich passiert: Das Oberste Gericht in den USA hat das bundesweite Recht auf Abtreibung gekippt. Damit wird vielen Menschen der sichere Zugang zu Schwangerschaftsabbrüchen verwehrt. Laut UN sind bereits jetzt 25 Millionen Menschen gezwungen auf gefährliche und unsichere Methoden zurückzugreifen um Abtreibungen durchzuführen. Mit diesem Projekt wollen wir das Thema in den öffentlichen Raum holen, denn auch in Österreich und Deutschland ist Abtreibung nicht legal, sondern nur unter gewissen Umständen straffrei."
  },
  {
    href: "",
    progress: 88,
    title: "Skythief - Book 1 of The Realmwalkers",
    avatar:
      "https://ksr-ugc.imgix.net/assets/038/105/109/4fa845a05e6a891fe2c742cfe0c50fd9_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1659046945&auto=format&frame=1&q=92&s=44eacde3710b2fbea0f705bfb203eb93",
    description:
      "A brand new series full of gods, monsters & adventure by award winning author Matthew Wolf",
    content:
      "Welcome back to Kickstarter! I know, I know...you're used to seeing Ronin Saga launches on here. But behind the scenes (in addition to the many Ronin Saga projects I have going on right now), I've been hard at work on a brand new series called The Realmwalkers! What started as a side project quickly became an expansive, changing world with deep lore, emotional characters and a plot that has me so excited, I'm struggling to even keep spoilers contained here..."
  }
];

let listData = JSON.parse(window.localStorage.getItem("listData"));

if (listData) {
} else {
  listData = datas;
  window.localStorage.setItem("listData", JSON.stringify(datas));
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function Home() {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(listData);
  const [form] = Form.useForm();

  const formItemLayout = {
    labelCol: {
      xs: { span: 20 },
      sm: { span: 6 }
    },
    wrapperCol: {
      xs: { span: 18 },
      sm: { span: 16 }
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log("Success:", values);
      setData([
        ...data,
        {
          href: "",
          progress: 0,
          title: values.name,
          avatar: values.avatar,
          description: values.description,
          content: values.content
        }
      ]);
      notification["success"]({
        message: "success"
      });
      form.resetFields();
      setIsModalVisible(false);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getBlack = item => {
    history.push({ pathname: "/details", search: item.title });
  };

  const onFinish = values => {
    console.log(values);
  };

  useEffect(() => {
    window.localStorage.setItem("listData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home animated fadeInLeft" id="Home">
      <Modal
        title="Create project"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        // okText="确认"
        // cancelText="取消"
      >
        <Form form={form} onFinish={onFinish} {...formItemLayout}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input  name!" }]}
          >
            <Input placeholder="input Name" />
          </Form.Item>
          <Form.Item
            name="avatar"
            label="Avatar"
            rules={[{ required: true, message: "Please input  Avatar!" }]}
          >
            <Input placeholder="input Avatar" />
          </Form.Item>
          <Form.Item
            name="target"
            label="Target"
            rules={[{ required: true, message: "Please input  Target!" }]}
          >
            <Input placeholder="input Target" />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "Please input  content!" }]}
          >
            <Input placeholder="input Description" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please input  Description!" }]}
          >
            <Input placeholder="input Description" />
          </Form.Item>
          <Form.Item
            name="milestoneDates"
            label="MilestoneDates"
            rules={[
              { required: true, message: "Please input  MilestoneDates!" }
            ]}
          >
            <Input placeholder="input MilestoneDates" />
          </Form.Item>
        </Form>
      </Modal>

      <div className="Bannner">
        {/* <Carousel className="banner_box">
          <div className="banner_div">
            <h2>基于Nervos开发的区块链众筹平台 </h2>
            <h3>一个开源的公共区块链众筹生态系统 众筹形式的公益组织</h3>
            <img
              src="https://www.nervos.org/wp-content/uploads/2022/04/2.png"
              alt=""
            />
          </div>
        </Carousel> */}
        <div className="banner_div">
          <h2>基于Nervos开发的区块链众筹平台 </h2>
          <h3>一个开源的公共区块链众筹生态系统 众筹形式的公益组织</h3>
          <img
            src="https://www.nervos.org/wp-content/uploads/2022/04/2.png"
            alt=""
          />
        </div>
      </div>

      <div className="button">
        <Button
          type="primary"
          htmlType="submit"
          className="createProject"
          size="large"
          onClick={showModal}
        >
          Create project
        </Button>
      </div>

      <div className="List">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 100
          }}
          dataSource={data}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={item => (
            <List.Item
              key={item.title}
              onClick={() => {
                getBlack(item);
              }}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />
              ]}
              extra={<img width={272} alt="logo" src={item.avatar} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
              <Progress
                percent={item.progress}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068"
                }}
                size="small"
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Home;
