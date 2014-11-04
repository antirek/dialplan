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
	jsdoc : {
        dist : {
            src: ['./*.js','applications/*.js', 'test/*.js'], 
            options: {
                destination: 'docs'
        	   }
    	    }
	   },
       jslint: { // configure the task
          // lint your project's server code
          default: {
            src: [ // some example files
              //'./*.js',
              'applications/answer.js',              
            ],
            exclude: [
                './Gruntfile.js'
            ],          
            directives: { // example directives
              node: true,              
            },            
          },
      }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-istanbul');    
    grunt.registerTask('coverage', ['mocha_istanbul:coverage']);
};