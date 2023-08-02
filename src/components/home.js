import BottomBar from "./bottombar";
import Header from "./header";
import About from "./about";
export default function Home(){

    return(
        <div className="home">
            <Header />
             <About/>
            <BottomBar/>
        </div>
    )
}