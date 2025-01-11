import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import styles from '@/pages/Home.module.scss'
import TodoList from '@/components/TodoList/TodoList';
import Settings from '@/components/Settings/Settings';
import useAppState from '@/stores/AppState';
import useCounterStore from '@/stores/counter';
import httpclient from '@/plugins/http/httpClient'

httpclient.get('/api/v1/test')

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

function Home() {
  const { user, updateUser, updateName } = useAppState();
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          欢迎来到首页
        </h1>
        <p className="text-gray-600">
          这是一个简单的首页示例，您可以在这里添加更多内容。
        </p>
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
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
      <TodoList />
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

export default Home
