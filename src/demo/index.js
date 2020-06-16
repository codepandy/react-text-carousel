import React from "react";
import ReactDOM from "react-dom";
import TextCarousel from "../index";
import styles from "./index.less";

function Main() {
  return (
    <section>
      <TextCarousel
        style={{ backgroundColor: "#e7e1e1", height: "50px" }}
        source={[
          { id: "1", text: "第一个" },
          { id: "12", text: "第2个" },
          { id: "3", text: "第3个" },
          { id: "4", text: "第4个" },
          { id: "5", text: "第5个" },
        ]}
        duration={2}
        icon={
          <img
            src="http://img.wangpengpeng.site/help.svg"
            alt=""
            style={{ width: "18px", height: "16px", display: "inline-block", marginRight: "7px" }}
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
