import React from "react";
import ReactDOM from "react-dom";
import TextCarousel from "../index";
import styles from "./index.less";

function Main() {
  return (
    <section>
      <TextCarousel
        style={{ backgroundColor: "#e7e1e1", height: "50px" }}
        contentStyle={{ marginLeft: 10 }}
        keyField="name"
        source={[
          { name: "aa", id: "1", text: "第一个" },
          { name: "bb", id: "12", text: "第2个" },
          { name: "cc", id: "3", text: "第3个" },
          { name: "dd", id: "4", text: "第4个" },
          { name: "ee", id: "5", text: "第5个" },
        ]}
        duration={2}
        icon={
          <img
            src="http://img.wangpengpeng.site/help.svg"
            alt=""
            style={{
              width: "18px",
              height: "16px",
              display: "inline-block",
              marginLeft: 21,
              marginRight: "7px",
            }}
          />
        }
        onClick={(item) => {
          alert(item.text);
        }}
      />
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
