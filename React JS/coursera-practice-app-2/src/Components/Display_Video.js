import ReactPlayer from "react-player/youtube"

const Display_Video = () => {
    const youtubeVideo = "https://www.youtube.com/watch?v=iDhjlrAzT8s";
  return (
    <>
      <h1>Self SRC</h1>
      <video
        src={require("../Assets/Videos/nature.mp4")}
        width={300}
        height={200}
        controls
      ></video>
      <h1>Random Video</h1>
      <ReactPlayer height={200} width={300} playing={true} controls={true} className='ReactPlayer' url={youtubeVideo}/>
    </>
  );
};

export default Display_Video;
