import React, { useState } from 'react';

const MusicList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterArtist, setFilterArtist] = useState('');
  const [filterGenre, setFilterGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(12); // Number of songs per page

  const musicList = [
    { id: 1, title: 'Garden', artist: 'Tshego', genre: 'Amapiano', downloadLink: 'https://cdn.trendybeatz.com/audio/Tshego-Garden-(TrendyBeatz.com).mp3' },
    { id: 2, title: 'Sability', artist: 'Ayra starr', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Ayra-Starr-Sability-(TrendyBeatz.com).mp3' },
    { id: 3, title: 'Baby Riddim', artist: 'Fave', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Fave-Baby-Riddim-(TrendyBeatz.com).mp3' },
    { id: 4, title: 'The Key', artist: 'Tems', genre: 'Afro-fusion', downloadLink: 'https://cdn.trendybeatz.com/audio/Tems-The-Key-(TrendyBeatz.com).mp3' },
    { id: 5, title: 'Blinding lights', artist: 'The Weeknd', genre: 'Pop', downloadLink: 'https://cdn3.justnaija.me/uploads/music/2023/03/The-Weeknd-Blinding-Lights-Live-(JustNaija.com).mp3' },
    { id: 6, title: 'Twe-Twe', artist: 'Kizz Daniel', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Kizz-Daniel-Twe-Twe-(TrendyBeatz.com).mp3' },
    { id: 7, title: 'Soso', artist: 'Omah Lay', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Soso(TrendyBeatz.com).mp3' },
    { id: 8, title: 'Nah Money', artist: 'Davido ft The Cavemen', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/video/Davido-Na-Money-Ft-The-Cavemen-And-Angelique-Kidjo-New-Song-(TrendyBeatz.com).mp3' },
    { id: 9, title: 'Industry Baby', artist: 'Lil Naz X ft Jack Harlow ', genre: 'Hip Pop', downloadLink: 'https://cdn.trendybeatz.com/audio/Lil-Nas-X-Ft-Jack-Harlow-Industry-Baby-(TrendyBeatz.com).mp3' },
    { id: 10, title: '7 rings', artist: 'Ariana Grande', genre: 'Pop', downloadLink: 'https://highlifeng.com.ng/swahilisongs/wp-content/uploads/2024/01/Ariana_Grande_-_7_Rings.mp3' },
    { id: 11, title: 'Garden', artist: 'Kamauu', genre: 'Pop', downloadLink: 'https://www.trendyhiphop.com/wp-content/uploads/2024/02/Kamauu_-_Garden.mp3' },
    { id: 12, title: 'Anita', artist: 'The Cavemen', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/The-Cavemen-Anita-(TrendyBeatz.com).mp3' },
    { id: 13, title: 'Beautiful Things', artist: 'Benson Boone ', genre: ' Pop', downloadLink: 'https://bit.ly/downloadnewmp3' },
    { id: 14, title: 'Stuck With You', artist: 'Justin Bieber ft Ariana Grande', genre: 'Pop', downloadLink: 'https://olagist.net/wp-content/uploads/2020/05/Justin_Bieber_Ariana_Grande_-_Stuck_with_U.mp3' },
    { id: 15, title: 'One Dance', artist: 'Drake ft Wizkid', genre: 'Pop', downloadLink: 'https://naijaremix.net/uploads/music/2023/04/Drake-feat-WizKid-Kyla-One-Dance-(Naijaremix.Com).mp3' },
    { id: 16, title: 'Blood on the Dancefloor', artist: 'Odumodublavck ft Bloody Civilian & Wale', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Odumodublvck-Ft-Bloody-Civilian-and-Wale-Blood-On-The-Dance-Floor-(TrendyBeatz.com).mp3' },
    { id: 17, title: 'Try Me', artist: 'Tems', genre: ' Afrobeats', downloadLink: 'https://tooxclusive.com/wp-content/uploads/2019/12/Tems-Try-Me.mp3' },
    { id: 18, title: 'Escapism', artist: 'Bloody Civilian ft Fave', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Bloody-Civilian-Escapism-(TrendyBeatz.com).mp3' },
    { id: 19, title: 'Ahead Ahead', artist: 'Shallipopi', genre: 'Afrobeats', downloadLink: 'https://cdn.trendybeatz.com/audio/Shallipopi-Ahead-Ahead-(TrendyBeatz.com).mp3' },
    { id: 20, title: 'Break Every Chain', artist: 'Tasha Cobbs', genre: 'Gospel', downloadLink: 'https://files.ceenaija.com/wp-content/uploads/2020/01/Tasha-Cobbs-Break-Every-Chain-CeeNaija.com_.mp3' },
    { id: 21, title: 'I will Pray oh', artist: 'Ebuka Songs ', genre: 'Gospel', downloadLink: 'https://naijaremix.net/wp-content/uploads/2023/01/Ebuka_Songs_-_I_Will_Pray_Oh_Naijaremix.mp3' },
    { id: 22, title: 'Angel Numbers/Ten Toes', artist: 'Chris Brown', genre: 'Pop', downloadLink: 'https://store.hitsong.com.ng/wp-content/uploads/2024/03/Chris_Brown_-_Angel_Numbers_Ten_Toes_Hitsong.mp3?_gl=1*2mxjqa*_ga*MTM1MTY0NTMwOC4xNzEyNDExNzA1*_ga_DJFBJV5JG1*MTcxMjQxMTcwNS4xLjAuMTcxMjQxMTcwNS4wLjAuMA..' },
    // Add more songs as needed
  ];
  

  // Filter music by search query, artist, and genre
  const filteredMusic = musicList.filter(
    music =>
      music.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterArtist === '' || music.artist === filterArtist) &&
      (filterGenre === '' || music.genre === filterGenre)
  );

  // Pagination
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = filteredMusic.slice(indexOfFirstSong, indexOfLastSong);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Sort by title
  const sortMusicByTitle = () => {
    filteredMusic.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  };

  return (
    <div className="container mx-auto py-8 ">
      <h2 className="text-2xl  text-white font-bold font-extrabold mb-4">Download Music with Musify</h2>
      <h4 className="text-1xl text-white  font-bold mb-4">Free access to over 100 songs</h4>
      <div className="flex flex-wrap mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-md mr-2"
        />
        <select
          value={filterArtist}
          onChange={(e) => setFilterArtist(e.target.value)}
          className="p-2 border rounded-md mr-2"
        >
          <option value="">Filter by Artist</option>
          {Array.from(new Set(musicList.map(music => music.artist))).map(artist => (
            <option key={artist} value={artist}>{artist}</option>
          ))}
        </select>
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
          className="p-2 border rounded-md mr-2"
        >
          <option value="">Filter by Genre</option>
          {Array.from(new Set(musicList.map(music => music.genre))).map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
        <button
          onClick={sortMusicByTitle}
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
        >
          Sort by Title
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentSongs.map((music) => (
          <div key={music.id} className="p-4 bg-white rounded-md border-red-600">
            <h3 className="text-lg text-black font-semibold mb-2">{music.title}</h3>
            <p className="text-sm text-black mb-2">{music.artist}</p>
            <p className="text-sm text-black mb-2">{music.genre}</p>
            <a 
              href={music.downloadLink} 
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded block w-full text-center"
              download
            >
              Download
            </a>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <ul className="flex justify-center">
          {[...Array(Math.ceil(filteredMusic.length / songsPerPage)).keys()].map((number) => (
            <li key={number} className="mx-1">
              <button
                onClick={() => paginate(number + 1)}
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MusicList;
