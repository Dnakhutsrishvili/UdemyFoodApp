import classes from "./Modal.module.css";
import ReactDom from "react-dom";
const Backdrop = (props) => {
  return <div onClick={props.onclose} className={classes.backdrop} />;
};
const ModalOverley = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onclose={props.onclose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverley>{props.children}</ModalOverley>,
        portalElement
      )}
    </>
  );
};
export default Modal;
