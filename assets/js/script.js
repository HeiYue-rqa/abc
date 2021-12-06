//   datepicker for search
  $(function () {
    $("#startdate").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0,
      onClose: function () {
        $("#enddate").datepicker("change", {
          minDate: new Date($("#startdate").val()),
        });
      },
    });
    $("#sdate").click(function () {
      $("#startdate").focus();
    });

    $("#enddate").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0,
      onClose: function () {
        $("#startdate").datepicker("change", {
          maxDate: new Date($("#enddate").val()),
        });
      },
    });
    $("#edate").click(function () {
      $("#enddate").focus();
    });
  });


//   slider for banner
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 5000);


// swiper
const swiper = new Swiper('.swiper-card', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  var swiperBanner = new Swiper(".swiper-banner", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 3500,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });