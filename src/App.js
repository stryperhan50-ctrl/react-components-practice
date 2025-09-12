import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* 다른 컴포넌트들이 여기에 추가될 수 있습니다. */}
      <Footer />
    </div>
  );
}

export default App;