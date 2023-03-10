import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, async = true) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    method: 'GET',
    data: { q: query.trim() },
    success: callback,
    async: true,
    key: YOUTUBE_API_KEY
  });
};

export default searchYouTube;
