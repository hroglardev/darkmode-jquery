const theme = $('html');

const darkButton = $('#dark');
const lightButton = $('#light');

darkButton.on('click', () => theme.attr('data-bs-theme', 'dark'));
lightButton.on('click', () => theme.attr('data-bs-theme', 'light'));
