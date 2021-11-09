import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '850px',
      height: '300px',
      justifyContent: 'right',
      display:'flex',
      color:'white',
    },

    btn:{
        width: '25px',
        height: '25px',
    }
  };

function Modals() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Popup</button>
            <Modal isOpen={modalIsOpen} onRequestClose={()=>{setIsOpen(false)}}
              style={customStyles}>
                <button onClick={() => setIsOpen(false)}  style={customStyles.btn}>&times;</button>
            </Modal>
        </div>
    );
}

export default Modals
