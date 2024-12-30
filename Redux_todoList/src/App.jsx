import './App.css'
import Todo from './components/todo'
import Form from './components/form'
import { store } from './app/store'
import { Provider } from 'react-redux'

export default function App(){
    return (
        <>
            <Provider store={store}>
                <Form/>
                <Todo/>
            </Provider>
        </>
    );
}