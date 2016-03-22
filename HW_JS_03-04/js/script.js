var qSize = 3;
var aSize = 3;
var test = {
  question: new Array(3),
  answer: new Array(),
  count:0, //кол-во добавленных вопросов
  title:'Тест по программированию',
  addQuestion: function(currentQuestion, currentAnswer) {
    this.question[this.count]=currentQuestion;
    for (var i = 0; i < currentAnswer.length; i++) {
      test.answer[this.count][i]=currentAnswer[i];
    }
    this.count++;
  },
  addElements: function () {
    var wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);

    var head = document.createElement("h1");
    head.className = 'header';
    head.innerHTML  = this.title;
    wrapper.appendChild(head);

    var form = document.createElement("form");
    form.className = 'formClass';
    wrapper.appendChild(form);

    for (var i = 0; i < this.question.length; i++) {
      var div = document.createElement('div');
      var pDiv = document.createElement('p');
      var pDivText = document.createTextNode(this.question[i]);
      form.appendChild(div);
      div.appendChild(pDiv);
      pDiv.appendChild(pDivText);

      for (var j = 0; j < this.answer[i].length; j++) {
        var label = document.createElement('label');
        label.className = 'labelClass';
        var labelText = document.createTextNode(this.answer[i][j]);
        var labelTextBr = document.createElement('br');
        var variant = document.createElement('input');
        variant.setAttribute("type","checkbox");
        div.appendChild(label);
        label.appendChild(variant);
        label.appendChild(labelText);
        label.appendChild(labelTextBr);
      }
    }
    var button = document.createElement('input');
    button.setAttribute("type", "submit");
    button.setAttribute("value","Проверить мои результаты");
    button.className='checkResults';
    div.appendChild(button);
  }
};

for (var i = 0; i < qSize; i++) {
  test.answer.push(new Array (aSize));
}

for (var i = 0; i < qSize; i++) {

  var cQuestion = 'Вопрос №' +(i+1);
  var cAnswer=[];

  for (var j= 0; j < aSize; j++) {
  cAnswer[j] = 'Вариант ответа №' + (j+1);
  }

  test.addQuestion(cQuestion,cAnswer);
}

test.addElements();
