import React from "react"

const seasonConfig= {
   summer: {
      text: " it's hot",
      iconName: "sun"
   },
   winter: { 
      text: " it's chilly",
      iconName: "snowflake"
   }
}

const getSeason= (lat,month) => {
   if (month> 2 && month< 9){
      return lat>0 ? "winter": "summer";  
   }
   else { return lat>0 ? "summer": "winter";

   }
};
const SeasonDisplay = props => {
   
       const season = getSeason(props.lat, new Date().getMonth());

   const {text, iconName}= seasonConfig[season]

   return (
    <div> 
       <i className= {` black icon-left massive${iconName}icon`}/>
       <h1>{text}</h1>
       <i className= {`black icon-right massive${iconName}icon`}/>
    </div>
   );
};

export default SeasonDisplay;