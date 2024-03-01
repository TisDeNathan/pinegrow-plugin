
window.pinegrowSetStagingMode = function(val) {
    var name = 'pinegrow_staging';
    var menu = document.querySelector('#wpadminbar .pg-admin-bar-menu');
    var menu_label = menu.querySelector('.ab-label');

    if(val) {
        document.cookie = name +'=1; Path=/;';
        menu.classList.add('pg-staging-mode');
    } else {
        document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        menu.classList.remove('pg-staging-mode');
    }
    menu_label.innerHTML = 'Reloading...';
    location.reload();
}