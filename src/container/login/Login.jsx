import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Facebook from '../../assets/facebook.svg';
import Github from '../../assets/github.svg';
import Instagram from '../../assets/instagram.svg';
import logoKo from '../../assets/logo.png';
import './index.css';

const Login = () => {
  const [token, setToken] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const inicio = localStorage.getItem('session');
    if (inicio) {
      setToken(inicio);
      setIsLogin(true);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName, password: password })
    };

    fetch('https://backend-login-puce.vercel.app/', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          setIsLogin(true);
          setToken(data.token);
          localStorage.setItem('session', data.token);
          navigate('/home'); // Redirige a la ruta '/home'
        }
      })
      .catch(error => setIsLogin(false));
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    setIsLogin(false);
    setToken('');
  };

  return (
    <div className='fondo'>
      <div className='conta'>
        <div className='box-form'>
          <div className="left" id='left'>
            <div className="overlay">
              <div>
                <h1>Un nuevo comienzo </h1>
                <p>Aquí encontrarás un mundo inexplorado y con nosotros encontrarás las herramientas para sobrevivir y seguir evolucionando</p>
              </div>
              <span className="containerRedes">
                <p>iniciar sesión con las redes sociales</p>
                <div className="containerRed">
                  <a className='Faceboook' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Facebook} alt='Facebook' /></a>
                  <a className='Instagram' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Instagram} alt='Facebook' /></a>
                </div>
                <a className='Github' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Github} alt='Facebook' /></a>
              </span>
            </div>
          </div>

          <div className="right">
            <img src={logoKo} alt="logo de keyner " className='logo' />
            {/* {isLogin ? <h5>{`Hello, ${userName}`}</h5> : 'Inicia sesión'} */}
            <form onSubmit={handleLogin}>
              <div className="inputBox">
                <input value={userName} type="text" placeholder="nombre de usuario..." onChange={(e) => setUserName(e.target.value)} />
                <br />
                <input value={password} type="password" placeholder="contraseña.." onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <div className="remember-me--forget-password">
                <label>
                  <input type="checkbox" name="item" />
                  <span className="text-checkbox">Recuérdame</span>
                </label>
                <p>¿Se te olvidó la contraseña?</p>
              </div>
              <br />
              <button type="submit">Iniciar sesión</button>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useJwt } from 'react-jwt';
// import Facebook from '../../assets/facebook.svg';
// import Github from '../../assets/github.svg';
// import Instagram from '../../assets/instagram.svg';
// import logoKo from '../../assets/logo.png';
// import './index.css';

// const Login = () => {
//   const [token, setToken] = useState('');
//   const [userName, setUserName] = useState('');
//   const [password, setPassword] = useState('');
//   const { decodedToken, isExpired } = useJwt(token);
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const inicio = localStorage.getItem('session');
//     if (inicio) {
//       setToken(inicio);
//       setIsLogin(true);
//     }
//   }, []);

//   const handleLogin = (event) => {
//     event.preventDefault();
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username: userName, password: password })
//     };

//     fetch('https://backend-login-puce.vercel.app/', requestOptions)
//       .then(response => response.json())
//       .then(data => {
//         if (data.token) {
//           setIsLogin(true);
//           setToken(data.token);
//           window.localStorage.setItem('session', data.token);
//           navigate('/home'); // Redirige a la ruta '/home'
//         }
//       })
//       .catch(error => setIsLogin(false));
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('session');
//     setIsLogin(false);
//     setToken('');
//   };

//   return (
//     <div className='fondo'>
//       <div className='conta'>
//         <div className='box-form'>
//           <div className="left" id='left'>
//             <div className="overlay">
//               <div>
//                 <h1>Un nuevo comienzo</h1>
//                 <p>Aquí encontrarás un mundo inexplorado y con nosotros encontrarás las herramientas para sobrevivir y seguir evolucionando</p>
//               </div>
//               <span className="containerRedes">
//                 <p>iniciar sesión con las redes sociales</p>
//                 <div className="containerRed">
//                   <a className='Faceboook' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Facebook} alt='Facebook' /></a>
//                   <a className='Instagram' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Instagram} alt='Facebook' /></a>
//                 </div>
//                 <a className='Github' href="https://mp-keyner.github.io/Portafolio/" target={'_blank'} rel="noreferrer"><img src={Github} alt='Facebook' /></a>
//               </span>
//             </div>
//           </div>

//           <div className="right">
//             <img src={logoKo} alt="logo de keyner " className='logo' />
//             {isLogin ? <h5>{`Hello, ${decodedToken?.username}`}</h5> : null}
//             <form >
//               <div className="inputBox">
//                 <input value={userName} type="text" placeholder="nombre de usuario..." onChange={(e) => setUserName(e.target.value)} />
//                 <br />
//                 <input value={password} type="password" placeholder="contraseña.." onChange={(e) => setPassword(e.target.value)} />
//               </div>
//               <br />
//               <div className="remember-me--forget-password">
//                 <label>
//                   <input type="checkbox" name="item" />
//                   <span className="text-checkbox">Recuérdame</span>
//                 </label>
//                 <p>¿Se te olvidó la contraseña?</p>
//               </div>
//               <br />
//               <Link to='/Home'>
//                 <button type="submit">Iniciar sesión</button>
//               </Link>
//               <button onClick={handleLogout}>Cerrar sesión</button>
//             </form>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;
