import { APIListStringResponse } from "../types";

export const API_DIFFICULT: APIListStringResponse[] = [
    { id: 'easy', name: 'Fácil' },
    { id: 'medium', name: 'Medio' },
    { id: 'hard', name: 'Difícil' }
];

export const API_TYPE: APIListStringResponse[] = [
    { id: 'multiple', name: 'Opción Múltiple' },
    { id: 'boolean', name: 'Verdadero/Falso' }
];

export const API_MAX_QUESTIONS: number = 20;