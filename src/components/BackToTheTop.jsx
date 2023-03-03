import React, {useEffect} from "react";

export const BackToTopButton = () => {
  var upTab = false;
  //////back to top tab animation////////////////
useEffect (() => {
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 600 && upTab === false) {
      document
        .querySelector(".back-to-top-btn")
        .classList.add("back-to-top-btn-show");
      upTab = true;
    }
  })
}, []);

  useEffect(() => {
    document.addEventListener("scroll", () => {
    if (window.pageYOffset < 350 && upTab === true) {
      document.querySelector(".back-to-top-btn")
        .classList.remove("back-to-top-btn-show");
      upTab = false;
    }
  })
}, []);
  //////////////////////////////////////////////////////
  return (
   
      <div onClick={() => window.scroll(0, 0)} className="back-to-top-btn">
        <i className="fas fa-chevron-up"></i>
        <p>Top</p>
      </div>
   
  );
}