const Display_Video = ()=>{
    return(
        <>
        <h1>Self SRC</h1>
        <video src={require("../Assets/Videos/nature.mp4")} width={300} height={200} controls></video>
        <h1>Random Img</h1>
        <video src={require("../Assets/Videos/nature.mp4")} width={300} height={200} controls></video>
        </>
    )
}

export default Display_Video;