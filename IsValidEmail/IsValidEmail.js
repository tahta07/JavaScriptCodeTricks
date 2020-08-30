function IsValidEmail(email) {
        if (email.length <= 2) {
            return false;
        }

        if (email.indexOf("@") == -1) {
            return false;
        }
 
        var parts = email.split("@");
        var dot = parts[1].indexOf(".");
        var len = parts[1].length;
        var dotSplits = parts[1].split(".");
        var dotCount = dotSplits.length - 1;
    
        if (dot == -1 || dot < 2 || dotCount > 2) {
            return false;
        }

        for (var i = 0; i < dotSplits.length; i++) {
            if (dotSplits[i].length == 0) {
                return false;
            }
        }
 
        return true;
    };