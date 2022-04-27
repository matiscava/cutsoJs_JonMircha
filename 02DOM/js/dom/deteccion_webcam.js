const d = document,
  w = window,
  n = navigator;

export default function webcam (id) {
  const $video = d.getElementById(id)
  if(n.mediaDevices.getUserMedia){
    n.mediaDevices.getUserMedia({video:true,audio:false})
      .then( (stream) =>{
        // console.log(stream);
        $video.srcObject = stream;
        $video.play()
      } )
      .catch( (err) => {
          $video.insertAdjacentHTML(
            'afterend',
            `<p><mark>${err}</mark></p>`
          );
        console.error(`¡Sucedió el siguiente error: ${err}`);
      })
  }
}