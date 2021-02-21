export class Card {
  id: number;
  quote: string;
  emoji?: string;
  imageUrl?: string;

  constructor(card: Card) {
    this.id = card.id;
    this.quote = card.quote;
    this.emoji = card.emoji;
    this.imageUrl = card.imageUrl;
  }
}

const cards: Card[] = [
  { id: 1, quote: 'Abandoná el deseo.' },
  { id: 2, quote: 'Abandoná las instrucciones normales.' },
  { id: 3, quote: 'Aceptá consejos.' },
  { id: 4, quote: 'Agregá.' },
  { id: 5, quote: 'Una línea tiene dos lados.' },
  { id: 6, quote: 'Siempre los primeros pasos.' },
  {
    id: 7,
    quote: 'Pedile a la gente que trabaje en contra de su propia lógica.',
  },
  { id: 8, quote: 'Preguntale a tu cuerpo.' },
  { id: 9, quote: 'Ensuciate.' },

  { id: 10, quote: 'Sé extravagante.' },
  { id: 11, quote: 'Sé menos crítico.' },
  { id: 12, quote: 'Respirá más profundo.' },
  { id: 13, quote: 'Puentes - construir - quemar.' },
  { id: 14, quote: 'Cambiá las ambigüedades por especificidades.' },
  { id: 15, quote: 'No cambies nada y seguí con consistencia.' },
  { id: 16, quote: 'Considerá las transiciones.' },
  { id: 17, quote: 'Cambiá las especificidades por ambigüedades.' },
  { id: 18, quote: 'Cortá una conexión vital.' },
  { id: 19, quote: 'Decorá, decorá.' },
  { id: 20, quote: 'No destruyas nada; destruí lo más importante' },
  { id: 21, quote: 'Descartá un axioma.' },
  { id: 22, quote: 'Autocomplacencia disciplinada.' },
  { id: 23, quote: 'Descubrí tus fórmulas y abandonalas.' },
  { id: 24, quote: 'Mostrá tu talento.' },
  { id: 25, quote: 'Distorsioná el tiempo.' },
  { id: 26, quote: 'No hagas nada durante el mayor tiempo posible.' },
  { id: 27, quote: 'No evites lo fácil' },
  { id: 28, quote: 'No rompas el silencio.' },
  { id: 29, quote: 'No acentúes una cosa más que otra.' },
  { id: 30, quote: 'Hacé algo aburrido.' },
  { id: 31, quote: 'Hacé algo repentino, destructivo e impredecible.' },
  { id: 32, quote: 'Hacé lo último primero.' },
  { id: 33, quote: '¿Hace falta cambiar las palabras?' },
  { id: 34, quote: 'Enfatizá las diferencias.' },
  { id: 35, quote: 'Enfatizá las fallas' },
  { id: 36, quote: 'Frente a una alternativa, hacé ambas.' },
  { id: 37, quote: 'Encontrá una parte segura y usala de ancla.' },
  { id: 38, quote: 'Regalá el juego.' },
  { id: 39, quote: 'Dale curso a tu peor impulso.' },
  { id: 40, quote: 'Salí afuera. Cerrá la puerta.' },
  { id: 41, quote: 'Andate a un extremo, volvé un poco.' },
  { id: 42, quote: '¿Cómo lo haría alguien más?' },
  { id: 43, quote: '¿Cómo lo habrías hecho vos?' },
  {
    id: 44,
    quote:
      'En total oscuridad o en una habitación muy grande, casi en silencio',
  },
  { id: 45, quote: '¿Está terminado?' },
  { id: 46, quote: '¿Falta algo?' },
  { id: 47, quote: '¿Está bien el estilo?' },
  { id: 48, quote: 'Es sólo cuestión de trabajar.' },
  { id: 49, quote: 'Sólo seguí.' },
  { id: 50, quote: 'Escuchá a la voz silenciosa.' },
  { id: 51, quote: 'Fijate en qué orden hacés las cosas.' },
  { id: 52, quote: 'Ampliá los detalles más difíciles.' },
  { id: 53, quote: 'Hacelo más sensual.' },
  { id: 54, quote: 'Hacé que lo perfecto se vuelva más humano.' },
  { id: 55, quote: 'Movete hacia lo menos importante.' },
  {
    id: 56,
    quote: 'No estás construyendo una pared, estás haciendo un ladrillo.',
  },
  { id: 57, quote: 'Una vez que la búsqueda comenzó, algo vas a encontrar.' },
  { id: 58, quote: 'Sólo una parte, no el todo.' },
  { id: 59, quote: 'Sólo un elemento de cada tipo.' },
  { id: 60, quote: 'Oponete abiertamente al cambio.' },
  { id: 61, quote: 'Cuestioná lo heroico.' },
  { id: 62, quote: 'Recordá las tardes tranquilas.' },
  { id: 63, quote: 'La repetición es una forma de cambio.' },
  { id: 64, quote: 'Regresá sobre tus pasos.' },
  { id: 65, quote: 'Reversa.' },
  { id: 66, quote: 'Substracción simple.' },
  { id: 67, quote: 'Preparación lenta, ejecución rápida.' },
  { id: 68, quote: 'Enunciá el problema lo más claramente que puedas.' },
  { id: 69, quote: 'Tomate un descanso.' },
  { id: 70, quote: 'Sacale las partes importantes.' },
  { id: 71, quote: 'El principio de inconsistencia.' },
  { id: 72, quote: 'La cosa más fácilmente olvidable es la más importante.' },
  { id: 73, quote: 'Pensa - dentro de la obra - fuera de la obra.' },
  { id: 74, quote: 'Ordená.' },
  { id: 75, quote: 'Tratá de hacer trampa.' },
  { id: 76, quote: 'Dalo vuelta.' },
  { id: 77, quote: 'Usá una idea vieja.' },
  { id: 78, quote: 'Usá clichés.' },
  { id: 79, quote: 'Usá filtros.' },
  { id: 80, quote: 'Usá algo cercano como modelo.' },
  { id: 81, quote: 'Usá gente "no calificada".' },
  { id: 82, quote: 'Usá tus propias ideas.' },
  { id: 83, quote: 'Expresá tus sospechas.' },
  { id: 84, quote: 'Agua.' },
  { id: 85, quote: '¿En qué contexto se vería bien?' },
  { id: 86, quote: '¿Cuál es la solución más simple?' },
  { id: 87, quote: '¿Qué errores hiciste la última vez?' },
  { id: 88, quote: '¿Incrementar qué? ¿Reducir qué? ¿Mantener qué?' },
  { id: 89, quote: '¿En qué estabas pensando recién realmente?' },
  { id: 90, quote: '¿Qué no harías?' },
  { id: 91, quote: '¿Qué haría tu amigo más cercano?' },
  { id: 92, quote: '¿Para cuándo es?' },
  { id: 93, quote: '¿Dónde está el borde?' },
  { id: 94, quote: '¿Qué partes pueden agruparse?' },
  { id: 95, quote: 'Trabajá a una velocidad diferente.' },
  { id: 96, quote: '¿Alguien lo querría?' },
  { id: 97, quote: 'Tu error fue una intención oculta.' },
];
// @ts-ignore
export const getCard = (): Card =>
  cards[Math.floor(Math.random() * cards.length)];
export const getCardText = (): string => getCard().quote;
