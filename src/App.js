import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import BreadcrumbsNav from './components/BreadcrumbsNav';
import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';
import MainSection from './components/MainSection';

function App() {

  
  return (
    <div>
      <Header/>
      <BreadcrumbsNav/>
      <SearchBar/>
      <PageHeader/>
      <MainSection/>
    </div>
  );
}

export default App;
 