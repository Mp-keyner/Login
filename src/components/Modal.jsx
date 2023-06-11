import React, { useState, useEffect } from 'react';
import './styles/Modal.css';
import herramientas from '../assets/caja.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ delay, onClose }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const closeModal = () => {
        setShowModal(false);
        onClose();
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`}>
            <div className='modal-content'>
                <h2>Un nuevo comienzo</h2>
                <img src={herramientas} alt="herramientas" />
                <button onClick={closeModal} className='Close'>
                    <FontAwesomeIcon icon={faTimes} className='iconX' />
                </button>
            </div>
        </div>
    );
};

export default Modal;


// import React, { useState, useEffect } from 'react';
// import './styles/Modal.css'

// const Modal = ({ delay, onClose }) => {
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowModal(true);
//         }, delay);

//         return () => clearTimeout(timer);
//     }, [delay]);

//     const closeModal = () => {
//         setShowModal(false);
//         onClose();
//     };

//     return (
//         <div className={`modal ${showModal ? 'show' : ''}`}>
//             <div className="containerModal">
//                 <div className='modal'>
//                     <h2>Modal Content</h2>
//                     <p>This is the modal content.</p>
//                     <button onClick={closeModal}>Close</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
