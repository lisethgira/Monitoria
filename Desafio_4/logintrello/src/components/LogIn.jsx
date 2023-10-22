import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Trello from "./assets/Trello.png";
import caution from "./assets/caution.png";
import google from "./assets/google.png";
import apple from "./assets/apple.png";
import microsoft from "./assets/microsoft.png";
import slack from "./assets/slack.png";
import trelloleft from "./assets/trelloleft.png";
import trelloright from "./assets/trelloright.png";
import atlassian from "./assets/atlassian.png";

export const LogIn = () => {
  return (
    <>
    <Form className="container p-5 custom-form">
      <div className="d-flex justify-content-center">
        <img className="trello-img" src={Trello} alt="" />
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <h3 className="text-title">Iniciar sesión para continuar</h3>
        <div className="alert">
          <div className="alert-img">
            <img src={caution} alt="" />
          </div>
          <p>
            El token de la sesión no es válido. <br />
            Vuelve a iniciar sesión para continuar.
          </p>
        </div>
        <Form.Control type="email" placeholder="Luisa Carolina Toro Moreno" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" size="lg">
          Continuar
        </Button>
        <h3 className="alternative-text">O BIEN</h3>
        <div className="d-grid gap-2">
          <Button className="btn-custom" type="submit" size="lg">
            <div>
              <img src={google} alt="" />
              <span>Continuar con Google</span>
            </div>
          </Button>
          <Button className="btn-custom" type="submit" size="lg">
            <div>
              <img src={microsoft} alt="" />
              <span>Continuar con Microsoft</span>
            </div>
          </Button>
          <Button className="btn-custom" type="submit" size="lg">
            <div>
              <img src={apple} alt="" />
              <span>Continuar con Apple</span>
            </div>
          </Button>
          <Button className="btn-custom" type="submit" size="lg">
            <div>
              <img src={slack} alt="" />
              <span>Continuar con Stack</span>
            </div>
          </Button>
        </div>
      </div>
      <div className="text-account">
        <span>¿No puedes iniciar sesión?</span>
        <span>*</span>
        <span>Crea una cuenta</span>
      </div>
      <hr />
      <div className="atlasian">
        <img src={atlassian} alt="" />
      </div>
      <h5 className="subtitle">Una cuenta para Trello, Jira, Confluence y <span>más</span></h5>
      <h5 className="subtitle-abajo">Politica de calidad  *   Aviso de usuraio</h5>
    </Form>
    <div className="right">
        <img src={trelloright} alt="" />
    </div>
    <div className="left">
        <img src={trelloleft} alt="" />
    </div>
    </>
  );
};
