function main() {
    var shift = false;
    var caps = false;

    $("td").hover(function () {
        $(this).css('cursor','pointer');
    }, function() {
        $(this).css('cursor','auto');
    });

    $("td").click(function () {
        var input = $(this).text();
		if (input == "Space") {
            var space = " ";
			input = space;
		}
		
        if (input == "Shift") {
            if (shift == true) {
                $(this).css('background-color', '#FFFFFF');
                shift = false;
            } else {
                $(this).css('background-color', '#DDDDDD');
                shift = true;
            }
        }
        else if (input == "Delete") {
            var input = $(".inputbox").text();
            var lastChar = input.length - 1;
            $(".inputbox").text(input.substring(0, lastChar));
        }
        else if (input == "Caps") {
            if (caps == true) {
                $(this).css('background-color', '#FFFFFF');
                caps = false;
            } else {
                $(this).css('background-color', '#DDDDDD');
                caps = true;
            }
        }
        else {
            $("td.shift").css('background-color','#FFFFFF');
				input = input.toLowerCase();
            if ((shift == true&&caps!=true) || (caps == true&&shift!=true)) {
                input = input.toUpperCase();
            }else if((shift==true&&caps==true)|| (caps !=true&&shift==true)) {
                input = input.toLowerCase();
            }

            var output = $(".inputbox").text() + input;
            $(".inputbox").text(output);
            shift = false;
        }
    });
}

$(document).ready(function() {
    main();
});