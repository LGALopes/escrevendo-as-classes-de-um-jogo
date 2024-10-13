class Personagem{
    private nome: string;
    private idade: number;
    private tipo: string;

    constructor(nome: string, idade: number, tipo: string){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    public atacar(){
        let ataque: string;

        if(this.tipo === "guerreiro"){
            ataque = "espada";
        }
        else if(this.tipo === "mago"){
            ataque = "magia";
        }
        else if(this.tipo === "monge"){
            ataque = "artes marciais";
        }
        else{
            ataque = "shuriken";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`); 
    }
}

const heroi = new Personagem("Bill Gates", 68, "mago");
heroi.atacar();

const vilao = new Personagem("Steve Jobs", 56, "guerreiro");
vilao.atacar();