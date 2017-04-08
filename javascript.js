
var RandomAvatarId = [  '204422947_2-s4-v1',
                        '202203481_5-s4-v1',
                        '202204404_1-s4-v1',
                        '202070582_7-s4-v1',
                        '109783776_0-s4-v1',
                        '123973985_10-s4-v1',
                        '123973985_10-s4-v1',
                        '74498096_0-s4-v1',
                        '76342905_0-s4-v1',
                        '108590751_0-s4-v1',
                        '117010983_0-s4-v1',
                        '2309961_0-s4-v1',
                        '103172619_0-s4-v1',
                        '17480919_0-s4-v1',
                        '2204128_0-s4-v1',
                        '114862695_0-s4-v1',
                        '135474488_0-s4-v1',
                        '114869928_0-s4-v1',
                        '118576805_0-s4-v1',
                        '121931325_0-s4-v1',
                        '2204688_0-s4-v1',
                        '120785996_0-s4-v1',
                        '104678677_0-s4-v1',
                        '104556134_0-s4-v1',
                        '102981754_0-s4-v1',
                        '1866231_0-s4-v1',
                        '2203656_10-s4-v1',
                        '103488527_10-s4-v1',
                        '4055421_10-s1-v1',
                        '1884643_20-s4-v1',
                        '1866965_20-s1-v1',
                        '188022860_2-s4-v1',
                        '111843723_20-s4-v1'];

var $AvatarId = null
var $NPC1Code = null
var $NPC2Code = null
var $NPC3Code = null
var $NPC4Code = null
var $NPC5Code = null

    //To Page 2
$(document).ready(function () {
    $("#playbutton").click(function () {
        $(".page1").fadeOut();
        $(".page2").fadeIn(2000)
    });

    $("#btnPersonalAvatar").click(function () {

        window.$AvatarId = $('#txtPersonalAvatar').val();

        $('#imgAvatar1').attr("src", 'https://render.bitstrips.com/render/6972338/' + $AvatarId + ".png");
    });
    $("#btnRandomAvatar").click(function () {

        window.$AvatarId = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];

        $('#imgAvatar1').attr("src", 'https://render.bitstrips.com/render/6972338/' + $AvatarId + ".png");
    });

    //To Page 3 
    $("#btnStartGame").click(function () {

        window.$NPC1Code = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];
        window.$NPC2Code = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];
        window.$NPC3Code = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];
        window.$NPC4Code = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];
        window.$NPC5Code = RandomAvatarId[Math.floor(Math.random() * RandomAvatarId.length)];

        $(".page2").fadeOut();
        $(".page3").fadeIn(2000);

        $('#imgNPC3').attr("src", 'https://render.bitstrips.com/v2/cpanel/9157872-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar3A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9090400-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar3B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10136844-' + $AvatarId + ".png?transparent=1");

        //Second Level
        //To Page 4
        $('#imgAvatar3A').click(function () {
            $(".page3").fadeOut();
            $(".page4").fadeIn(2000);

            $('#imgNPC4').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188020-' + $NPC1Code + ".png?transparent=1");
            $('#imgAvatar4A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9101092-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar4B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9940762-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 5 
        $('#imgAvatar3B').click(function () {
            $(".page3").fadeOut();
            $(".page5").fadeIn(2000);

            $('#imgNPC5').attr("src", 'https://render.bitstrips.com/v2/cpanel/9941846-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar5A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9218607-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar5B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10212768-' + $AvatarId + ".png?transparent=1");
        });

    //Thrid Level
    //To Page 6 
    $('#imgAvatar4A').click(function () {
        $(".page4").fadeOut();
        $(".page6").fadeIn(2000);

        $('#imgNPC6').attr("src", 'https://render.bitstrips.com/v2/cpanel/7933878-' + $NPC1Code + ".png?transparent=1");
        $('#imgAvatar6A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9991446-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar6B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9101103-' + $AvatarId + ".png?transparent=1");
    });

        //To Page 7
    $('#imgAvatar4B').click(function () {
        $(".page4").fadeOut();
        $(".page7").fadeIn(2000);
        $('#imgNPC7').attr("src", 'https://render.bitstrips.com/v2/cpanel/8810285-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar7A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214975-' + $NPC2Code + ".png?transparent=1");
        $('#imgAvatar7B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9788623-' + $AvatarId + ".png?transparent=1");
    });

    //To Page 8 
    $('#imgAvatar5A').click(function () {
        $(".page5").fadeOut();
        $(".page8").fadeIn(2000);

        $('#imgNPC8').attr("src", 'https://render.bitstrips.com/v2/cpanel/8640391-' + $NPC1Code + ".png?transparent=1");
        $('#imgAvatar8A').attr("src", 'https://render.bitstrips.com/v2/cpanel/7854159-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar8B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10188002-' + $NPC1Code + ".png?transparent=1");
    });

        //To Page 9 
    $('#imgAvatar5B').click(function () {
        $(".page5").fadeOut();
        $(".page9").fadeIn(2000);

        $('#imgNPC9').attr("src", 'https://render.bitstrips.com/v2/cpanel/10213819-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar9A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10161328-' + $AvatarId + ".png?transparent=1");
        $('#imgAvatar9B').attr("src", 'https://render.bitstrips.com/v2/cpanel/8640391-' + $AvatarId + ".png?transparent=1");
    });

        //Fourth Level
        //To Page 10 
        $('#imgAvatar6A').click(function () {
            $(".page6").fadeOut();
            $(".page10").fadeIn(2000);

            $('#imgNPC10').attr("src", 'https://render.bitstrips.com/v2/cpanel/7591129-' + $NPC2Code + ".png?transparent=1");
            $('#imgAvatar10A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9176167-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar10B').attr("src", 'https://render.bitstrips.com/v2/cpanel/8149260-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 11 
        $('#imgAvatar6B').click(function () {
            $(".page6").fadeOut();
            $(".page11").fadeIn(2000);

            $('#imgNPC11').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214721-' + $NPC3Code + ".png?transparent=1");
            $('#imgAvatar11A').attr("src", 'https://render.bitstrips.com/v2/cpanel/8149234-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar11B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9886128-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 12 
        $('#imgAvatar7A').click(function () {
            $(".page7").fadeOut();
            $(".page12").fadeIn(2000);

            $('#imgNPC12').attr("src", 'https://render.bitstrips.com/v2/cpanel/9946964-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar12A').attr("src", 'https://render.bitstrips.com/v2/cpanel/9945144-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar12B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9602791-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 13 
        $('#imgAvatar7B').click(function () {
            $(".page7").fadeOut();
            $(".page13").fadeIn(2000);

            $('#imgNPC13').attr("src", 'https://render.bitstrips.com/v2/cpanel/9205465-' + $NPC4Code + ".png?transparent=1");
            $('#imgAvatar13A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10213818-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar13B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214013-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 14
        $('#imgAvatar8A').click(function () {
            $(".page8").fadeOut();
            $(".page14").fadeIn(2000);

            $('#imgNPC14').attr("src", 'https://render.bitstrips.com/v2/cpanel/9988576-' + $NPC1Code + ".png?transparent=1");
            $('#imgAvatar14A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10185834-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar14B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9954519-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 15
        $('#imgAvatar8B').click(function () {
            $(".page8").fadeOut();
            $(".page15").fadeIn(2000);

            $('#imgNPC15').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214013-' + $NPC1Code + ".png?transparent=1");
            $('#imgAvatar15A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10211676-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar15B').attr("src", 'https://render.bitstrips.com/v2/cpanel/10211503-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 16 
        $('#imgAvatar9A').click(function () {
            $(".page9").fadeOut();
            $(".page16").fadeIn(2000);

            $('#imgNPC16').attr("src", 'https://render.bitstrips.com/v2/cpanel/9951746-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar16A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214711-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar16B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9990837-' + $AvatarId + ".png?transparent=1");
        });

        //To Page 17 
        $('#imgAvatar9B').click(function () {
            $(".page9").fadeOut();
            $(".page17").fadeIn(2000);

            $('#imgNPC17').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214008-' + $NPC1Code + ".png?transparent=1");
            $('#imgAvatar17A').attr("src", 'https://render.bitstrips.com/v2/cpanel/10214013-' + $AvatarId + ".png?transparent=1");
            $('#imgAvatar17B').attr("src", 'https://render.bitstrips.com/v2/cpanel/9945793-' + $AvatarId + ".png?transparent=1");
        });

        //Fifth Level--Endings
        //To Page 18 
        $('#imgAvatar10A').click(function () {
            $(".page10").fadeOut();
            $(".page18").fadeIn(2000);

            $('#imgEnding18').attr("src", 'https://render.bitstrips.com/v2/cpanel/7854112-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain18").click(function () {
            $(".page18").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 19 
        $('#imgAvatar10B').click(function () {
            $(".page10").fadeOut();
            $(".page19").fadeIn(2000);

            $('#imgEnding19').attr("src", 'https://render.bitstrips.com/v2/cpanel/9991235-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain19").click(function () {
            $(".page19").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 20 
        $('#imgAvatar11A').click(function () {
            $(".page11").fadeOut();
            $(".page20").fadeIn(2000);

            $('#imgEnding20').attr("src", 'https://render.bitstrips.com/v2/cpanel/10155970-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain20").click(function () {
            $(".page20").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 21 
        $('#imgAvatar11B').click(function () {
            $(".page11").fadeOut();
            $(".page21").fadeIn(2000);

            $('#imgEnding21').attr("src", 'https://render.bitstrips.com/v2/cpanel/9542977-' + $AvatarId + ".png?transparent=1");
        });

            $("#btnPlayAgain21").click(function () {
                $(".page21").fadeOut();
                $(".page2").fadeIn(2000)
            });


        //To Page 22 
        $('#imgAvatar12A').click(function () {
            $(".page12").fadeOut();
            $(".page22").fadeIn(2000);

            $('#imgEnding22').attr("src", 'https://render.bitstrips.com/v2/cpanel/9090383-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain22").click(function () {
            $(".page22").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 23 
        $('#imgAvatar12B').click(function () {
            $(".page12").fadeOut();
            $(".page23").fadeIn(2000);

            $('#imgEnding23').attr("src", 'https://render.bitstrips.com/v2/cpanel/9788526-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain23").click(function () {
            $(".page23").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 24 
        $('#imgAvatar13A').click(function () {
            $(".page13").fadeOut();
            $(".page24").fadeIn(2000);

            $('#imgEnding24').attr("src", 'https://render.bitstrips.com/v2/cpanel/9988567-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain24").click(function () {
            $(".page24").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 25 
        $('#imgAvatar13B').click(function () {
            $(".page13").fadeOut();
            $(".page25").fadeIn(2000);

            $('#imgEnding25').attr("src", 'https://render.bitstrips.com/v2/cpanel/9942135-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain25").click(function () {
            $(".page25").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 26 Vicky
        $('#imgAvatar14A').click(function () {
            $(".page14").fadeOut();
            $(".page26").fadeIn(2000);

            $('#imgEnding26').attr("src", 'https://render.bitstrips.com/v2/cpanel/9669931-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain26").click(function () {
            $(".page26").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 27 Vicky
        $('#imgAvatar14B').click(function () {
            $(".page14").fadeOut();
            $(".page27").fadeIn(2000);

            $('#imgEnding27').attr("src", 'https://render.bitstrips.com/v2/cpanel/8810106-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain27").click(function () {
            $(".page27").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 28 Vicky
        $('#imgAvatar15A').click(function () {
            $(".page15").fadeOut();
            $(".page28").fadeIn(2000);

            $('#imgEnding28').attr("src", 'https://render.bitstrips.com/v2/cpanel/8338838-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain28").click(function () {
            $(".page28").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 29 Vicky
        $('#imgAvatar15B').click(function () {
            $(".page15").fadeOut();
            $(".page29").fadeIn(2000);

            $('#imgEnding29').attr("src", 'https://render.bitstrips.com/v2/cpanel/10192304-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain29").click(function () {
            $(".page29").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 30 
        $('#imgAvatar16A').click(function () {
            $(".page16").fadeOut();
            $(".page30").fadeIn(2000);

            $('#imgEnding30').attr("src", 'https://render.bitstrips.com/v2/cpanel/9130148-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain30").click(function () {
            $(".page30").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 31 
        $('#imgAvatar16B').click(function () {
            $(".page16").fadeOut();
            $(".page31").fadeIn(2000);

            $('#imgEnding31').attr("src", 'https://render.bitstrips.com/v2/cpanel/9669649-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain31").click(function () {
            $(".page31").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 32 
        $('#imgAvatar17A').click(function () {
            $(".page17").fadeOut();
            $(".page32").fadeIn(2000);

            $('#imgEnding32').attr("src", 'https://render.bitstrips.com/v2/cpanel/9157872-' + $AvatarId + ".png?transparent=1");
        });

        $("#btnPlayAgain32").click(function () {
            $(".page32").fadeOut();
            $(".page2").fadeIn(2000)
        });

        //To Page 33 
        $('#imgAvatar17B').click(function () {
            $(".page17").fadeOut();
            $(".page33").fadeIn(2000);

            $('#imgEnding33').attr("src", 'https://render.bitstrips.com/v2/cpanel/8968038-' + $AvatarId + ".png?transparent=1");
        });

            $("#btnPlayAgain33").click(function () {
                $(".page33").fadeOut();
                $(".page2").fadeIn(2000)
            });

        });
        });