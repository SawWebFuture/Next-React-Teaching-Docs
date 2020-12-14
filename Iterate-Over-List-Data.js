// How to iterate data in React

// Dummy data in index.js outside of main return

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
    description: 'orge Ben, is a Brazilian popular musician. His characteristic style fuses samba, funk, rock and bossa nova with lyrics that blend humor and satire with often esoteric subject matter.',
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image: 'https://images-na.ssl-images-amazon.com/images/I/91Onv6GDEGL._SY355_.jpg'
  }
];

// Iterate over list with map => names.map((name => (<h1>Hello World</h1>))

import React from 'react'

class AlbumList extends React.Component {

    renderAlbums(albums) {
        return albums.map(album =>
        (
            <div key={album.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <a href="#"><img className="card-img-top" src={album.image} alt="" /></a>
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="#">{album.name}</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">{album.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{album.rating}</small>
                    </div>
                </div>
            </div>
        )
        )
    }

    render() {
        const { albums } = this.props;

        return (
            <React.Fragment>
                { this.renderAlbums(albums)}
            </React.Fragment>
        )
    }
}

export default AlbumList;
