import React, {Component} from 'react';


export interface IState  {
  answer_one: string,
  answer_two: string
}

export interface IContext {
  state: IState,
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}


const GlobalContext = React.createContext({} as IContext);

 class GlobalContextProvider extends Component {
    state:IState = { 
        answer_one: '', 
        answer_two: '',
     }


      handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()
        const target = e.target;
        const value = target.value;
        this.setState(prev => ({...prev, ...{
            [target.name]: value
        }}))
      };
      

      componentDidUpdate(prevState: IState) {
        if (this.state !== prevState) {
          localStorage.setItem('savedState', JSON.stringify(this.state))
        }

        // that basically allows user to continue their steps
        const btnNext = document.getElementById("next") as HTMLButtonElement;
        btnNext.disabled = false;
      };

    render() { 
        return ( 

            <GlobalContext.Provider value={{ state: this.state, handleRadioChange: this.handleRadioChange }}>
                {this.props.children}
            </GlobalContext.Provider>

         );
    }
} 



export {GlobalContextProvider, GlobalContext};