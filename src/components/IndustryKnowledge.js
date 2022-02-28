import { ListGroup } from "react-bootstrap";
const { Item } = ListGroup;

export const IndustryKnowledge = () => {
  return (
    <div className="mt-4">
      <h5>Industry Knowledge</h5>
      <div className="mt-2">
        <ListGroup variant="flush">
          <Item>Scrum</Item>
          <Item>Deployment</Item>
          <Item>Database Administration</Item>
          <Item>Software Development Life Cycle (SDLC)</Item>
          <Item>Functional Programming</Item>
        </ListGroup>
      </div>
    </div>
  );
};