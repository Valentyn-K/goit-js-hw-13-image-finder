const makeGridItem = ({ webformatURL, likes, views, comments, downloads }) => {
  const li = document.createElement('li');
  li.classList.add('grid-item');
  li.classList.add('gallery-item');

  const divPhotoCard = document.createElement('div');
  divPhotoCard.classList.add('photo-card');

  const img = document.createElement('img');
  img.classList.add('image');
  img.src = webformatURL;

  const divStats = document.createElement('div');
  divStats.classList.add('stats');

  const pLikes = document.createElement('p');
  pLikes.classList.add('stats-item');
  pLikes.textContent = likes;

  const iLikes = document.createElement('i');
  iLikes.classList.add('material-icons');
  iLikes.textContent = 'thumb_up';

  pLikes.appendChild(iLikes);

  const pViews = document.createElement('p');
  pViews.classList.add('stats-item');
  pViews.textContent = views;

  const iViews = document.createElement('i');
  iViews.classList.add('material-icons');
  iViews.textContent = 'visibility';

  pViews.appendChild(iViews);

  const pComment = document.createElement('p');
  pComment.classList.add('stats-item');
  pComment.textContent = comments;

  const iComment = document.createElement('i');
  iComment.classList.add('material-icons');
  iComment.textContent = 'comment';

  pComment.appendChild(iComment);

  const pDowload = document.createElement('p');
  pDowload.classList.add('stats-item');
  pDowload.textContent = downloads;

  const iDowload = document.createElement('i');
  iDowload.classList.add('material-icons');
  iDowload.textContent = 'cloud_download';

  pDowload.appendChild(iDowload);

  divStats.append(pLikes, pViews, pComment, pDowload);

  divPhotoCard.append(img, divStats);

  li.appendChild(divPhotoCard);

  return li;
};
export default makeGridItem;
