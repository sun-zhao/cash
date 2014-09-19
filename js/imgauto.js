/**
 * Created with JetBrains WebStorm.
 * User: zhaoyang
 * Date: 13-11-11
 * Time: 下午2:27
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    var $step = $('.step');
    var $step_box = $('.step_box');
    function imgsize(){
        var Wh = $(window).height()-77-40;
        $autoImg = $('.autoImg');
        $autoImg.css("height",Wh);
        $step.height($(window).height());
        $step_box.height(($step.height()+70)*4);
    }
    imgsize();
    $(window).resize(function(){
         imgsize();
    });
    var txt_out = $('.txt_out');
    txt_out.hover(function(){
        var $this = $(this);
        if($this.hasClass('current')){

        }else{
             $this.find().animate({opacity:1},300);
        }
    });
    $('.check').click(function(){
        var $this = $(this);
        if($this.hasClass('checked')){
            $this.removeClass('checked')
        }else{
            $this.addClass('checked');
        }
    });
    var $wall_page = $step_box.find('.step');
        $main = $('.main');
        top_n = 0;
    $main.on('mousewheel',function(a,b){
        if(!$step_box.is(':animated')){
            if(top_n < 0 && top_n > -($wall_page.length-1) || top_n == 0 && b == -1 || top_n == -($wall_page.length-1) && b == 1){
                top_n += b>0?1:-1;
                $step_box.animate({
                    'top':top_n*($step.height()+50)
                },800);
            }
        }
    });
});