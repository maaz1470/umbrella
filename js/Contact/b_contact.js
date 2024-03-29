const loader = document.getElementById('preloader')

window.onload = function () {
    // const temp_data = document.getElementById('body').innerHTML
    // document.getElementById('body').innerHTML = '';
    setTimeout(() => {

        // Vendor Css Load Here
        var stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = 'css/vendors.css';
        document.head.appendChild(stylesheet);
    }, 200)
    setTimeout(() => {

        // function js Load Here
        const script_function = document.createElement('script');
        script_function.src = 'js/functions.js';
        document.body.appendChild(script_function);

    }, 500);
    setTimeout(() => {



        // Notify Css Load Here
        const notify = document.createElement('script');
        notify.src = 'js/notify_func.js';
        document.body.appendChild(notify);

        // Content
        // document.getElementById('body').innerHTML = temp_data;

        // Stiky js Load Here
        const sticky = document.createElement('script');
        sticky.src = 'js/theia-sticky-sidebar.js';
        document.body.appendChild(sticky);




        // Loading
        // loader.style.display = 'none';

        jQuery(".left-imgbox").theiaStickySidebar({ additionalMarginTop: 80 }), jQuery(".right-imgbox").theiaStickySidebar({ additionalMarginTop: 80 })

    }, 3000);

    setTimeout(() => {

        // Google Font Load
        var gFont = document.createElement('link');
        gFont.rel = 'stylesheet';
        gFont.href = 'https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap';
        document.head.appendChild(gFont);



        // Google Analytics Load Here
        const googleTag = document.createElement('script');
        googleTag.src = 'https://www.googletagmanager.com/gtag/js?id=UA-17468101-1';
        document.body.appendChild(googleTag);

        // Google Gtag Activation
        function gtag() { dataLayer.push(arguments) } window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-17468101-1")

    }, 4000)

    setTimeout(() => {


        // Recaptcha
        const recaptcha = document.createElement('script');
        recaptcha.src = 'https://www.google.com/recaptcha/api.js';
        document.head.appendChild(recaptcha);


        $(document).ready(function () { $(".btn_1").click(function (e) { console.log(grecaptcha.getResponse()), "" == grecaptcha.getResponse() && (e.preventDefault(), alert("Please fill all fields correctly. ")) }) })


        !function (e, t, n) { var s, o = e.getElementsByTagName(t)[0]; e.getElementById(n) || ((s = e.createElement(t)).id = n, s.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=1365407963556488", s.setAttribute('defer', null), o.parentNode.insertBefore(s, o)) }(document, "script", "facebook-jssdk")
    }, 4500)
};