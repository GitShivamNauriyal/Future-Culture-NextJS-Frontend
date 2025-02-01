{
  /*

  Special Files in app/ Directories

   File Name	            Purpose
-- page.js	              	The main route file (Required)
-- layout.js	            Shared layout for this route and its children
-- loading.js	         	Shows a loading state when the page is fetching data
-- error.js	            	Handles errors specific to this route
-- not-found.js	        	Displays a 404 page for missing routes
-- styles.module.css	    Local CSS for the page
  
*/
}

import React from "react";

const about = () => {
  return (
    <div>
      <h1>about</h1>
      <div>this is about page</div>
      <div>hello about</div>
    </div>
  );
};

export default about;
