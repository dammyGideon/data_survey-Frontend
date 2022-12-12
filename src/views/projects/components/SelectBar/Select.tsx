import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import './Select.css';

type SelectProps = {
  category: string;
  options: string[];
};

function SelectComponent({ category, options }: SelectProps) {
  return (
    <Accordion>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>{category}</Accordion.Header>
        <Accordion.Body>
          {options.map((option) => {
            return <p>{option}</p>;
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SelectComponent;
