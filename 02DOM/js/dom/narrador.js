const d = document,
  w = window;

export default function speechReader () {
  const $speechSelect =  d.getElementById('speech-select'),
    $speechTextarea = d.getElementById('speech-text'),
    $speechBtn=  d.getElementById('speech-btn'),
    speechMessage = new SpeechSynthesisUtterance();
    let voices = [];
  const hablar = (text) => {
    speechSynthesis.speak( new SpeechSynthesisUtterance(text) )
  }
  d.addEventListener('DOMContentLoaded', (e) => {
    w.speechSynthesis.addEventListener('voiceschanged', (e) => {
      voices = w.speechSynthesis.getVoices()
      voices.forEach( voice => {
        const $option = d.createElement('option');
        $option.value= voice.name;
        $option.textContent = `${voice.name} -o- ${voice.lang}`
      
        $speechSelect.appendChild($option)
      })
    })
  })
  d.addEventListener('change', (e) => {
    if(e.target === $speechSelect){
      speechMessage.voice = voices.find( (voice) => voice.name === e.target.value)
    }
  })
  d.addEventListener('click', (e) => {
    if( e.target === $speechBtn){
      speechMessage.text = $speechTextarea.value
      w.speechSynthesis.speak(speechMessage)
    //   console.log($textArea.value);
    //   hablar($textArea.value)
    }
  })
}


// let texto= "Hola chiche, ¿Cómo estás?"
// const hablar = (texto) => speechSynthesis.speak( new SpeechSynthesisUtterance(texto) )

// hablar(texto);
