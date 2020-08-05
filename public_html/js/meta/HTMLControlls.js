var HTMLControlls = {
    drop_help: function () {
        $('.mob_help').css('display', 'none');
    },
    drop_wsda: function () {
        $('#wsda').css('opacity', '0');
    },
    gltfReady: function () {
        $('#preload').remove();
        $('#container').css('opacity', 1);
        $('#play').css('opacity', '0.5');
        $('.mob_help').css('opacity', '1');
        $('#wsda').css('opacity', '0.5');
    },
    lastScene: function () {
        $('#loader').css('opacity', '0');
        $('.container').css('display', 'block');
    },
    endScene: function () {
        $('#loader').remove();
        $('.container').css({
            'opacity': '1'
        });
        $('.footer').css({
            'display': 'block'
        });
    },
    mobileIcon: function () {
        $('.mob_help').css('display', 'block');
        setTimeout(this.drop_help, 10000);
        $('#wsda').css('display', 'none');
    }

};
