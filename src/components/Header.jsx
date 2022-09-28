import React from "react";

const Header = (props) => {
  const { app, background } = props;
  console.log("header-rendered");
  return (
    <div className="p-5 bg-red-500 text-white text-3xl font-bold">
      Header Team of Akam Super Platform | {app.name}
    </div>
  );
};

export default Header;
