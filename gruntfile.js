module.exports = function(grunt) {

    var pjson = grunt.file.readJSON('package.json');

    var config = {
        concat: {
            sdk: {
                // the files to concatenate
                src: [
                    'src/Promises.js',
                    'src/PrivateMethods.js',
                    'src/CloudSocketClientLib.js',
                    'src/CloudApp.js',
                    'src/ACL.js',
                    'src/CloudNotifications.js',
                    'src/CloudObject.js',
                    'src/CloudQuery.js',
                    'src/CloudRole.js',
                    'src/CloudFile.js',
                    'src/CloudGeoPoint.js',
                    'src/CloudTable.js',
                    'src/Column.js',
                    'src/CloudQueue.js',
                    'src/CloudCache.js',
                    'src/CloudPush.js',
                    'src/CloudUser.js',
                    'src/CloudEvent.js'
                ],
                // the location of the resulting JS file
                dest: 'dist/cloudboost.js'
            },
            test: {
                // the files to concatenate
                src: [
                    'test/config.js',
                    'test/util/util.js',
                    'test/requireCloudBoost.js',
                    'test/init/init.js',
                    'test/CloudTable/createTestTables.js',
                    'test/misc/exportimportTable.js',
                    'test/CloudFile/CloudFile.js',
                    'test/CloudUser/userTest.js',
                    'test/CloudEvent/test.js',
                    'test/CloudDevice/deviceTest.js',
                    'test/CloudPush/pushSend.js',
                    'test/CloudCache/CloudCache.js',
                    'test/CloudQueue/tests.js',
                    'test/CloudObject/test.js',
                    'test/CloudObject/bulkApi.js',
                    'test/CloudObject/file.js',
                    'test/CloudFile/FileACL.js',
                    'test/CloudObject/expire.js',
                    'test/CloudObject/notification.js',
                    'test/CloudObject/notificationQueries.js',
                    'test/CloudObject/offlineMode.js',
                    'test/CloudObject/encryption.js',
                    'test/CloudExpire/test.js',
                    'test/CloudQuery/includeList.js',
                    'test/CloudQuery/queryTest.js',
                    'test/CloudQuery/encryption.js',
                    'test/CloudRole/role.js',
                    'test/ACL/aclTest1.js',
                    'test/ACL/queryAcl.js',
                    'test/ACL/searchAcl.js',
                    'test/CloudNotification/test.js',
                    'test/ACL/masterKeyACL.js',
                    'test/CloudGeoPoint/CloudGeoPoint.js',
                    'test/CloudObject/versionTest.js',
                    'test/CloudTable/test.js',
                    'test/CloudTable/cloudtable.js',
                    'test/CloudTable/acl.js',
                    'test/CloudApp/acl.js',
                    'test/CloudApp/authPage.js',
                    'test/AtomicityTests/atomicity.js',
                    'test/CloudTable/deleteTestTables.js',
                    'test/CloudApp/deleteApp.js',
                    'test/DisabledRealtime/init.js',
                    'test/DisabledRealtime/CloudNotificationTests.js',
                    'test/DisabledRealtime/CloudObjectNotification.js',
                    'test/DisabledRealtime/CloudObject.js'
                ],
                dest: 'test/test.js'
            },

            sdkRelease: {
                // the files to concatenate
                src: ['dist/cloudboost.js'],

                // the location of the resulting JS file
                dest: 'dist/' + pjson.version + '.js'
            }
        },

        uglify: {
            uglifyDev: {
                files: {
                    'dist/cloudboost.min.js': ['dist/cloudboost.js']
                }
            },
            uglifyRelease: {
                files: {}
            }
        },

        bumpup: 'package.json' //update the version of package.json
    };

    config.uglify.uglifyRelease.files['dist/' + pjson.version + '.min.js'] = ['dist/' + pjson.version + '.js'];

    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bumpup');

    grunt.registerTask('default', ['concat:test']);
    grunt.registerTask('release', ['concat:sdkRelease', 'uglify:uglifyRelease']);

};
/*
*/
