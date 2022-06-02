import React from "react";

class Header extends React.Component {
    style1 = {
  padding: '5px',
        // border: 'none',
        // border:'1px',
        borderRadius : '5px',
        margin: '12px',
 }; 
 style2 = {
  
        position: 'fixed',
        bottom:  '200px',
        right: '40%',
        width: '250px',
        height: '300px', 
        background: 'rgb(255, 255, 255)',
        border: '1px solid #333',
        padding: '12px',
        textAlign: 'center',
        borderRadius : '5px',
        boxShadow: '0 0 10px rgba(0,0,0,1.00)'
 };  
 style3 = {
  justifyContent: 'center',
  };  
   
  render() {
    return (
        <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        
  <form  style={this.style3}>
   <div style={this.style2}>
            <h1>CGU login</h1>
            <label >
                帳號
                <input type="text" name="name" style={this.style1} />
            </label>
                <div>
                <label>
                    密碼
                </label>
                <input type="password"  style={this.style1} />
                </div>
                <div>
            <input type="submit" value="登入" />
            
                </div>
   </div>
  </form>
        </div>
    );
  }
}

export default Header;