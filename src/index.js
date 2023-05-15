import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoJosue = new Mago('Josué', 4, 'fogo', 4, 3)
const magaTaina = new Mago('Taina', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoDener = new ArqueiroMago('Dener', 7, 10, 'ar', 4, 8)
const guerreiroLucas = new Guerreiro('Lucas', 8)

//arqueiroBruno.#level = 15

const personagens = [magoJosue, magaTaina, arqueiroBruno, arqueiroMagoDener, guerreiroLucas]

new PersonagemView(personagens).render()


