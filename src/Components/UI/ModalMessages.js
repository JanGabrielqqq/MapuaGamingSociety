import styles from "./ModalMessages.module.scss";

const ModalMessages = (props) => {
  const buttonHandler = () => {
    props.onModalButtonPress();
  };
  return (
    <div className={styles.ModalMessages}>
      <p>
        This website is still under development. some button might not redirect
        to some places. -Q
      </p>
      <button onClick={buttonHandler}>X</button>
    </div>
  );
};

export default ModalMessages;
