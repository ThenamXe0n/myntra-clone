import React, { useState } from "react";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("CSS");
  const buttonsName = props.buttonNames;
  const [showAlert, setShowAlert] = useState(false);
  const handleActiveTab = (e) => {
    setActiveTab(e);
    setTimeout(() => {
      return setShowAlert(true);
    }, 5000);
  };
  return (
    <div>
      <div
        className={
          !showAlert
            ? `hidden`
            : `w-52 h-44 flex flex-col justify-around items-center border m-auto`
        }
      >
        <h1 className="text-3xl text-center">This is a Alert</h1>
        <div
          className=" bg-orange-500 py-2 px-5 rounded-xl text-white font-semibold text-center w-fit"
          onDoubleClick={() => {
            setShowAlert(false);
          }}
        >
          close alert
        </div>
      </div>
      <div>
        <div>
          <div className="flex">
            {buttonsName.map((button) => (
              <button
                onClick={(e) => {
                  handleActiveTab(e.target.innerText);
                }}
              >
                {button}
              </button>
            ))}
          </div>
          <div>
            {activeTab === "HTML" ? (
              <p>
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser.
              </p>
            ) : null}
            {activeTab === "CSS" ? (
              <p>
                Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML.
              </p>
            ) : null}
            {activeTab === "JavaScript" ? (
              <p>
                JavaScript, often abbreviated as JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Tabs;
