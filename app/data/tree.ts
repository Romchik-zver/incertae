export interface TopicNode {
  id: string;
  type: "topic";
  name: string;
  description?: string;
  children: TreeNode[];
}

export interface QuestionNode {
  id: string;
  type: "question";
  title: string;
  excerpt: string;
  votes: number;
  tags: string[];
}

export type TreeNode = TopicNode | QuestionNode;

export const rootNodes: TopicNode[] = [
  {
    id: "science",
    type: "topic",
    name: "Наука",
    description: "Нерешённые проблемы фундаментальной и прикладной науки",
    children: [
      {
        id: "math",
        type: "topic",
        name: "Математика",
        description: "Абстрактные структуры и их свойства",
        children: [
          {
            id: "number-theory",
            type: "topic",
            name: "Теория чисел",
            children: [
              {
                id: "q1",
                type: "question",
                title: "Гипотеза Римана",
                excerpt:
                  "Все нетривиальные нули дзета-функции лежат на критической прямой Re(s) = 1/2?",
                votes: 342,
                tags: ["числа", "анализ"],
              },
              {
                id: "q2",
                type: "question",
                title: "Проблема Гольдбаха",
                excerpt:
                  "Всякое ли чётное число больше 2 представимо суммой двух простых?",
                votes: 156,
                tags: ["простые числа"],
              },
            ],
          },
          {
            id: "complexity",
            type: "topic",
            name: "Сложность алгоритмов",
            children: [
              {
                id: "q3",
                type: "question",
                title: "P vs NP",
                excerpt:
                  "Может ли каждая задача, решение которой быстро проверяется, также быстро решаться?",
                votes: 298,
                tags: ["алгоритмы", "сложность"],
              },
            ],
          },
        ],
      },
      {
        id: "physics",
        type: "topic",
        name: "Физика",
        description: "Законы материи и энергии",
        children: [
          {
            id: "cosmology",
            type: "topic",
            name: "Космология",
            children: [
              {
                id: "q4",
                type: "question",
                title: "Теория всего",
                excerpt:
                  "Существует ли единая теория, объединяющая все фундаментальные взаимодействия?",
                votes: 410,
                tags: ["кванты", "гравитация"],
              },
              {
                id: "q5",
                type: "question",
                title: "Тёмная материя",
                excerpt:
                  "Что такое тёмная материя и тёмная энергия на самом деле?",
                votes: 387,
                tags: ["космология", "материя"],
              },
            ],
          },
          {
            id: "quantum",
            type: "topic",
            name: "Квантовая механика",
            children: [
              {
                id: "q6",
                type: "question",
                title: "Квантовая гравитация",
                excerpt:
                  "Как совместить общую теорию относительности с квантовой механикой?",
                votes: 275,
                tags: ["кванты", "гравитация"],
              },
            ],
          },
        ],
      },
      {
        id: "chemistry",
        type: "topic",
        name: "Химия",
        children: [
          {
            id: "origins",
            type: "topic",
            name: "Происхождение",
            children: [
              {
                id: "q7",
                type: "question",
                title: "Происхождение жизни",
                excerpt:
                  "Как именно из неживой материи возникла жизнь на Земле?",
                votes: 220,
                tags: ["биохимия", "эволюция"],
              },
              {
                id: "q8",
                type: "question",
                title: "Создание искусственной клетки",
                excerpt:
                  "Можно ли собрать живую клетку из неорганических компонентов?",
                votes: 134,
                tags: ["синтетическая биология"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "life",
    type: "topic",
    name: "Жизнь",
    description: "Биологические и медицинские загадки существования",
    children: [
      {
        id: "biology",
        type: "topic",
        name: "Биология",
        children: [
          {
            id: "consciousness",
            type: "topic",
            name: "Сознание",
            children: [
              {
                id: "q9",
                type: "question",
                title: "Природа сознания",
                excerpt: "Почему и как возникает субъективный опыт?",
                votes: 512,
                tags: ["нейробиология", "философия"],
              },
              {
                id: "q10",
                type: "question",
                title: "Смысл сна",
                excerpt: "Для чего именно нужен сон и почему мы видим сны?",
                votes: 198,
                tags: ["нейробиология"],
              },
            ],
          },
          {
            id: "aging",
            type: "topic",
            name: "Старение",
            children: [
              {
                id: "q11",
                type: "question",
                title: "Почему мы стареем",
                excerpt: "Почему организмы стареют и можно ли это остановить?",
                votes: 301,
                tags: ["генетика", "медицина"],
              },
            ],
          },
        ],
      },
      {
        id: "medicine",
        type: "topic",
        name: "Медицина",
        children: [
          {
            id: "cancer",
            type: "topic",
            name: "Онкология",
            children: [
              {
                id: "q12",
                type: "question",
                title: "Рак",
                excerpt:
                  "Сможем ли мы полностью вылечить рак в обозримом будущем?",
                votes: 445,
                tags: ["онкология", "терапия"],
              },
            ],
          },
          {
            id: "neurodegeneration",
            type: "topic",
            name: "Нейродегенерация",
            children: [
              {
                id: "q13",
                type: "question",
                title: "Альцгеймер",
                excerpt:
                  "Каковы реальные причины болезни и как её предотвратить?",
                votes: 267,
                tags: ["нейродегенерация"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "games",
    type: "topic",
    name: "Игры",
    description: "Нерешённые вопросы теории игр, киберспорта и геймдизайна",
    children: [
      {
        id: "videogames",
        type: "topic",
        name: "Видеоигры",
        children: [
          {
            id: "gamedesign",
            type: "topic",
            name: "Геймдизайн",
            children: [
              {
                id: "q14",
                type: "question",
                title: "Идеальная игра",
                excerpt: "Существует ли универсальная формула идеальной игры?",
                votes: 89,
                tags: ["геймдизайн"],
              },
              {
                id: "q15",
                type: "question",
                title: "Будущее VR",
                excerpt:
                  "Достигнет ли виртуальная реальность полного погружения?",
                votes: 176,
                tags: ["VR", "технологии"],
              },
            ],
          },
        ],
      },
      {
        id: "boardgames",
        type: "topic",
        name: "Настольные игры",
        children: [
          {
            id: "chess",
            type: "topic",
            name: "Шахматы",
            children: [
              {
                id: "q16",
                type: "question",
                title: "Шахматы — решены?",
                excerpt: "Существует ли идеальная стратегия в шахматах?",
                votes: 234,
                tags: ["шахматы", "теория игр"],
              },
            ],
          },
          {
            id: "go",
            type: "topic",
            name: "Го",
            children: [
              {
                id: "q17",
                type: "question",
                title: "Go и ИИ",
                excerpt: "Может ли человек снова победить ИИ в го?",
                votes: 112,
                tags: ["go", "искусственный интеллект"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "space",
    type: "topic",
    name: "Космос",
    description: "Загадки Вселенной за пределами атмосферы Земли",
    children: [
      {
        id: "universe",
        type: "topic",
        name: "Вселенная",
        children: [
          {
            id: "beginning",
            type: "topic",
            name: "Начало",
            children: [
              {
                id: "q18",
                type: "question",
                title: "До Большого взрыва",
                excerpt:
                  "Что существовало до Большого взрыва, если время тоже началось тогда?",
                votes: 567,
                tags: ["космология"],
              },
            ],
          },
          {
            id: "end",
            type: "topic",
            name: "Конец",
            children: [
              {
                id: "q19",
                type: "question",
                title: "Конец Вселенной",
                excerpt:
                  "Как именно закончится Вселенная: тепловая смерть, Большой разрыв или другое?",
                votes: 423,
                tags: ["космология", "футурология"],
              },
            ],
          },
        ],
      },
      {
        id: "blackholes",
        type: "topic",
        name: "Чёрные дыры",
        children: [
          {
            id: "singularity",
            type: "topic",
            name: "Сингулярность",
            children: [
              {
                id: "q20",
                type: "question",
                title: "Информационный парадокс",
                excerpt: "Куда девается информация, поглощённая чёрной дырой?",
                votes: 389,
                tags: ["квантовая механика", "гравитация"],
              },
              {
                id: "q21",
                type: "question",
                title: "Сингулярность",
                excerpt: "Что находится в центре чёрной дыры?",
                votes: 445,
                tags: ["физика", "математика"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "earth",
    type: "topic",
    name: "Земля",
    description: "Нерешённые вопросы о нашей планете и её истории",
    children: [
      {
        id: "oceans",
        type: "topic",
        name: "Океаны",
        children: [
          {
            id: "depths",
            type: "topic",
            name: "Глубины",
            children: [
              {
                id: "creatures",
                type: "topic",
                name: "Существа",
                children: [
                  {
                    id: "q22",
                    type: "question",
                    title: "Гиганты глубин",
                    excerpt:
                      "Насколько большим может вырасти рыба на глубине более 10 км?",
                    votes: 178,
                    tags: ["биология", "океанография"],
                  },
                  {
                    id: "q23",
                    type: "question",
                    title: "Неизвестные формы",
                    excerpt:
                      "Существуют ли неизвестные науке гигантские глубоководные существа?",
                    votes: 245,
                    tags: ["криптозоология", "океан"],
                  },
                ],
              },
              {
                id: "pressure",
                type: "topic",
                name: "Давление",
                children: [
                  {
                    id: "q24",
                    type: "question",
                    title: "Жизнь в экстремуме",
                    excerpt:
                      "Какие физические пределы выдерживает живая клетка под давлением?",
                    votes: 134,
                    tags: ["биофизика"],
                  },
                ],
              },
            ],
          },
          {
            id: "currents",
            type: "topic",
            name: "Течения",
            children: [
              {
                id: "q25",
                type: "question",
                title: "Гольфстрим",
                excerpt:
                  "Почему течение Гольфстрим непредсказуемо в долгосрочной перспективе?",
                votes: 89,
                tags: ["климат", "океанография"],
              },
            ],
          },
        ],
      },
      {
        id: "archaeology",
        type: "topic",
        name: "Археология",
        children: [
          {
            id: "ancient-civ",
            type: "topic",
            name: "Древние цивилизации",
            children: [
              {
                id: "lost-cities",
                type: "topic",
                name: "Пропавшие города",
                children: [
                  {
                    id: "q26",
                    type: "question",
                    title: "Пропавшие цивилизации",
                    excerpt:
                      "Какие цивилизации существовали, но не оставили следов?",
                    votes: 312,
                    tags: ["история", "антропология"],
                  },
                ],
              },
              {
                id: "dinosaurs",
                type: "topic",
                name: "Динозавры",
                children: [
                  {
                    id: "q27",
                    type: "question",
                    title: "Динозавры и зелень",
                    excerpt: "Мог ли тираннозавр питаться зеленью?",
                    votes: 89,
                    tags: ["палеонтология", "динозавры"],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "geology",
        type: "topic",
        name: "Геология",
        children: [
          {
            id: "core",
            type: "topic",
            name: "Ядро",
            children: [
              {
                id: "q28",
                type: "question",
                title: "Ядро Земли",
                excerpt:
                  "Каков точный состав внутреннего ядра и почему оно твёрдое?",
                votes: 178,
                tags: ["геофизика"],
              },
            ],
          },
          {
            id: "magnetic",
            type: "topic",
            name: "Магнитное поле",
            children: [
              {
                id: "q29",
                type: "question",
                title: "Магнитное поле",
                excerpt:
                  "Почему магнитное поле Земли периодически меняет полярность?",
                votes: 156,
                tags: ["геомагнетизм"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "human",
    type: "topic",
    name: "Человек",
    description: "Вопросы о природе человека, разума и общества",
    children: [
      {
        id: "psychology",
        type: "topic",
        name: "Психология",
        children: [
          {
            id: "free-will",
            type: "topic",
            name: "Свобода воли",
            children: [
              {
                id: "q30",
                type: "question",
                title: "Свобода воли",
                excerpt:
                  "Действительно ли наши решения свободны или детерминированы?",
                votes: 398,
                tags: ["философия", "нейробиология"],
              },
            ],
          },
          {
            id: "language",
            type: "topic",
            name: "Язык",
            children: [
              {
                id: "q31",
                type: "question",
                title: "Язык и мышление",
                excerpt: "Определяет ли язык наше мышление или наоборот?",
                votes: 234,
                tags: ["лингвистика", "когнитивика"],
              },
            ],
          },
        ],
      },
      {
        id: "philosophy",
        type: "topic",
        name: "Философия",
        children: [
          {
            id: "meaning",
            type: "topic",
            name: "Смысл",
            children: [
              {
                id: "q32",
                type: "question",
                title: "Смысл жизни",
                excerpt: "Есть ли объективный смысл существования?",
                votes: 678,
                tags: ["экзистенциализм"],
              },
            ],
          },
          {
            id: "ethics",
            type: "topic",
            name: "Этика",
            children: [
              {
                id: "q33",
                type: "question",
                title: "Природа добра и зла",
                excerpt: "Абсолютны ли моральные категории или они условны?",
                votes: 345,
                tags: ["этика"],
              },
            ],
          },
        ],
      },
    ],
  },
];

export function findNodeById(
  id: string,
  nodes: TreeNode[] = rootNodes,
): TreeNode | null {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.type === "topic") {
      const found = findNodeById(id, node.children);
      if (found) return found;
    }
  }
  return null;
}

export function getPathToNode(
  id: string,
  nodes: TreeNode[] = rootNodes,
  path: TopicNode[] = [],
): TopicNode[] | null {
  for (const node of nodes) {
    if (node.id === id) return path;
    if (node.type === "topic") {
      const result = getPathToNode(id, node.children, [...path, node]);
      if (result) return result;
    }
  }
  return null;
}

export function countQuestions(node: TreeNode): number {
  if (node.type === "question") return 1;
  return node.children.reduce((acc, child) => acc + countQuestions(child), 0);
}

export function getAllQuestionIds(nodes: TreeNode[] = rootNodes): string[] {
  const ids: string[] = [];
  for (const node of nodes) {
    if (node.type === "question") ids.push(node.id);
    else ids.push(...getAllQuestionIds(node.children));
  }
  return ids;
}
