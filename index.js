//* Game adli funksiya yaradiriq cunki biz oyunu bitirdikden sonra yeniden baslatmaq istesek sadece bu funksiyani cagirmaqla isimizi asanlashdiracagiq.
function Game() {

//*yaratdigimiz array
  let names = ["eli", "durre", "turkan", "resad", "ayan"];

  //* arraydaki sozleri random olaraq secmek ucun arrayin elementlerinin sayi qeder random edirik ve yuvarlaqlashdiririq. names[num] bize random adlari string kimi qaytaracaq
  let num = Math.floor(Math.random() * names.length);

  //*adlari split metodu ile herf herf ayiririq array formasinda-["a","y","a","n"] kimi
  let guessWord = names[num].split("");

  //*guessword arrayimizin uzunlugunu qeder bos array yaradib fill metodu ile icini "_" doldururuq
  let hiddenWord = Array(guessWord.length).fill("_");

  //* oyun muddetinde 2 defe sehv etsek oyun bitecek
  let heart = 2;

  alert("Let is start the word guessing game!");
  alert(`Heart: ${heart}`);

  //* while dongusu ile oyunu hem heartlerin sayi qeder hemde soz tapilana qeder davam edeceyik
  while (heart > 0 && hiddenWord.includes("_")) {

    //*join metodu ile arrayimizi stringe cevirib birleshdiririk
    alert(`Find the hidden Word: ${hiddenWord.join(" ")}`); 
    let letter = prompt("Guess a Letter:").toLowerCase();

    //*eger guessword arrayimizda promptla daxil etdiyimiz herf yeni letter varsa
    if (guessWord.includes(letter)) {

      //*ve guesswordin hemin indexi bu lettere beraberdise
      for (let i = 0; i < guessWord.length; i++) {
        if (guessWord[i] == letter) {

          //*onda gizli sozumuzun yeni hiddenwordun eyni indexine bu herfi yeni letteri menimset
          hiddenWord[i] = letter;
        }
      }
    }

    //*eger guessword arrayimizda promptla daxil etdiyimiz herf yeni letter yoxdursa hearti bir bir azalt
    else if (!guessWord.includes(letter)) {
      heart--;
      alert("Wrong guess! You lost a life.");
      alert(`Heart: ${heart}`);
    }
  }
  //*artiq verilen gizli soz tapilibsa tebrik mesaji cixarib yeniden oyuna devet ede bilerik eger oyuncu davam etmek istese bunun ucun funksiyamizi yeniden cagiririq
  if (!hiddenWord.includes("_")) {
    alert(`Congratulations! You guessed the word: ${guessWord.join("")}`);
    let okay = confirm("Do you want to play again?");
    if (okay) {
      Game();
    } else {
      alert("Thank you for joining the game");
    }
  }
  //*eger verilen soz tapilmayib ve heartlarimizin sayi bitibse game over edirik ve yene de yeniden oyuna devet edib funksiyamizi cagira bilerik
  else {
    alert(`Game over! The correct word was: ${guessWord.join("")}`);
    let okay = confirm("Do you want to play again?");
    if (okay) {
      Game();
    } else {
      alert("Thank you for joining the game");
    }
  }
}

//*sonda mutleq funskiyamizi cagiririq.
Game();
