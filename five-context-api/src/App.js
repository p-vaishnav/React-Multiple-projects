import React,{Fragment} from 'react';
import Provider from './provider';
import Context from './context'; 

const Agents = function(){
    return <AgentOne/>
}

const AgentOne = function(){
    return <AgentTwo/>
}

const AgentTwo = function(){
    return <AgentBond/>
}

const AgentBond = function(){
    return(
        
            <Context.Consumer>
                {
                    function(context){
                        return(<Fragment>
                                    <h3>Agent Information</h3>
                                    <h4>Mission Name:{context.data.mname},Agent No:{context.data.agent} </h4>
                                    <h4>Misssion status:{context.data.accept}</h4>
                                    <button onClick={context.isMissionAccepted}>ChangeStatus</button>
                               </Fragment>);
                    }
                }
            </Context.Consumer>
        
    );
}


const App = function(){
    return(
        <div>
            <h1>Context Api</h1>
            <Provider>
                <Agents/>
            </Provider>
        </div>
    );
}


export default App;