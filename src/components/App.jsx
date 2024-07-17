import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { getAPI } from 'pixabay-api';
import styles from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
      const fetchImages =async () => {
        if(!searchQuery) return;

        setIsLoading(true);
        setIsError(false);

        try {
          const response = await getAPI(searchQuery, currentPage);
          const { totalHits, hits } = response;

          if (hits.length === 0) {
              toast.error(
                'Sorry, there are no images matching your search query. Please try again.'
              );
              tsetIsLoading(false);
              return;
            }

            if (currentPage === 1) {
                  toast.success(`Hooray! We found ${totalHits} images!`);
                }
        }
      }
    } 
  )
}

// class App extends Component {
//   state = {
//     images: [],
//     currentPage: 1,
//     searchQuery: '',
//     isLoading: false,
//     isError: false,
//     isEnd: false,
//   };

//   async componentDidUpdate(_prevProps, prevState) {
//     const { searchQuery, currentPage } = this.state;

//     if (
//       prevState.searchQuery !== searchQuery ||
//       prevState.currentPage !== currentPage
//     ) {
//       await this.fetchImages();
//     }
//   }

    fetchImages ();
   };   const [ searchQuery, currentPage ]); 

//     this.setState({ isLoading: true });

//     try {
//       const response = await getAPI(searchQuery, currentPage);

//       console.log(response);

//       const { totalHits, hits } = response;

//       if (hits.length === 0) {
//         toast.error(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         this.setState({ isLoading: false });
//         return;
//       }

//       

//       if (currentPage * 12 >= totalHits) {
//         this.setState({ isEnd: true });
//         toast("We're sorry, but you've reached the end of search results.", {
//           icon: '👏',
//           style: {
//             borderRadius: '10px',
//             background: '#333',
//             color: '#fff',
//           },
//         });
//       }

//       this.setState(prevState => ({
//         images: currentPage === 1 ? hits : [...prevState.images, ...hits],
//         isEnd: prevState.images.length + hits.length >= totalHits,
//       }));
//     } catch (error) {
//       this.setState({ isError: true });
//       toast.error('Oops, something went wrong! Reload this page!');
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

  const handleSearchSubmit = query => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery === '') {
      alert(`Empty string is not a valid search query. Please type again.`);
      return;
    }

    if (normalizedQuery === normalizedCurrentQuery) {
      alert(
        `Search query is the same as the previous one. Please provide a new search query.`
      );
      return;
    }

      setSearchQuery(normalizedQuery);
      setCurrentPage(1);
      setImages([]);
      setIsEnd(false);
  };


//     if (normalizedQuery !== normalizedCurrentQuery) {
//       this.setState({
//         searchQuery: normalizedQuery,
//         currentPage: 1,
//         images: [],
//         isEnd: false,
//       });
//     }
//   };

  const handleLoadMore = () => {
    if (!isEnd) {
      this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
    } else {
      alert("You've reached the end of the search results.");
    }
  };

//   render() {
//     const { images, isLoading, isError, isEnd } = this.state;
//     return (
//       <div className={styles.App}>
//         <SearchBar onSubmit={this.handleSearchSubmit} />
//         <ImageGallery images={images} />
//         {isLoading && <Loader />}
//         {!isLoading && !isError && images.length > 0 && !isEnd && (
//           <Button onClick={this.handleLoadMore} />
//         )}
//         {isError && <p>Something went wrong. Please try again later.</p>}
//         <Toaster position="top-right" reverseOrder={false} />
//       </div>
//     );
//   }
// }

export default App;
