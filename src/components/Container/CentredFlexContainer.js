import "./CentredFlexContainer.css";

const FlexContainer = ({ children, flexDirection = "column" }) => {
  return (
    <div className="centeredFlexContainer" style={{ flexDirection }}>
      {children}
    </div>
  );
};

export default FlexContainer;
