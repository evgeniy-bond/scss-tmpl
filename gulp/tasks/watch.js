var gulp = require('gulp'),
    path = require('path');


var watchTask = function () {
    var watchableTasks = ['img', 'html', 'css'];

    watchableTasks.forEach(function (taskName) {
        var task = config.tasks[taskName]
        if (task) {
            var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
            watch(glob, function () {
                require('./' + taskName)()
            })
        }
    })
}



gulp.task('watch', ['browserSync'], watchTask)
module.exports = watchTask