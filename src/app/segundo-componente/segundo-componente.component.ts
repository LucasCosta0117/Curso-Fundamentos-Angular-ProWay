import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Lucas";
  dataNascimento = "1995-01-17";
  urlImagem = "/assets/Lucas.jpg"

  mostrarDataNascimento(){
    alert(`A data de nascimento de ${this.nome} é ${this.dataNascimento}`);
  }
}
