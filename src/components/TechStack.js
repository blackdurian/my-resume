import { ProgressBar } from "react-bootstrap";

export const TechStack = () => {
  return (
    <>
      <h5>Stack</h5>
      <div>
        <figure>
          <p className="fw-bold">Java</p>
          <figcaption class="blockquote-footer lh-sm">
            Hibernate ,Spring Boot, Spring MVC, Spark Java, Vert.x, Jakarta EE,
            Jackson and etc.
            <div>
              <ProgressBar variant="warning" now={90} />
            </div>
          </figcaption>
        </figure>
        <figure>
          <p className="fw-bold">Database</p>
          <figcaption class="blockquote-footer lh-sm">
            MySql, Sql Server, Oracle Sql and etc
            <div>
              <ProgressBar variant="warning" now={80} />
            </div>
          </figcaption>
        </figure>
        <figure>
          <p className="fw-bold">JavaScript</p>
          <figcaption class="blockquote-footer lh-sm">
            React, Jquery, Ajax, Svelte and etc.
            <div>
              <ProgressBar variant="warning" now={80} />
            </div>
          </figcaption>
        </figure>
        <figure>
          <p className="fw-bold">HTML</p>
          <figcaption className="lh-1">
            <div className="lh-1">
              <ProgressBar variant="warning" now={60} />
            </div>
          </figcaption>
        </figure>
        <figure>
          <p className="fw-bold">CSS</p>
          <figcaption className="blockquote-footer lh-sm">
            CSS3, Boostrap, Material design
            <div>
              <ProgressBar variant="warning" now={60} />
            </div>
          </figcaption>
        </figure>
        <figure>
          <p class="fw-bold">Others</p>
          <figcaption class="blockquote-footer lh-sm">
            C#, Asp.net, C++, Python, Php and etc.
            <div>
              <ProgressBar variant="warning" now={50} />
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
};
