import React, {Component} from 'react';


const GlobalContext = React.createContext();

 class GlobalContextProvider extends Component {
    state = { 
        answer_one: '', 
        answer_two: '',
     }


      handleRadioChange = (e) => {
        e.persist()
        const target = e.target;
        const value = target.value;
        this.setState(prev => ({...prev, ...{
            [target.name]: value
        }}))
      };
      

      componentDidUpdate(prevProps,prevState) {
        if (this.state !== prevState) {
          localStorage.setItem('savedState', JSON.stringify(this.state))
        }

        // that basically allows user to continue their steps
        const btnNext = document.getElementById("next");
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