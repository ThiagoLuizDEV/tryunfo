import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <labe>
          Nome:
          <input type="text" data-testid="name-input" name="nome" />
        </labe>
        <labe>
          Descrição:
          <input type="textarea" data-testid="description-input" name="descrição" />
        </labe>
        <labe>
          atributo01:
          <input type="number" data-testid="attr1-input" name="atributo01" />
        </labe>
        <labe>
          atributo02:
          <input type="number" data-testid="attr2-input" name="atributo02" />
        </labe>
        <labe>
          atributo03:
          <input type="number" data-testid="attr3-input" name="atributo03" />
        </labe>
        <labe>
          imagem:
          <input type="text" data-testid="image-input" name="imagem" />
        </labe>
        <labe>
          Raridade:
          <select name="Raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </labe>
        <labe>
          Super Trunfo:
          <input type="checkbox" data-testid="trunfo-input" name="Super Trunfo" />
        </labe>
        <labe>
          <button data-testid="save-button" type="button">Salvar</button>
        </labe>
      </form>
    );
  }
}

export default Form;
