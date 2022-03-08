import React from "react";

export default function Alert(props) {
  return (
    <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong> : {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-dismiss="alert"
          aria-label="Close"
        >
        </button>
    </div>
        }
     </div>
      
  );
}
