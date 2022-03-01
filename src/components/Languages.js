import { Badge } from "react-bootstrap";

export const Languages = () => {
  return (
    <div className="mt-4">
      <h5>Languages</h5>
      <div className="mt-2 d-flex row">
        <h6 className="me-2 col-auto">
          Mandarin
          <Badge className="ms-1" pill bg="secondary">
            Native
          </Badge>
        </h6>
        <h6 className="me-2 col-auto">
          English
          <Badge className="ms-1" pill bg="secondary">
            Proficient
          </Badge>
        </h6>
        <h6 className="me-2 col-auto">
          Bahasa Malay
          <Badge className="ms-1" pill bg="secondary">
            Basic
          </Badge>
        </h6>
      </div>
    </div>
  );
};
