const Audio1 = ()=>{
    const bird1 = new Audio('https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3')
    

    function bird1Call(){
        if(bird1.paused){
            bird1.play();
        }
        else bird1.pause();
    }


    return(
        <>
        <h1>CDN Link</h1>
        <button onClick={bird1Call}>Bird 1</button>
        </>
    )
}
export default Audio1;