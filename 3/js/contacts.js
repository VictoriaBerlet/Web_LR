$(function () {
  $("#contactChoice1").on("click", function () {
    ajaxQuery(1)
  })
  $("#contactChoice2").on("click", function () {
    ajaxQuery(2)
  })
  $("#contactChoice3").on("click", function () {
    ajaxQuery(3)
  })
  
  function ajaxQuery (placeId) {
    $.ajax({
      url: "/places/",
      data: {
        placeId: placeId,
      },
      contentType: "application/json",
      success: function (response) {
        let info = $("#place")
        info.html("")
        info.append("<p>Номер пункта: " + response.id + "</p> <hr> " +
          "<p>Адресс пункта: " + response.address + "</p> <hr> " +
          "<p>Номер телефона:" + response.phone + " </p> <hr>" +
          "<p>Время работы: " + response.workTime + "</p><hr>")
      },
    })
  }
})
