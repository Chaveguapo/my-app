import Dropdown from "react-bootstrap/Dropdown";
import ComponentLow from "../ComponentLow";
import ComponentUpp from "../ComponentUpp";

export default function Dropbox(props: any) {
  let items: any[] = [];
  for (let i = 0; i < props.option.length; i++) {
    items.push(
      <Dropdown.Item href="#/action-1">{props.option[i]}</Dropdown.Item>
    );
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Output
      </Dropdown.Toggle>

      <Dropdown.Menu>{items}</Dropdown.Menu>
    </Dropdown>
  );
}
