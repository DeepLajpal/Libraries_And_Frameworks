const Display_Img = ()=>{
    const randomImg = "https://picsum.photos/200/300"
    return(
        <>
        <h1>Self SRC</h1>
        <img src={require("../Assets/Images/nature.jpg")} height="200" alt="This is a nature image" className="img nature-Img" />
        <h1>Random Image</h1>
        <img src={randomImg} height="200" width="300" alt="Random Images" className="img randomImg" />
        </>
    )
}

export default Display_Img;