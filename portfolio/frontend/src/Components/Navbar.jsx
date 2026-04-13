import React from 'react'

const Navbar = () => {
  return (
    <div style={{
  position: 'absolute',
  width: '100%',
  top:130,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
 
  zIndex: 20
}}>
  <div style={{
  width: '300',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  gap: '20px'}}>


         <button style={{color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '14px',background: 'transparent',border: '1px solid #00ffcc', paddingLeft: '10px', paddingRight: '10px',paddingTop:'5px', paddingBottom:'5px',cursor:'pointer'}}>About</button>


  <button style={{color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '14px',background: 'transparent',border: '1px solid #00ffcc', paddingLeft: '10px', paddingRight: '10px',paddingTop:'5px', paddingBottom:'5px',cursor:'pointer'}}>Skills</button>


  <button style={{color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '14px',background: 'transparent',border: '1px solid #00ffcc', paddingLeft: '10px', paddingRight: '10px',paddingTop:'5px', paddingBottom:'5px',cursor:'pointer'}}>Projects</button>


  <button style={{color: '#00ffcc',
  fontFamily: 'monospace',
  fontSize: '14px',background: 'transparent',border: '1px solid #00ffcc', paddingLeft: '10px', paddingRight: '10px',paddingTop:'5px', paddingBottom:'5px',cursor:'pointer'}}>Contact</button>
    </div>
 
</div>
  )
}

export default Navbar