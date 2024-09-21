import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import { fetchImages } from '../../api/unsplashAPI';
import styles from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalImages(data.total);
      } catch (error) {
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (newQuery.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.app}>
      <SearchBar onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} />
      {loading && <Loader />}
      {images.length > 0 && images.length < totalImages && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
