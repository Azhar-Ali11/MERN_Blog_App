import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/premium-photo/woman-relax-connecting-website-concept_53876-50272.jpg"
        alt=""
      />
    </div>
  );
}
