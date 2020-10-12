import Plugin from 'src/plugin-system/plugin.class';

export default class Modal extends Plugin {

    /**
     * @desc: Initialize plugin
     */
    init() {
        // Checks if age cookie is already set
        const isAgeCookie = this.getCookie('age18plus');

        // If age cookie is not set, open modal and ask for age
        if (!isAgeCookie) {
            // Add event to modal button
            this.addButtonEvent();
            // Open modal
            $('.age-modal').show();
        }
    }

    /**
     * @desc: Add event to modal submit button, wich sets a cookie and closes the modal
     */
    addButtonEvent() {
        // If button in modal was clicked
        $('.age-modal-button').click(() => {
            // Set a cookie that person has confirmed to be at least 18 years old
            this.setCookie('age18plus', true, 30);
            // Hide modal and give access to shop
            $('.age-modal').hide();
        });
    }

    /**
     * @desc: Sets a cookie with expiration time
     * @source: https://www.w3schools.com/js/js_cookies.asp
     */
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        const expires = 'expires='+ d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    /**
     * @desc: gets a cookie
     * @source: https://www.w3schools.com/js/js_cookies.asp
     */
    getCookie(cname) {
        const name = cname + '=';
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return '';
    }
}
