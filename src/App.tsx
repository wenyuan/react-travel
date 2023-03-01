import React from "react";
import { Row, Col, Typography } from "antd";
import styles from "./App.module.css";
import { Header, Footer, SideMenu, Carousel, ProductCollection} from "./components";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage1 from "./assets/images/sider_2021_12-09.png"
import sideImage2 from "./assets/images/sider_2022_02-04.png"
import sideImage3 from "./assets/images/sider_2022_02-05.png"

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      {/* 页面内容 content */}
      <div className={styles["page-content"]}>
        <Row style={{marginTop: 20}}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage1}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
