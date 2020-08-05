<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Examples</title>
    </head>
    <body >
        <div id="loader">
            <img src="/assets/meta/multi/load.svg" id="preload">
            <div id="play">
                <img src="/assets/meta/multi/play.svg" width="40px">
            </div>
            <div id="mute">
                <img src="/assets/meta/multi/unmute.svg" id="sound_img" width="40px">
            </div>
            <div id="wsda">
                <img src="/assets/meta/multi/keys.png" width="100px">
            </div>
            <div class="mob_help">
                <img src="/assets/meta/multi/drag.svg" width="40px">
            </div>
            
            <div id="container"></div>
        </div>
        <script src="{{asset('js/jquery-3.2.1.min.js')}}"></script>
        <script src="{{asset('js/jquery.ba-dotimeout.min.js')}}"></script>
       
        <script src="{{asset('js/Pizzicato.min.js')}}"></script>
        
        <script src="{{asset('js/json/mjson.js')}}"></script>
        
        <script src="{{asset('js/meta/HTMLControlls.js')}}"></script>
        <script src="{{asset('js/meta/AudioControlls.js')}}"></script>
        <script src="{{asset('js/meta/MultiScene.js')}}" type="module"></script>
    </body>
</html>
