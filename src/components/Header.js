import { Stack, Container } from "react-bootstrap";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export const Header = () => {
  return (
    <Container>
      <h3 className="d-flex justify-content-center">Wei Quan Lo</h3>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-center "
        gap={3}
      >
        <div className="text-secondary">
          <MdOutlineLocationOn /> Malaysia (Kuala Lumpur)
        </div>
        <div className="vr" />
        <div>
          <a
            className="text-decoration-none text-secondary"
            href="https://www.linkedin.com/in/weiquanlo/"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin /> linkedin.com/in/weiquanlo
          </a>
        </div>
        <div className="vr" />
        <div>
          <a
            className="text-decoration-none text-secondary"
            href="https://wa.me/60127752663"
            title="Whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp /> +6012-7752663
          </a>
        </div>
      </Stack>
      <Stack
        direction="horizontal"
        className="d-flex justify-content-center "
        gap={3}
      >
        <div>
          <a
            className="text-decoration-none text-secondary"
            href="mailto:loweiquan@gmail.com"
            title="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail /> loweiquan@gmail.com
          </a>
        </div>
        <div className="vr" />
        <div>
          <a
            className="text-decoration-none text-secondary"
            href="https://github.com/blackdurian"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub /> github.com/blackdurian
          </a>
        </div>
      </Stack>
      <hr />
    </Container>
  );
};
