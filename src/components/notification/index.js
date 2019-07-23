import { toast } from "react-toastify";
// import { connect } from "react-redux";

const notify = (status, error) => {
  if (status) {
    toast.success("Usuário adicionado com sucesso", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000
    });
  } else {
    if (error.includes("Erro")) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    } else {
      toast.warn(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000
      });
    }
  }
};

export default notify;
