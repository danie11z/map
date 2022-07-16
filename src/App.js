import React, {Component} from "react"

export default class mapReact extends Component{
  state = {
    cadastro: [
      {nome: 'Katara', idade: 14, naturalidade: 'Tribo da Água do Sul'},
      {nome: 'Toph', idade: 12, naturalidade: 'Gaoling'},
      {nome: 'Appa', idade: 106, naturalidade: 'Templo do Ar Oriental'},
      {nome: 'Aang', idade: 112, naturalidade: 'Templo do Ar do Sul'},
      {nome: 'Sokka', idade: 15, naturalidade: 'Tribo da Água do Sul'},
      {nome: 'Zuko', idade: 16, naturalidade: 'Nação do Fogo'},
    ]
  };

  render(){
    return(
      <section>
        {this.state.cadastro.map((rastreador) => (
          <div>
            <p>
              {rastreador.nome}, {rastreador.idade}, {rastreador.naturalidade}.
            </p>
          </div>
        ))}
      </section>
    )
  }
}