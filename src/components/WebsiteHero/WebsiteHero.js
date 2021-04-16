import "./WebsiteHero.scss";

function WebsiteHero({ children, bg_color, text_color }) {
  return (
    <div className={`hero bg-${bg_color}`}>
      <h1 className={`main-heading text-${text_color}`}>Main Heading</h1>
    </div>
  );
}

const themeColors = ["white", "black", "blue", "gray"];

export default WebsiteHero;
