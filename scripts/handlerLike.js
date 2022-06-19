import { API_URL_PHOTOS } from './const.js'
export const handlerLike = (photoLike) => {
	const url = new URL(`${API_URL_PHOTOS}/${photoLike.id}/like`);

	const toggleLike = (data) => {
		if (ddata.photo.liked_by_user) {
			photoLike.classList.remove('photo__like_o');
		} else {
			photoLike.classList.add('photo__like_o');
		}
		photoLike.likeByUser = data.photo.liked_by_user;
		photoLike.textContent = data.photo.likes;
	}
	fetch(url, {
		method: photoLike.likeByUser ? 'DELETE' : 'POST',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
		},
	})
		.then((response) => response.json())
		.then(toggleLike);
};