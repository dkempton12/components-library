import PropTypes from "prop-types";
import "./WebsiteHero.scss";

function WebsiteHero({ children, bg_color, text_color }) {
  return (
    <div className={`hero bg-${bg_color}`}>
      <h1 className={`main-heading text-${text_color}`}>Main Heading</h1>
    </div>
  );
}

const themeColors = ["white", "black", "blue", "gray"];

WebsiteHero.propTypes = {
  bg_color: PropTypes.oneOf(themeColors),
  text_color: PropTypes.oneOf(themeColors),
};

WebsiteHero.defaultProps = {
  bg_color: "blue",
  text_color: "white",
};

export default WebsiteHero;
