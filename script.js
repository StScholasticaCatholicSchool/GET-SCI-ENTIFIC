const quizData = [
    {
      question: '1. How many teeth are in an adult?',
      options: ['12', '30', '60', '32'],
      answer: '32',
    },
    {
      question: '2. All the following are functions of the root except',
      options: ['Food storage', 'Support', 'Absorption', 'Transpiration'],
      answer: 'Transpiration',
    },
    {
      question: '3. A long tube that runs from the mouth to the anus is called?',
      options: ['Gut', 'Windpipe', 'Foodpipe', 'Nose'],
      answer: 'Foodpipe',
    },
    {
      question: '4. In how many states does matter exist',
      options: ['2', '5', '8', '3'],
      answer: '3',
    },
    {
      question: '5. We should brush at least how many times a day?',
      options: [
        '2',
        '3',
        '0',
        '5',
      ],
      answer: '2',
    },
    {
      question: '6. All the following are causes of death in animals except?',
      options: ['Dieseases', 'Old age', 'Feeding', 'Bad weather'],
      answer: 'Feeding',
    },
    {
      question: '7. The following are states of matter except?',
      options: [
        'Liquids',
        'Gasses',
        'Water',
        'Solids',
      ],
      answer: 'Water',
    },
    {
      question: '8. Which one is not a type of waste?',
      options: ['Animal waste', 'Plastic bottles', 'Water', 'Papers'],
      answer: 'Water',
    },
    {
      question: '9. Which one is not a living thing?',
      options: [
        'Cactus',
        'Cows',
        'Capsules',
        'Banana',
      ],
        
      answer: 'Capsules',
    },
    {
      question: '10. Where do people go when sick',
      options: ['School', 'Market', 'Hospital', 'Shop'],
      answer: 'Hospital',
    }, {
      question: '11. The green colouring matter in plants is called?',
      options: [
        'Photosynthesis',
        'Osmosis',
        'Chlorophyll',
        'Leaf',
      ],
        
      answer: 'Chloropyll',
    }, {
      question: '12. Plants make their own food through a process called',
      options: [
        'Diffusion',
        'Photosynthesis',
        'Transpiration',
        'Absorption',
      ],
        
      answer: 'Photosynthesis',
    }, {
      question: '13. The small holes found in the leaves are called',
      options: [
        'Stomata',
        'Stoma',
        'Storm',
        'Spricals',
      ],
        
      answer: 'Stomata',
    }, {
      question: '14. Animals without a backbone are are called',
      options: [
        'Vertebrates',
        'Invertebrates',
        'Insects',
        'Reptiles',
      ],
        
      answer: 'Invertebrates',
    }, {
      question: '15. Animals that feed on plants ',
      options: [
        'Herbivores',
        'Omnivores',
        'Canivores',
        'None of the above',
      ],
        
      answer: 'Herbivores',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const progressBar = document.getElementById('progress');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  const randomFactContainer = document.getElementById('random-fact');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      updateProgressBar();
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    const percentage = Math.round((score / quizData.length) * 100);
  
    let gradeRemark = '';
    let remarkStyle = '';
    if (percentage == 100) {
        gradeRemark = 'Whaa..t!! Did you actually beat me in this TEST!! I dare you to try me in the next TEST.. I doubt if you will still beat me....';
        remarkStyle = 'color: white; background-color: green; padding: 20px; border-radius: 4px';
      }
    else if (percentage >= 80) {
      gradeRemark = 'Wow! This is really amazing. You Exceeded Expectations in this Test! But you need more revision in order to beat me!...';
      remarkStyle = 'color: white; background-color: green; paddding: 20px; border-radius: 4px';
    } else if (percentage >= 60) {
      gradeRemark = 'You are really doing great work!! You are Meet Expectations do you still believe like you can beat me in this? I dare you to try again!! ';
      remarkStyle = 'color: white; background-color: #d3d3d3; paddding 20px; border-radius: 4px';
    } else if (percentage >= 40) {
      gradeRemark = 'Fair. You seem to be Approaching my Expectations! I dare you to try and see if you can beat me!';
      remarkStyle = 'color: white; background-color: orange; padding: 20px; border-radius: 4px';
    } else {
      gradeRemark = 'This is you! How... come!! Your score is Below Expectations!!! I Challenge you to revise and try to challenge me again. Do you think you can beat me?!! If you think you can beat me, just click on that RETRY BUTTON BELOW!!';
      remarkStyle = 'color: white; background-color: red; padding: 20px; border-radius: 4px';
    }
  
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
  
    resultContainer.innerHTML = `
      <h1>RESULTS</h1>
      <p style="${remarkStyle}">You scored ${score} out of ${quizData.length}!</p>
      <p style="color: #428bca;">Percentage Score: ${percentage}%</p>
      <p style="${remarkStyle}">${gradeRemark}</p>
    `;
  
    getRandomFact();
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    updateProgressBar();
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    randomFactContainer.innerHTML = '';
    displayQuestion();
  }
  
  function updateProgressBar() {
    const progress = (currentQuestion / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <h1>RESULTS</h1>
      <p style="color: #428bca;">You scored ${score} out of ${quizData.length}!</p>
      <p style="color: #428bca;">Percentage Score: ${Math.round((score / quizData.length) * 100)}%</p>
      <p style="color: black;">Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  function getRandomFact() {
    const facts = [
      "DID YOU KNOW, ...that honey never spoils!!",
      "DID YOU KNOW,...that group of flamingos is called a 'flamboyance'",
      "DIDI YOU KNOW, ....you actually know that octopuses have three hearts!!.",
      "DID YOU KNOW,.. an earthworm has five hearts!!!",
      "DID YOU KNOW,...An adult body has two hundred and six bones while newborn babies have three hundred bones!!!"
      // Add more facts as needed
    ];
    
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    randomFactContainer.innerHTML = randomFact;
    randomFactContainer.classList.remove('hide');
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();  // Ensure the first question is displayed initially
  