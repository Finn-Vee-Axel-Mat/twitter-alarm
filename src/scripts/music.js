export const playNoisyAlarm = () => {
	var audio = new Audio('https://lasonotheque.org/UPLOAD/mp3/0161.mp3');
	audio.volume = (localStorage.getItem("audioAlert")/100);
	audio.play();
}

export const playGentleRefresh = () => {
	var audio = new Audio('https://lasonotheque.org/UPLOAD/mp3/0840.mp3');
	audio.volume = (localStorage.getItem("audioAlert")/200);
	audio.play();
}

export const playGentleAlarm = () => {
	var audio = new Audio('https://lasonotheque.org/UPLOAD/mp3/0433.mp3');
	audio.volume = (localStorage.getItem("audioAlert")/100);
	audio.play();
}