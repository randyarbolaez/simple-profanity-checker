let profanityH2 = document.getElementById('profanity-h2');

function containsProfanity(e) {
  e.preventDefault();
  let inputValue = document.getElementById('input').value;
  fetch(
    `https://www.purgomalum.com/service/containsprofanity?text=${inputValue}`
  )
    .then(res => res.json())
    .then(res => {
      if (!res) {
        profanityH2.innerHTML = "It doesn't contain profanity!";
      } else {
        profanityH2.innerHTML = 'It does contain profanity!';
      }
    });
}
