

const QUESTIONS_EXAMPLE = [

  {
    id: 1,
    difficulty: 'Basic',
    title: 'Hello world',
    body: 'This is question 1',
    categories: [],
    expiration_date: '2022-06-29',
    format: 't',
    release_date: '2021-04-30',
    answer: 'n!',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 2,
    difficulty: 'Intermediate',
    title: 'Hello world 2',
    body: 'q2',
    categories: [],
    expiration_date: '2021-07-01',
    format: 't',
    release_date: '2021-04-30',
    answer: '2020',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 3,
    difficulty: 'Challenging',
    title: 'Hello world 3',
    body: 'q3',
    categories: [],
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    answer: 'No'
  },
  {
    id: 4,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et metus sed diam aliquam tempus. Duis tincidunt libero dui. Mauris a venenatis lectus. Nullam elementum mi sit amet tincidunt tincidunt. Phasellus egestas turpis ac metus varius mollis. Etiam imperdiet luctus tempor. Praesent odio magna, convallis ac tellus nec, tempus accumsan ipsum. Ut fermentum ligula viverra sodales sagittis. Duis suscipit dui at vulputate sodales. Proin accumsan libero non scelerisque vestibulum. Suspendisse pharetra erat nisi, sed dictum tellus sagittis vitae. Aliquam pellentesque, nisi id facilisis commodo, ante urna scelerisque urna, vel vehicula dolor urna non turpis. Aenean finibus, velit at vestibulum facilisis, enim quam scelerisque ex, eget finibus nisl nisi vitae neque. Aliquam tempor metus velit, sit amet sagittis mauris iaculis ut. Aliquam vitae nibh eros. Ut dolor tellus, pulvinar sed dui vel, facilisis tincidunt erat. Mauris convallis quam nulla, eu dignissim magna molestie vitae. Nunc fringilla hendrerit ipsum, in sagittis metus commodo convallis. Ut lacinia gravida enim, in sagittis metus efficitur vel. Cras tincidunt arcu ullamcorper elit facilisis, pellentesque auctor mauris placerat. In vehicula est ut justo hendrerit pretium. In nunc nibh, iaculis at tortor quis, tincidunt placerat orci. Donec accumsan orci a orci placerat malesuada. Nunc pretium condimentum quam eget vehicula. Sed eleifend accumsan orci. Sed dignissim, justo quis mattis interdum, nisl dui sodales felis, ut consectetur enim ante sed ante. Maecenas sodales dapibus odio id aliquet. Proin dapibus felis quis vehicula pulvinar. Cras et nisl at risus porta dictum ut imperdiet libero. In non blandit nunc. Pellentesque ut dictum lorem. Cras elementum tincidunt arcu vel porta.',
    categories: [],
    difficulty: 'Challenging',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    title: 'P1: Hello World',
    answer: 'Yes',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 5,
    categories: [],
    difficulty: 'Basic',
    title: 'Good night',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'Lorem ipsum',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 6,
    categories: [],
    difficulty: 'Intermediate',
    title: 'Good night',
    body: 'This is a question body',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'Right'
  },
  {
    id: 7,
    categories: [],
    difficulty: 'Challenging',
    title: 'Good night',
    body: 'This is another body.',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'yo'
  },
  {
    id: 8,
    difficulty: 'Challenging',
    categories: [],
    title: 'Good night',
    body: 'You can also call this the longer version of a question.',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'this is an answer',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 9,
    difficulty: 'Basic',
    categories: [],
    title: 'Good night',
    body: 'Explaining what good night means.',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'This'
  },
  {
    id: 10,
    difficulty: 'Intermediate',
    categories: [],
    title: 'Good night',
    body: 'This question is intermediate',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: '13',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  },
  {
    id: 11,
    difficulty: 'Challenging',
    categories: [],
    title: 'Good night',
    body: 'Challenging question, eh?',
    expiration_date: '2021-05-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'it'
  },
  {
    id: 12,
    difficulty: 'Challenging',
    categories: [],
    title: 'Good night',
    body: 'Also a challenging one.',
    expiration_date: '2021-07-31',
    format: 't',
    release_date: '2021-04-30',
    answer: 'This is it',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/e/ef/RD-S_sample_graph.png',
    imgAlt: 'Graph representing stuff.'
  }
]

export { QUESTIONS_EXAMPLE }
