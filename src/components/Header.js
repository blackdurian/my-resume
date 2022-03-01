 
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

export const Header = () => {
  return (
    <div class="container">
      <div class="row">
        <h3 className="d-flex justify-content-center">Wei Quan Lo</h3>
      </div>

      <div class="row d-flex justify-content-md-center">
        <div class="col col-md-auto col-sm-12 d-flex">
          <div className="text-secondary pe-4">
            <MdOutlineLocationOn /> Malaysia (Kuala Lumpur)
          </div>
          <div className="vr d-flex" />
        </div>
        <div class="col col-md-auto col-sm-6 d-flex">
          <div>
            <a
              className="text-decoration-none text-secondary pe-4"
              href="https://www.linkedin.com/in/weiquanlo/"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <AiOutlineLinkedin /> linkedin.com/in/weiquanlo
            </a>
          </div>
          <div className="vr d-flex" />
        </div>
        <div class="col col-md-auto col-sm-6 d-flex">
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
        </div>
      </div>

      <div class="row d-flex justify-content-md-center">
        <div class="col col-md-auto col-sm-6  d-flex">
          <div>
            <a
              className="text-decoration-none text-secondary pe-4"
              href="mailto:loweiquan@gmail.com"
              title="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail /> loweiquan@gmail.com
            </a>
          </div>
          <div className="vr d-flex" />
        </div>
        <div class="col col-md-auto col-sm-6 d-flex">
          <div>
            <a
              className="text-decoration-none text-secondary pe-4"
              href="https://github.com/blackdurian/my-resume/raw/main/cv.pdf"
              title="Curriculum Vitae"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineFilePdf /> CurriculumVitae.pdf
            </a>
          </div>
          <div className="vr d-flex" />
        </div>
        <div class="col col-md-auto col-sm-6 d-flex">
          <div>
            <a
              className="text-decoration-none text-secondary "
              href="https://github.com/blackdurian"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub /> github.com/blackdurian
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
