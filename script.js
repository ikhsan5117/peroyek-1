$(document).ready(function () {
    // Tambahkan efek glow pada ikon
    $(".input_text").focus(function () {
        $(this).prev('.fa').addClass('glowicon');
    });

    $(".input_text").focusout(function () {
        $(this).prev('.fa').removeClass('glowicon');
    });

    // Logika login
    $("#login_button a").click(function (e) {
        e.preventDefault();

        const username = $(".input_group input").eq(0).val();
        const password = $(".input_group input").eq(1).val();

        if (username === "ikhsan" && password === "123456") {
            alert("Login berhasil! Selamat datang, Ikhsan.");
        } else {
            alert("Username atau password salah. Coba lagi.");
        }
    });
});
