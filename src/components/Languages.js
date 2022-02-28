import { Badge } from "react-bootstrap";

export const Languages = () => {
  return (
    <div className="mt-4">
      <h5>Languages</h5>
      <div className="mt-2">
        <h6>
          Mandarin <Badge pill  bg="secondary">Native</Badge> ,  English <Badge pill  bg="secondary">Proficient</Badge> ,  Bahasa Malay <Badge pill  bg="secondary">Basic</Badge>
        </h6> 
      </div>
    </div>
  );
};
