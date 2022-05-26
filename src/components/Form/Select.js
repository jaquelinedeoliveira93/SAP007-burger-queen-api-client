import './Input.css';

const Select = () => {
  return (
    <section>
      <select name='workplace' id='workplace' className='selectWorkplace'>
        <option value=''>Área de trabalho</option>
        <option value='diningHall'>Salão</option>
        <option value='kitchen'>Cozinha</option>
      </select>
    </section>
  );
};

export default Select;