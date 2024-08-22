import Card from "../Card";
import { Container } from "./styles";

function Products() {
  const productList = [
    {
    id: 1,
    title: "abajur alien isolation",
    image: "/abajuralien.jpg",
    description: "um abajur pra te ajudar no seu medo do escuro"
    
    },
    {
    id: 2,
    title: "abajur pikachu",
    description: "nada melhor que seu melhor amigo lhe mantendo companhia durante a noite.",
    image: "/abajurpikachu.jpg"
    },
    {
    id: 3,
    title: "broche harry potter",
    description: "mostre pra todos qual casa você pertnce.",
    image: "/brocheharrypotter.jpg"
    },
    {
    id: 4,
    title: "chaveiro read dead",
    description: "esteja preparado, nunca se sabe onde precisará de uma arma de 5 centímetros",
    image: "/chaveiro_reddead.jpg"
    },
    {
    
    id: 5,
    title: "colar berserker",
    description: "este simbolo te lembra de algo?.",
    image: "/colarberserk.jpg"
    },
    {
    id: 6,
    title: "controle modular",
    description: "um controle que te adapta a você, não você se adapta a ele",
    image: "/controlefoda.jpg"
    },
    {
    id: 7,
    title: "action figure de darksouls",
    description: "REZE PARA O SOL",
    image: "/daksouls.jpg"
    },
    {
    id: 8,
    title: "chaveiro funko deadpool",
    description: "I know that I can't take no more It ain't no lie I want to see you out that door Baby bye bye bye.",
    image: "/eadpoolchaveiro.jpg"
    },
    {
    id: 9,
    title: "fone reddragon",
    description: "ouça todos os sons imperceptíveis das partidas com este novo fone da red dragon",
    image: "/fonereddragon.jpg"
    
    },
    {
    id: 10,
    title: "gabinete gamer",
    description: "com grandes LEDs, vem grandes FPSs",
    image: "/gabinete.jpeg"
    },
    {
    id: 11,
    title: "action figure do goku",
    description: "**insira coração resplandecente**.",
    image: "/gokuaction.jpg"
    },
    {
    id: 12,
    title: "figures de jujutsu",
    description: "tenha a turma inteira",
    image: "/jjkfigurines.jpg"
    },
    {
    id: 13,
    title: "Figure Malenia",
    description: "você também pote ter a lâmina de mikela em suas mãos",
    image: "/malenia.jpg"
    },
    {
    id: 14,
    title: "mouse pequeno",
    description: "adaptando-se a mãos de jogadores pequenos desde 1999",
    image: "/minimouse.jpeg"
    },
    {
    id: 15,
    title: "mouse reddragon",
    description: "este definitivamente cobre a outra parcela de jogadores que o primeiro não conseguia",
    image: "/mouse_reddragon.jpg"
    },
    {
    id: 16,
    title: "mousepad de dragão",
    description: "da china até você com frete gratis",
    image: "mousepad.jpg"
    },
    {
    id: 17,
    title: "mousepad de sakura",
    description: "... me parece um pouco roxo",
    image: "/mousepad2.jpg"
    },
    {
    id: 18,
    title: "pendrive",
    description: "este pendrive da kingston de 128G supre todas as suas necessidades",
    image: "/pendrikekingston128gigas.jpeg"
    },
    {
    
    id: 19,
    title: "teclado mecânico",
    description: "teclado mecânico em tons de cinza e laranja, perfeito para jogar a noite",
    image: "/teclado.jpg"
    },
    {
    id: 20,
    title: "vault boy figure",
    description: "ótima pra te lembrar que a guerra, guerra nunca muda",
    image: "/vaultboy.jpg"
    }
    ]

  return (
    <>
      <Container>
        {productList.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
}

export default Products;
