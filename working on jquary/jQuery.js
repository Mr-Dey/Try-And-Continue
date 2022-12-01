$(function () {
    $(".h1").on("click", function () {
        open("http://www.google.com")
        console.log("clicked on h1")
    })
    $(".input_class").on("keypress", function (event) {
        if (event.key === "Enter") {
            console.log(event.key)
            $("#Search_btn_id").trigger("click");
        }
    });
})