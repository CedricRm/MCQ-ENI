export const questions = [
    {
        id: 1,
        title: "Quelle est la méthode principale utilisée pour démarrer l'exécution d'un programme Java?",
        responses: [
            'mainMethod()',
            'start()',
            'public static void main(String[] args) (Correcte)',
        ],
    },
    {
        id: 2,
        title: 'Comment déclarer une variable constante en Java?',
        responses: [
            'const int x = 5;',
            'final int x = 5;',
            'constant int x = 5;',
        ],
    },
    {
        id: 3,
        title: 'Quelle est la différence entre == et .equals() pour la comparaison de chaînes de caractères en Java?',
        responses: [
            "== compare les références d'objet, tandis que .equals() compare le contenu des chaînes",
            'final int x = 5;',
            '== est utilisé pour les chaînes, et .equals() pour les objets.',
        ],
    },
]

// Roles
// roles is attributed due to back end specification
export const ADMIN = 1
export const STUDENT = 2
export const TEACHER = 3
