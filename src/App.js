import logo from './logo.svg';
import './App.css';
import Navigation from './routes/routes';
import { AuthProvider } from './routes/privateRoute';
import IdleTimerContainer from './component/common/idleTimerContainer';
import FileUpload from './component/fileUpload/fileUpload';
import { CakeView } from './app/features/cake/CakeView';
import { IcecreamView } from './app/features/icecream/IcecreamView';
import { UserView } from './app/features/user/UserView';

const App = () => {
  return (
    <div className="App">
       <AuthProvider>
        <IdleTimerContainer></IdleTimerContainer>
        <Navigation />
      </AuthProvider> 

      {/* <CakeView />
      <IcecreamView />
      <UserView /> */}

      {/*<FileUpload />*/}
    </div>
  );
}

export default App;
