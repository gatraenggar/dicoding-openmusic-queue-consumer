/* eslint-disable require-jsdoc */
const {Pool} = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylistSongs(playlistId) {
    const query = {
      text: `SELECT * FROM playlistsongs 
             JOIN music ON playlistsongs.song_id = music.id
             WHERE playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this._pool.query(query);
    return result.rows;
  }
}

module.exports = PlaylistsService;
