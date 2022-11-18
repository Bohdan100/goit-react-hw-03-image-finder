import SearchResult from './components/Searchbar/SearchResult';
import './styles/styles.css';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SearchResult />
    </div>
  );
};
