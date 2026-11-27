const message = `Hello Yuan, I don’t even know if you’ll ever read this.\nBut if you do… I appriciate you a lot, I will cherish the little moment we bond.\n\nI tried not to get attached but I failed. I Cared a lot and tried to know you more. But the universe just never gave me enough space to become “us.”\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nAnyway, I hope you're doing okay, after what happened.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
