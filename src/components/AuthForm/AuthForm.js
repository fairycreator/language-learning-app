import "./auth.css";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOutThunk } from "../../redux/auth/authOperations";
import Modal from "../modal/modal";
import LogInForm from "../form/logInForm";
import RegisterForm from "../form/registerForm";
import ConteinerCenter from "../conteiner/ConteinerCenter";
import ClipLoader from "react-spinners/ClipLoader";

const AuthForm = () => {
  const [isActiveLoginModal, setIsActiveLoginModal] = useState(false);
  const [isActiveRegisterModal, setIsActiveRegisterModal] = useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const login = useSelector((state) => state.auth.login);
  const isAuthLoading = useSelector((state) => state.auth.isAuthLoading);

  const dispatch = useDispatch();

  if (isAuthLoading) {
    return (
      <ConteinerCenter>
        <ClipLoader color={"var(--accent-color)"} size={20} />
      </ConteinerCenter>
    );
  }

  if (!isAuth) {
    return (
      <div className="authBox">
        <button
          className={`logInButton`}
          type="button"
          onClick={() => {
            setIsActiveLoginModal(true);
          }}
        >
          <FiLogIn size="20px" color="#F4C550" />
          Log in
        </button>

        <button
          className={`registrationButton`}
          type="button"
          onClick={() => {
            setIsActiveRegisterModal(true);
          }}
        >
          Registration
        </button>
        <Modal active={isActiveLoginModal} setActive={setIsActiveLoginModal}>
          <LogInForm setIsActiveLoginModal={setIsActiveLoginModal} />
        </Modal>
        <Modal
          active={isActiveRegisterModal}
          setActive={setIsActiveRegisterModal}
        >
          <RegisterForm setIsActiveRegisterModal={setIsActiveRegisterModal} />
        </Modal>
      </div>
    );
  }

  return (
    <div className="authBox">
      <p className="hello">Hello, {login}!</p>
      <button
        className={`logInButton`}
        type="button"
        onClick={() => {
          dispatch(logOutThunk());
        }}
      >
        <FiLogOut size="20px" color="#F4C550" />
        Log out
      </button>
    </div>
  );
};

export default AuthForm;
