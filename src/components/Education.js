import Image from "react-bootstrap/Image";
import { BASE_URL } from "../constant";

export const Education = () => {
  return (
    <div className="mt-4">
      <h5>Education</h5>
      <div class="d-flex mt-3">
        <div class="flex-shrink-0">
          <a
            href="https://www.apu.edu.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width="60"
              height="60"
              src={`${BASE_URL}/company-icon/apu.jpg`}
              roundedCircle
              thumbnail
            />
          </a>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6>Degree BSc (Hons) in Software Engineering </h6>
          <div className="lh-sm ">
            Asia Pacific University of Technology & Innovation
            <div className="text-secondary" style={{ fontSize: "14px" }}>
              2020-2022
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-3">
        <div class="flex-shrink-0">
          <a
            href="https://www.apu.edu.my/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width="60"
              height="60"
              src={`${BASE_URL}/company-icon/apu.jpg`}
              roundedCircle
              thumbnail
            />
          </a>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6>Diploma in Information Technology </h6>
          <div className="lh-sm ">
            Asia Pacific University of Technology & Innovation
            <div className="text-secondary" style={{ fontSize: "14px" }}>
              2017-2019
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
