
function load(ev) {

    var cards = document.getElementsByClassName('card');
    for (var card of cards)
    {
        var button = card.querySelector('.card-button');
        button.onclick = function(ev)
        {
            let currentButton = event.target;
            let currentCard = currentButton.parentNode;
            let currentAnswer = currentCard.querySelector('.card-answer');

            currentButton.onclick = function(event) {
                if (currentButton.innerHTML == "Show")
                {
                    currentAnswer.style.display = "Block";
                    currentButton.innerHTML = "Hide";
                }
                else 
                {
                    currentAnswer.style.display = "None";
                    currentButton.innerHTML = "Show";
                }
            }
        }
    } 
}

window.onload = load;