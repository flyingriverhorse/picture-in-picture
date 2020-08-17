const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Pront to select media stream, pass to video elemt, then play 
async function SelectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch error Here
        console.log('Error', error);
    }
}

button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

//on load
SelectMediaStream();