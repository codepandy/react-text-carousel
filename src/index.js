import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.less";

const keyframesName = "text-carousel-keyframesName-key-asdf8324-df324s";

export default class TextCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { source, style } = this.props;
    if (source && Array.isArray(source) && source.length > 0) {
      const intervalCount = source.length - 1;
      const interval = 100 / intervalCount;
      const keyframesItem = [];
      const height = parseInt(style.height) || 36;
      for (let i = 1; i <= intervalCount; i += 1) {
        let position = (interval * i).toFixed(2);
        if (position >= 100) {
          position = 100;
        }
        keyframesItem.push(`${position}% {
            left:0;
            top:-${i * height}px;
          }
        `);
      }
      const styleSheet = document.styleSheets[0];

      styleSheet.rules[styleSheet.rules.length - 1].name;
      const keyframesStr = `${keyframesName} {0% {
          left: 0px;
          top: 0px;
        }
        ${keyframesItem.join("")}
      }`.replace(/\s+/g, "");
      const keyframes = `@keyframes ${keyframesStr}`;
      const keyframes_webdit = `@-webkit-keyframes ${keyframesStr}`; /* Safari 和 Chrome */

      styleSheet.insertRule(keyframes, styleSheet.rules.length);
      styleSheet.insertRule(keyframes_webdit, styleSheet.rules.length);
    }
  }

  onClickItem = () => {};

  render() {
    const {
      className,
      style,
      source,
      duration,
      icon,
      onClick,
      keyField = "id",
      textField = "text",
    } = this.props;
    const animationDuration = `${source.length * duration}s`;

    return (
      <div className={`${styles.textCarouselContainer} ${className || ""}`} style={{ ...style }}>
        <section
          className={styles.itemContainer}
          style={{ animationDuration: animationDuration, animationName: keyframesName }}
        >
          {source.map((item) => (
            <div
              key={item[keyField]}
              className={styles.item}
              style={style.height ? { height: style.height, lineHeight: style.height } : null}
              onClick={() => {
                onClick(item);
              }}
            >
              {icon}
              <span className={styles.text}>{item[textField]}</span>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

TextCarousel.propTypes = {
  className: PropTypes.any,
  style: PropTypes.object,
  source: PropTypes.array,
  duration: PropTypes.number,
};

TextCarousel.defaultProps = {
  source: [],
  duration: 2,
  style: {},
  icon: null,
  onClick: () => {},
};
