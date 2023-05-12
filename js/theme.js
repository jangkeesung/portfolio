if (getCookie('theme') == '' || getCookie('theme') == 'dark') {
    setCookie('theme', 'dark', 365);
    document.documentElement.style.setProperty("--light-color", "#DDD");
    document.documentElement.style.setProperty("--dark-color", "#111");
} else if (getCookie('theme') == 'light') {
    document.documentElement.style.setProperty("--light-color", "#333");
    document.documentElement.style.setProperty("--dark-color", "#EEE");
}