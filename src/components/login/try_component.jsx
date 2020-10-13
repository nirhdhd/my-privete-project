import React, { useState,useEffect } from "react";
import { connect } from "react-redux";


function Try({cureentUser}){

    useEffect(() => {

        
      });

return(
     <div>{cureentUser}</div>  
)
};

// const mapStateToProps = (state) =>({
//   foo:state.user.currentUser
// });

const mapStateToProps=(state)=> ({
      cureentUser:state.user.currentUser,
    
  });

export default connect(mapStateToProps)(Try);