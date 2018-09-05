$("#start").show();
alert("Check console for answers once you press start, or you can challenge yourself and try to answer them all without assistance. :)");

var questions = [{
    question: "How many playable characters were there during the release of the game?",
    choices: ["19", "20", "21", "22",],
    answer: "21"
}, {
    question: "Who is Ana's daughter?",
    choices: ["Mercy", "Pharah", "Zarya", "Symmetra"],
    answer: "Pharah"
}, {
    question: "Who is Widowmaker's main sniper-rival?",
    choices: ["Brigitte", "Moira", "Sombra", "Ana"],
    answer: "Ana"
}, {
    question: "Which one of these characters were not an original founding member of the Overwatch team?",
    choices: ["Reaper", "Winston", "Torbjorn", "Ana"],
    answer: "Winston"
}, {
    question: "How many seconds does Zenyatta's Transcendence ultimate ability last?",
    choices: ["5", "6", "7", "8"],
    answer: "6"
}, {
    question: "How many HP (hitpoints) does D.Va have? (INCLUDING armor)",
    choices: ["600", "650", "700", "750"],
    answer: "750"
}, {
    question: "Where is Torbjorn from?",
    choices: ["Iceland", "Norway", "Sweden", "Finland"],
    answer: "Sweden"
}, {
    question: "Who is the oldest playable character in Overwatch at age 61?",
    choices: ["Reinhardt", "Soldier 76", "Reaper", "Torbjorn"],
    answer: "Reinhardt"
}, {
    question: "What is the name of Bastion's bird?",
    choices: ["Genymodo", "Ganymede", "Gunymada", "Gonymudo"],
    answer: "Ganymede"
}, {
    question: "How much damage does Reinhardt's charge deal if an enemy is pinned?",
    choices: ["250", "300", "350", "400"],
    answer: "300"
}];

var timer;

var hideStartButton = function () {
    $("#start").hide();
}

var game = {

    correct: 0,
    incorrect: 0,
    timer: 100,

    // Timer
    time: function () {
        game.timer--;
        $("#timer").html(game.timer);
        if (game.timer === 0) {
            alert("You are out of time.");
            game.finish();
        }
    },

    // Start
    start: function () {
        console.log("Answers:\n21\nPharah\nAna\nWinston\n6\n750\nSweden\nReinhardt\nGanymede\n300");
        timer = setInterval(game.time, 1000);
        $("#timerArea").prepend("<span>Time Remaining: <p id='timer'>100</p> </span>");
        for (var i = 0; i < questions.length; i++) {
            $("#questionsArea").append("<hr><h2>" + questions[i].question + "</h2></hr>");
            for (let j = 0; j < questions[i].choices.length; j++) {
                $("#questionsArea").append("<input type='radio' name='question_" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "<br>");
            }
        };

        $("#questionsArea").append("<hr><div id='submit' class='d-flex justify-content-center'><button>Submit</button></div>");
    },

    // result
    

    // endgame
    finish: function () {
        $.each($("input[name='question_0']:checked"), function () {
            if ($(this).val() === questions[0].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_1']:checked"), function () {
            if ($(this).val() === questions[1].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_2']:checked"), function () {
            if ($(this).val() === questions[2].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_3']:checked"), function () {
            if ($(this).val() === questions[3].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_4']:checked"), function () {
            if ($(this).val() === questions[4].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_5']:checked"), function () {
            if ($(this).val() === questions[5].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_6']:checked"), function () {
            if ($(this).val() === questions[6].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_7']:checked"), function () {
            if ($(this).val() === questions[7].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_8']:checked"), function () {
            if ($(this).val() === questions[8].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question_9']:checked"), function () {
            if ($(this).val() === questions[9].answer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function () {
        clearInterval(timer);
        $("#questionsArea").hide();
        alert("You have successfully submitted all your answers.");
        $("#resultsArea").append("<h3>Correct Answers: " + game.correct + "</h3>");
        $("#resultsArea").append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        $("#resultsArea").append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    },


};

$(document).on("click", "#start", function () {
    hideStartButton();    
    game.start();
});

$(document).on("click", "#submit", function () {
    game.finish();
});