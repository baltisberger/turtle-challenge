var $builtinmodule = function (name) {

    var turtleModule = Sk.importModule("turtle", false, false);

    var mod = {};

    // mod.FrameManager = new Sk.builtin.func(function () {
    //     return Sk.misceval.callsimOrSuspend(turtleModule.$d["FrameManager"]);
    // });
    
    // mod.MouseHandler = new Sk.builtin.func(function () {
    //     return Sk.misceval.callsimOrSuspend(turtleModule.$d["MouseHandler"]);
    // });

    // mod.EventManager = new Sk.builtin.func(function () {
    //     return Sk.misceval.callsimOrSuspend(turtleModule.$d["EventManager"]);
    // });

    mod.Screen = new Sk.builtin.func(function () {
        return Sk.misceval.callsimOrSuspend(turtleModule.$d["Screen"]);
    });

    mod.Robot = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, shape) {
            self.robot = {};
        });
        $loc.hello = new Sk.builtin.func(function(self) {
            return "Hello, I am a robot!"
        });
        $loc.shape = new Sk.builtin.func(function(self, shape) {
            return Sk.misceval.callsimOrSuspend(turtleModule.$d["shape"], shape);
        });
        $loc.forward = new Sk.builtin.func(function(self, steps) {
            return Sk.misceval.callsimOrSuspend(turtleModule.$d["forward"], steps);
        });
        $loc.backward = new Sk.builtin.func(function(self, steps) {
            return Sk.misceval.callsimOrSuspend(turtleModule.$d["backward"], steps);
        });
        $loc.left = new Sk.builtin.func(function(self, degree) {
            return Sk.misceval.callsimOrSuspend(turtleModule.$d["left"], degree);
        });
        $loc.right = new Sk.builtin.func(function(self, degree) {
            return Sk.misceval.callsimOrSuspend(turtleModule.$d["right"], degree);
        });
        // $loc.onkey = new Sk.builtin.func(function(self, e) {
        //     e = e || window.event;
        //     if (e.keyCode == '38') { // up arrow
        //         return Sk.misceval.callsimOrSuspend(turtleModule.$d["forward"], 5);
        //     }
        //     else if (e.keyCode == '40') { // down arrow
        //         return Sk.misceval.callsimOrSuspend(turtleModule.$d["backward"], 5);
        //     }
        //     else if (e.keyCode == '37') { // left arrow
        //         return Sk.misceval.callsimOrSuspend(turtleModule.$d["left"], 5);
        //     }
        //     else if (e.keyCode == '39') { // right arrow
        //         return Sk.misceval.callsimOrSuspend(turtleModule.$d["right"], 5);
        //     }
        // });
    }, 'Robot');

    return mod;

}