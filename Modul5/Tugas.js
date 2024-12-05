$(document).ready(function () {
    // Event untuk pencarian
    $("#search").on("input", function () {
        let query = $(this).val().toLowerCase(); // Ambil input pencarian
        $(".gallery img").each(function () {
            let altText = $(this).attr("alt").toLowerCase(); // Ambil atribut alt
            if (altText.includes(query)) {
                $(this).show(); // Tampilkan gambar jika cocok
            } else {
                $(this).hide(); // Sembunyikan gambar jika tidak cocok
            }
        });
    });

    // Modal logic untuk memperbesar gambar
    $(".gallery img").click(function () {
        $("#Modal").css("display", "block");
        $("#img01").attr("src", this.src);
        $("#caption").text(this.alt);
    });

    $(".close").click(function () {
        $("#Modal").css("display", "none");
    });
});
