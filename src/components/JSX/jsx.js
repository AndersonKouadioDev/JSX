import './jsx.css';
import profil from '../../profil.jpg';

export default  function JSX (){
    return(
        <div>
            <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
            <h1 className="title red">Your name here</h1>
            <br/>
            <img src={profil}/>
            <img src="/img/background/3.jpg"/>
            </div>
            <video height={300} controls style={{margin:50}} >
                <source src={"/videos/sheep.mp4"} type={"video/mp4"}/>
            </video> 
        </div>
    );
}
