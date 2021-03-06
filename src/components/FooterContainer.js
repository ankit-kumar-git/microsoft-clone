import "./FooterContainer.css";
function FooterContainer({ head, props }) {
  return (
    <div className="footer-container">
      <h4>{head}</h4>
      {props.map((prop, i) => (
        <p>{prop}</p>
      ))}
    </div>
  );
}

export default FooterContainer;
