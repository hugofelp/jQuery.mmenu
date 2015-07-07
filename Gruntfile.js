module.exports = function(grunt) {
	grunt.initConfig({
	    less: {
		    dist: {
			    files: {
			        'dist/css/mmenu.all.custom.css': 'src/less/jquery.mmenu.all.less'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', 'less');
}