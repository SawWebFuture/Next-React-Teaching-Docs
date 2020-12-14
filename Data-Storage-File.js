// Store data locally with this file in actions folder

const ALBUM_DATA = [
    {
        id: '1',
        name: 'Two Friends One Century Of Music',
        releaseYear: 2015,
        description: 'Dois dos maiores nomes da música popular do século XX juntos no palco, acompanhados por seus violões.',
        rating: 4.8,
        genre: 'drama',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81KdkS2-j4L._SL1500_.jpg'
    },
    {
        id: '2',
        name: 'Brazil Classics 4: The Best of Tom Zé',
        releaseYear: 2008,
        description: 'Zes music is impossible to categorise.',
        rating: 4.7,
        genre: 'action, crime, drama',
        image: 'https://m.media-amazon.com/images/I/81Dwxqn8BDL._SS500_.jpg'
    },
    {
        id: '3',
        name: 'Jorge Ben [LP]',
        releaseYear: 2018,
        description: 'Jorge Ben, is a Brazilian popular musician. His characteristic style fuses samba, funk, rock and bossa nova with lyrics that blend humor and satire with often esoteric subject matter.',
        rating: 4.9,
        genre: 'adventure, drama, fantasy',
        image: 'https://images-na.ssl-images-amazon.com/images/I/91Onv6GDEGL._SY355_.jpg'
    }
];

export const getAlbums = () => {
    // Create async functionality
    return ALBUM_DATA;
}

/// in main file
import { getAlbums } from '../actions'

// before return:
  const albums = getAlbums()
 
//pass the data into the prop
<AlbumList
  albums={albums}
/>
  
