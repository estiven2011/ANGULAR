interface Futbolista {
    name: string;
    dorsal: number;
    posicion: string;
    entrenadores?: string[];
}

const estivenNeymarJr: Futbolista = {
    name: 'Estiven Neymar Jr Dos Santos',
    dorsal: 11,
    posicion: 'extremo',
    entrenadores: ['Santi Guardiola', 'Mono Ferguson']
}

console.table(estivenNeymarJr)