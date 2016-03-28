$(document).ready(function () {
    $("#theForm").on("submit", function (event) {
        var name = $("#username").val(),
            auth = $('#password').val() === 'password' && name === 'jennifer',
            msgBox = $("#welcome"),
            origMsg = msgBox.html(),
            newMsg = 'Welcome. <span>' + name + '.' + '</span>',
            message = name !== '' && auth ? newMsg : origMsg;

        msgBox.html(message);
        if (auth) {
            $('#flippr .flipper').addClass('logged-in');
        }

        event.preventDefault();
    });

});
