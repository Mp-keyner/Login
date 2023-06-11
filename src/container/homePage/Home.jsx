import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../components/UserContext';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Navbar from '../../components/Navbar';
import './Homepage.css';
import casco from '../../assets/casco.png';
import Modal from '../../components/Modal';

const Home = () => {
    const { username } = useContext(UserContext);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setModalVisible(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    const handleModalClose = () => {
        setModalVisible(false);
    };

    const token = localStorage.getItem('session');
    const decodedToken = token ? jwtDecode(token) : null;

    return (
        <div>
            <Navbar />
            <div className='containerCart'>
                <div className='imageContainer'>
                    <img src={casco} alt="casco" className='casco' />
                </div>
                <div className='contentContainer'>
                    {token ? (
                        <h1>Bienvenido, {decodedToken?.username}</h1>
                    ) : (
                        <h1>Bienvenido a la página de inicio</h1>
                    )}
                    <p>Esta es la página de inicio.</p>
                    {/* <Link to="/"></Link> */}
                </div>
            </div>
            {modalVisible && <Modal onClose={handleModalClose} />}
        </div>
    );
}

export default Home;


// import React, { useContext, useEffect, useState } from 'react';
// import { UserContext } from '../../components/UserContext';
// import { Link } from 'react-router-dom';
// import jwtDecode from 'jwt-decode'; // Importa la librería jwt-decode
// import Navbar from '../../components/Navbar'
// import './Homepage.css'
// import casco from '../../assets/casco.png'
// import Modal from '../../components/Modal';

// const Home = () => {
//     const { username } = useContext(UserContext);
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setModalVisible(true);
//         }, 2000);

//         return () => clearTimeout(timeout);
//     }, []);

//     const handleModalClose = () => {
//         setModalVisible(false);
//     };

//     const token = localStorage.getItem('session');
//     const decodedToken = token ? jwtDecode(token) : null; // Decodifica el token si existe

//     return (

//         <div>
//             <Navbar />
//             <div className='containerCart'>
//                 <div className='izquierda'>
//                     <img src={casco} alt="casco" className='casco' />
//                 </div>
//                 <div className='derecha'>
//                     {token ? (
//                         <h1>Bienvenido, {decodedToken?.username}</h1>
//                     ) : (
//                         <h1>Bienvenido a la página de inicio</h1>
//                     )}
//                     <p>Esta es la página de inicio.</p>
//                     {/* <Link to="/"></Link> */}
//                 </div>
//             </div>
//             {modalVisible && (
//                 <Modal onClose={handleModalClose} />
//             )}
//         </div>
//     );
// }

// export default Home;
