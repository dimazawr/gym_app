import React, {Component} from 'react';


const GlobalContext = React.createContext();

 class GlobalContextProvider extends Component {
    state = { 
        answer_one: '', 
        answer_two: '',
     }



       handleFirstRadioChange = (e) => {
        const target = e.target;
        const value = target.value;
        
        this.setState({answer_one: value})

      }

      handleSecondRadioChange = (e) => {
        const target = e.target;
        const value = target.value;
        
        this.setState({answer_two: value})
      } 


      componentDidUpdate(prevProps,prevState) {
        if (this.state !== prevState) {
          localStorage.setItem('savedState', JSON.stringify(this.state))
        }

        // that basically allows user to continue their steps
        const btnNext = document.getElementById("next");
        btnNext.disabled = false;
      }

    render() { 
        return ( 

            <GlobalContext.Provider value={{ state: this.state, handlerFirst: this.handleFirstRadioChange, handlerSecond: this.handleSecondRadioChange }}>
                {this.props.children}
            </GlobalContext.Provider>

         );
    }
} 



export {GlobalContextProvider, GlobalContext};