import Image from "react-bootstrap/Image";

export const Company = ({name, website,icon,jobTitle, jobLevel, periodStr, description}) => {
  return (
    <div className="mt-3">
      <div className="d-flex">
        <div className="flex-shrink-0">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width="60"
              height="60"
              src={icon}
              roundedCircle
              thumbnail
            />
          </a>
        </div>
        <div className="flex-grow-1 ms-3">
          <h6>{jobTitle}</h6>
          <div>{name} · {jobLevel}</div>
          <div className="text-secondary"  style={{ fontSize : '14px',}}>{periodStr}</div>
          <div style={{whiteSpace: 'pre-wrap',}}>{description}
          </div>
        </div>
      </div>
    </div>
  );
};
