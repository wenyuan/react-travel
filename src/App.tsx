import React from "react";
import { Row, Col } from "antd";
import styles from "./App.module.css";
import { Header, Footer} from "./components";

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <div style={{backgroundColor: "red"}}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{backgroundColor: "blue"}}>走马灯</div>
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
