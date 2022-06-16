import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';

const infoCard = {
  name: 'Hambúrguer simples',
  price: 11,
  flavor: 'carne',
  complement: 'queijo',
  image: 'https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png',
};

describe('<Card />', () => {
  it('should render the Card component correctly', () => {
    const click = jest.fn();

    render(
    <Card
      name={infoCard.name}
      price={infoCard.price}
      flavor={infoCard.flavor}
      complement={infoCard.complement}
      image={infoCard.image}
      onClick={click}
    />
    )

    const name = screen.getByText(infoCard.name)
    expect(name).toBeInTheDocument()
    const price = screen.getByText('Preço: R$11')
    expect(price).toBeInTheDocument()
    const flavor = screen.getByText('Sabor: carne')
    expect(flavor).toBeInTheDocument()
    const complement = screen.getByText('Adicional: queijo')
    expect(complement).toBeInTheDocument()
    const image = screen.getByAltText('Imagem do produto')
    expect(image).toBeInTheDocument()

    const button = (screen.getByText('Adicionar'))
    userEvent.click(button)
    expect(click).toHaveBeenCalledTimes(1)
  });
});
