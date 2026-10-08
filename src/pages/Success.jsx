import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-header">
        <img
          src="/assets/iteration-1/logo.svg"
          alt="Ana sayfaya dön"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="success-content">
        <h1>Tebrikler!</h1>
        <h1>Siparişiniz Alındı!</h1>
      </div>
    </div>
  );
}

export default Success;