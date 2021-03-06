﻿
module.exports = function(option) {
    return $.extend({
        name: 'common/linktab',
        template: '<div class="am-u-sm-12 am-u-md-6 am-u-lg-4">' +
            '    <section class="am-panel am-panel-<%=obj.style||"secondary"%>">' +
            '        <header class="am-panel-hd">' +
            '            <h3 class="am-panel-title"><%=obj.title%></h3>' +
            '        </header>' +
            '        <div class="am-panel-bd">' +
            '            <ul class="am-list">' +
            '                <%var list = obj.rows; for(var i=0, len=list.length; i<len; i++){%>' +
            '                <li style="padding:8px"><span ><a data-on="?m=<%=config.isEnv ? "goEnv" : "go"%>&target=_blank" data-url="<%=list[i].href%>"><%=list[i].name%></a></span>' +
            '               <button type="button" class="am-btn am-btn-default am-btn-xs" style="float:right" data-on="?m=goQR<%=config.isEnv ? "&env=1" : ""%>" data-url="<%=list[i].href%>">二维码</button></li><%}%>' +
            '            </ul>' +
            '        </div>' +
            '    </section>' +
            '</div>'
    }, option);
};
