import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import useCounterStore from './stores/counter';
import Settings from './components/Settings/Settings';
import useAppState from './stores/AppState';

const CounterDisplay = () => {
  const count = useCounterStore((state) => state.count);
  console.log('CounterDisplay', count);
  return <div>{count}</div>;
};

const CounterButtons = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  console.log('CounterButtons', increment, decrement);
  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

function App() {
  const { user, updateUser, updateName } = useAppState();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Project V Creator v0.0.1</h1>
      <div className="card">
        <CounterDisplay />
        <CounterButtons />
      </div>
      <Settings />
      <div>
        <h1>User: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <button onClick={() => updateUser({ name: 'Jane' })}>Update User</button>
        <button onClick={() => updateName('Frank')}>Update Name</button>
      </div>
    </>
  )
}

export default App
