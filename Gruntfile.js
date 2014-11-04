module.exports = function(grunt){
    grunt.initConfig({
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    'ui': 'tdd',
                    'recursive': true,
                    'reporter': 'mocha-istanbul'
                }
            },
        },
        jslint: {
            default: {
                src: [
                  './*.js',
                  'applications/*.js',
                ],
                exclude: [
                    './Gruntfile.js',
                ],
                directives: {
                    node: true,
                    plusplus: true,
                    predef: ['Set', 'System']
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-jslint');    
    grunt.loadNpmTasks('grunt-mocha-istanbul');    
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};