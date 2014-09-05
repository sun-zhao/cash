/**
 * Created with JetBrains WebStorm.
 * User: zhaoyang
 * Date: 13-11-11
 * Time: 下午2:27
 * To change this template use File | Settings | File Templates.
 */
$(function(){
    function imgsize(){
        var Wh = $(window).height()-77-40;
        $autoImg = $('.autoImg');
        $autoImg.css("height",Wh);
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
});