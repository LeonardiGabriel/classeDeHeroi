class heroi {
constructor (nome, idade, classe)
{
    this.nome = nome;
    this.idade = idade;
    this.classe = classe;
}

atacar()
{
let ataque;
switch (this.classe) 
    {
        case "mago":
            ataque="Usou Magia";        
            break;
        case "guerreiro":
            ataque="Usou Espada";        
            break;
        case "monge":
            ataque="Usou Artes Marciais";        
            break
        case "ninja":
            ataque="Usou Shuriken";        
            break;
        default:
            ataque = "Usou um ataque indefinido";
            break;
    }
    console.log(`O ${this.classe} atacou usando ${ataque}`);

}
}
let heroi1 = new heroi ("Garen", 25, "guerreiro");
let heroi2 = new heroi ("Ryze", 100, "mago");
let heroi3 = new heroi ("Lee sin", 23, "monge");
let heroi4 = new heroi ("zed", 20, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();