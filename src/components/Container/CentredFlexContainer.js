import "./centeredFlexContainer.css";

const CenteredFlexContainer = ({ children, flexDirection = "column" }) => {
  return (
    <div className="centeredFlexContainer" style={{ flexDirection }}>
      {children}
    </div>
  );
};

export default CenteredFlexContainer;
