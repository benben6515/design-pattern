// setup
class BooleanQuestion {
  constructor(description) {
    this.description = description
  }
  printQuestionChoices() {
    console.log('1. True')
    console.log('2. False')
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description
    this.options = options
  }
  printQuestionChoice() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`)
    })
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description
  }
  printQuestionChoice() {
    console.log('Answer: ____________________')
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description
  }
  printQuestionChoice() {
    console.log('Minimum: ____________________')
    console.log('Maximum: ____________________')
  }
}

function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description)
    question.printQuestion()
    console.log('')
  })
}

const questions = [
  new BooleanQuestion('This video is awesome'),
  new MultipleChoiceQuestion(
    'What is your favorite language?',
    ['HTML', 'CSS', 'JavaScript']
  ),
  new TextQuestion('Describe your favorite JS feature'),
  new RangeQuestion('What is the speed limit in your city?')
]

printQuiz(questions)
