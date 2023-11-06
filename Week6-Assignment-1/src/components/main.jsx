import {Component} from "react"
import ArticleComp from "./article";
import SectionComp from "./section";
class MainComp extends Component{
        render(){
            return <main>
            <ArticleComp/>
            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
            <SectionComp/>
                </div>
              </div>
            </div>
          
          </main>
        }
    }
    export default MainComp;