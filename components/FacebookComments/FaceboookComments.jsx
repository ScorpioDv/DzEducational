import React, { useEffect, useState } from "react";

function FacebookComments({ url }) {
  const [appId, setAppId] = useState("913699179633535"); // replace {your-app-id} with your actual Facebook App ID
  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: appId,
        xfbml: true,
        version: "v8.0"
      });
      FB.AppEvents.logPageView();
      
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return(
    <>
      <div className="fb-comments" data-href={"https://www.dzexams.com/ar/sujets/YmtzZktXNmF5YnE3b1dGOVRYUHB3QT09"} data-numposts="5" data-width="600"></div>
  <h1>hi</h1>
  </>
  )

}

export default FacebookComments;
