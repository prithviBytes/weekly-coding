var questions = document.querySelectorAll(".question");

function toggleAnswer(evt){
    var answer = evt.path[0].previousElementSibling;
    if(answer.classList.contains("shown")){
        answer.classList.remove("shown");
        answer.classList.add("hidden")
    }else{
        answer.classList.remove("hidden");
        answer.classList.add("shown")
    }
}

questions.forEach(question => {
    question.addEventListener("click",toggleAnswer);
})
