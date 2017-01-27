module.exports = function(grunt){
    
    // configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            dev: {
                port: 9000,
            }
        },
        
    
        // uglify
        uglify: {
            build: {
                src: 'src/js/*.js',
                dest: 'dist/js/script.min.js'
            },
            dev: {
                options: {
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: 'all'
                },
                src: 'src/js/*.js',
                dest: 'dist/js/script.js',
            }
        },
        
        // sass
        sass: {
            dev: {
                options: {
                    outputStyle: 'expanded',
                    preserveComments: 'all',
                },
                files: {
                    'dist/css/style.css': 'src/scss/app.scss',
                    'dist/css/bootstrap-custom.css': 'src/scss/bootstrap.scss'
                }
            },
            build: {
                options: {
                    outputStyle: 'compressed',
                },
                files: {
                    'dist/css/style.css': ['src/scss/bootstrap.scss', 'src/scss/app.scss']
                }
            }
        },

        includereplace: {
            dev: {
                options: {},
                files: [
                    {
                        src: '*.html',
                        dest: './',
                        expand: true,
                        cwd: 'src/html/'
                    },
                ],
            }
        },

        
        // watching save files
        watch: {
            js: {
                files: ['src/js/*.js'],
                tasks: ['uglify:dev'],
            },
            css: {
                files: ['src/scss/**/*.scss', 'src/scss/**/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ['src/html/**/*.html'],
                tasks: ['includereplace:dev']
            }
            
        }
        
        
        
    });
    
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-connect');
    grunt.loadNpmTasks('grunt-include-replace');

    
    // Register task
    grunt.registerTask('default', ['uglify:dev', 'sass:dev', 'connect:dev']);
    grunt.registerTask('build', ['uglify:build', 'sass:build']);
    
    
}