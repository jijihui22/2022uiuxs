$(document).ready(function(){
    $(".slider").bxSlider();


    $(".language div").click(function(){
        let i = $(this).index();
        $(".language div").removeClass("active");
        $(this).addClass("active");

        if(i == 1){
            $(".navbar ul").html(`
                <li><a href="#">COMPANY</a></li>
                <li><a href="#">MODELS</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            `)
        }else{
            $(".navbar ul").html(`
            <li><a href="#">회사소개</a></li>
            <li><a href="#">제품</a></li>
            <li><a href="#">프로젝트</a></li>
            <li><a href="#">네트워크</a></li>
        `)  
        }
    }); // lang

    $(window).scroll(function () {
        let scrollY = window.pageYOffset;
        console.log(scrollY)

        if (scrollY > 200) {
            $("#header").addClass("fixed");
        } else {
            $("#header").removeClass("fixed")
        }
    })
}); //ready