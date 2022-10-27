import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      salvarCartao: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;
      const pontosmax = 210;
      const atributomax = 90;
      const total = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

      const atributo1 = (cardAttr1 <= atributomax
      && cardAttr1 >= 0);
      const atributo2 = (cardAttr2 <= atributomax
      && cardAttr2 >= 0);
      const atributo3 = (cardAttr3 <= atributomax
      && cardAttr3 >= 0);
      const ChecandoTudo = atributo1 && atributo2 && atributo3;

      const checarTexto = cardName && cardDescription && cardImage && cardRare;
      const checarAtributo = (total <= pontosmax);

      this.setState({ isSaveButtonDisabled: !(ChecandoTudo && checarAtributo
        && checarTexto) });
    });
  }

  click = () => {
    this.setState({ hasTrunfo: true });
  };

  onSaveButtonClick = () => {
    const { cardTrunfo,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      isSaveButtonDisabled,
    } = this.state;
    if (cardTrunfo) this.click();

    this.setState((prevState) => ({
      salvarCartao: [...prevState.salvarCartao, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        isSaveButtonDisabled,
      }],
    }));
    this.setState(() => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      salvarCartao,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {salvarCartao.map((cartao) => (
            <Card
              key={ cartao.cardName }
              cardName={ cartao.cardName }
              cardDescription={ cartao.cardDescription }
              cardAttr1={ cartao.cardAttr1 }
              cardAttr2={ cartao.cardAttr2 }
              cardAttr3={ cartao.cardAttr3 }
              cardImage={ cartao.cardImage }
              cardRare={ cartao.cardRare }
              cardTrunfo={ cartao.cardTrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
