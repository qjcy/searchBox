/**
 * Created by 李全杰 on 2017/3/16.
 */

    $('#searchInput').bind('keyup',function (e) {
        var searchText = $('#searchInput').val();
        $.getJSON('http://api.bing.com/qsonhs.aspx?q='+searchText,function (d) {
            var d = d.AS.Results[0].Suggests;
            var html = '';
            for(var i = 0; i<d.length; i++){
                html += '<li>'+d[i].Txt+'</li>';
            }
            $('#searchResult').html(html);
            $("#search-suggest").show().css({
                top: $('#search-form').offset().top + $('#search-form').height()+10,
                left:$('#search-form').offset().left - 1,
                position: 'absolute'
            });
        },'json');
    }) ;
